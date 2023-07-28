from flask import jsonify
import json
import stripe
import os

class CreatePayment:
    def run(response_data):
        try:
            stripe_keys = {
                "secret_key": os.environ["STRIPE_SECRET_KEY"],
                "publishable_key": os.environ["STRIPE_PUBLISHABLE_KEY"],
            }

            stripe.api_key = stripe_keys["secret_key"]

            data = json.loads(response_data)
            intent = stripe.PaymentIntent.create(
                amount=2000,
                currency='eur',
                automatic_payment_methods={
                    'enabled': True,
                },
            )
            return jsonify({
                'clientSecret': intent['client_secret']
            })

        except Exception as e:
            return jsonify(error=str(e)), 403
