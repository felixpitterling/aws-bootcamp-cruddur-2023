from datetime import datetime, timedelta, timezone
from opentelemetry import trace


from lib.db import db
from lib.momento import momento
import json

tracer = trace.get_tracer("home.activities")


class HomeActivities:
    # def run(logger):
    def run(cognito_user_id=None):

        # logger.info("Home Activities")

        # with tracer.start_as_current_span("home-activities-mock-data"):
        #   span = trace.get_current_span()
        #   now = datetime.now(timezone.utc).astimezone()
        #   span.set_attribute("app.now", now.isoformat())

        response = momento.get_cache("cruddur-activities", "query-activities")

        if response != "":
            results = json.loads(response)
            print(results)
            return results

        else:
            sql = db.template('activities', 'home')
            results = db.query_array_json(sql)
            results_str = json.dumps(results) 
            momento.set_cache("cruddur-activities", "query-activities", results_str)
            return results
