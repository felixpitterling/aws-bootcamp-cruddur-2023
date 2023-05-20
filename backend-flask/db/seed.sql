-- this file was manually created
INSERT INTO public.users (display_name, email, handle, cognito_user_id)
VALUES
  ('Felix Pitterling', 'f.pitterling@gmail.com','felix' ,'MOCK'),
  ('Caitlin Tabin', 'f.pitterling+1@gmail.com','Caitlin' ,'MOCK'),
  ('Soenke', 'felixpitterling@googlemail.com','soenke' ,'MOCK');

INSERT INTO public.activities (user_uuid, message, expires_at)
VALUES
  (
    (SELECT uuid from public.users WHERE users.handle = 'felix' LIMIT 1),
    'This was imported as seed data!',
    current_timestamp + interval '10 day'
  )