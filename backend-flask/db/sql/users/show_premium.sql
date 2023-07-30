SELECT 
  (SELECT COALESCE(row_to_json(object_row),'{}'::json) FROM (
    SELECT
      users.premium_status
  ) object_row) as profile
FROM public.users
WHERE users.cognito_user_id = %(cognito_user_id)s
