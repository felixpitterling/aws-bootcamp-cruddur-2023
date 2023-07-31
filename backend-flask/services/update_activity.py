
from lib.db import db


class UpdateActivities:
    def run(activity_uuid):
        sql = db.template('activities', 'upvote')
        try:
            db.commit(sql, {
                'uuid': activity_uuid
            })
        except Exception as e:
            print(e)

        return 200
