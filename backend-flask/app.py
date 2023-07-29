import os
import sys

from flask import Flask
from flask import request, g, jsonify

from lib.rollbar import init_rollbar
from lib.xray import init_xray
from lib.cors import init_cors
from lib.cloudwatch import init_cloudwatch
from lib.honeycomb import init_honeycomb
from lib.helpers import model_json

import routes.general
import routes.activities
import routes.users
import routes.messages

app = Flask(__name__)

## initalization --------
init_xray(app)
init_honeycomb(app)
init_cors(app)
with app.app_context():
  g.rollbar = init_rollbar(app)

# load routes -----------
routes.general.load(app)
routes.activities.load(app)
routes.users.load(app)
routes.messages.load(app)


# --------

import json
import stripe
from flask_cors import cross_origin

stripe.api_key = os.environ["STRIPE_SECRET_KEY"]

endpoint_secret = 'whsec_6bgTmT7XLX0hvejEyagI3uMW25Ooj7Qx'

@app.route('/api/webhook', methods=['POST'])
@cross_origin()
def webhook():
    event = None
    payload = request.data
    sig_header = request.headers['STRIPE_SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, endpoint_secret
        )
    except ValueError as e:
        # Invalid payload
        raise e
    except stripe.error.SignatureVerificationError as e:
        # Invalid signature
        raise e

    # Handle the event
    if event['type'] == 'payment_intent.succeeded':
      payment_intent = event['data']['object']
      print(payment_intent)
    # ... handle other event types
    else:
      print('Unhandled event type {}'.format(event['type']))

    return jsonify(success=True)

# ----------


if __name__ == "__main__":
  app.run(debug=True)