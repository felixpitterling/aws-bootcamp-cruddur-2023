UPDATE public.users 
SET 
  premium_status = %(premium_status)s
WHERE 
  users.cognito_user_id = %(cognito_user_id)s;