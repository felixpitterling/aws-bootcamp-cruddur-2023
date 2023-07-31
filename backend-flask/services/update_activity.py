
from lib.db import db
from flask import jsonify


class UpdateActivities:
    def run(activity_uuid):
        print(activity_uuid)
        sql = db.template('activities', 'upvote')
        try:
            db.query_commit(sql, {
                'uuid': activity_uuid
            })
        except Exception as e:
            print(e)
            return jsonify(success=False)

        return jsonify(success=True)
