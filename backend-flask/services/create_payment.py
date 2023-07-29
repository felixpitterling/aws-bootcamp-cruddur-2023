import os
import json
import stripe

# flask
from flask import jsonify

# helpers
from lib.helpers import model_json
from lib.db import db


class CreatePayment:
    def run(request_data):
        try:
            stripe_keys = {
                "secret_key": os.environ["STRIPE_SECRET_KEY"],
                "publishable_key": os.environ["STRIPE_PUBLISHABLE_KEY"],
            }

            stripe.api_key = stripe_keys["secret_key"]
            data = json.loads(request_data)
            intent = stripe.PaymentIntent.create(
                amount=2000,
                currency='eur',
                automatic_payment_methods={
                    'enabled': True,
                },
                metadata={
                    'customer': data['customer'],
                },
            )

            print(data['customer'])

            sql = db.template('users', 'show_premium')

            # old_premium_status = db.query_commit(sql, {
            # 'cognito_user_id': data['customer']
            # })
            old_premium_status = True
            print(old_premium_status)
          
            return ({
                'clientSecret': intent['client_secret'],
                'oldPremiumStatus': old_premium_status
            })

        except Exception as e:
            return jsonify(error=str(e)), 403

    def check(request):
        stripe.api_key = os.environ["STRIPE_SECRET_KEY"]
        endpoint_secret = 'whsec_6bgTmT7XLX0hvejEyagI3uMW25Ooj7Qx'

        event = None
        payload = request.data
        sig_header = request.headers['STRIPE_SIGNATURE']

        try:
            event = stripe.Webhook.construct_event(
                payload, sig_header, endpoint_secret
            )
        except ValueError as e:
            raise e
        except stripe.error.SignatureVerificationError as e:
            raise e

        if event['type'] == 'payment_intent.succeeded':
            payment_intent = event['data']['object']
            cognito_user_id = payment_intent['metadata']['customer']
            CreatePayment.update(True, cognito_user_id)
            print(cognito_user_id)
        else:
            print('Unhandled event type {}'.format(event['type']))

        return jsonify(success=True)

    def update(premium_status, cognito_user_id):
        sql = db.template('users', 'update_premium')
        db.query_commit(sql, {
            'cognito_user_id': cognito_user_id,
            'premium_status': premium_status
        })
