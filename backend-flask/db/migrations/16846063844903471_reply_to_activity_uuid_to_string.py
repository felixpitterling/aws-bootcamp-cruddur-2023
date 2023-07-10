from lib.db import db

class ReplyToActivityUuidToStringMigration:
  def migrate_sql():
    data = """
    ALTER TABLE activities ADD COLUMN new_uuid UUID;
    UPDATE activities SET new_uuid = uuid_generate_v4()::uuid;
    ALTER TABLE activities DROP COLUMN reply_to_activity_uuid;
    ALTER TABLE activities RENAME COLUMN new_uuid TO reply_to_activity_uuid;
    """
    return data
  def rollback_sql():
    data = """
    ALTER TABLE activities DROP COLUMN reply_to_activity_uuid;
    ALTER TABLE activities ADD COLUMN reply_to_activity_uuid integer;
    """
    return data

  def migrate():
    db.query_commit(ReplyToActivityUuidToStringMigration.migrate_sql(),{
    })

  def rollback():
    db.query_commit(ReplyToActivityUuidToStringMigration.rollback_sql(),{
    })

migration = ReplyToActivityUuidToStringMigration