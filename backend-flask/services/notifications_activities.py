from datetime import datetime, timedelta, timezone
from opentelemetry import trace

tracer = trace.get_tracer("home.notifications")

class NotificationsActivities:
  def run():

    with tracer.start_as_current_span("notification-activities-request"):

      #Would normally be resolved from a token from the frontend
      user_id='fd68ee78-b790-11ed-afa1-0242ac120002'
 
      span = trace.get_current_span()
      span.set_attribute("app.user_id", user_id)

      now = datetime.now(timezone.utc).astimezone()
      results = [{
        'uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
        'handle':  'coco',
        'message': 'I am a white unicorn',
        'created_at': (now - timedelta(days=2)).isoformat(),
        'expires_at': (now + timedelta(days=5)).isoformat(),
        'likes_count': 5,
        'replies_count': 1,
        'reposts_count': 0,
        'replies': [{
          'uuid': '26e12864-1c26-5c3a-9658-97a10f8fea67',
          'reply_to_activity_uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
          'handle':  'Worf',
          'message': 'This post has no honor!',
          'likes_count': 0,
          'replies_count': 0,
          'reposts_count': 0,
          'created_at': (now - timedelta(days=2)).isoformat()
        }],
      },
      ]

    span.set_attribute("app.notification_length", len(results))

    return results