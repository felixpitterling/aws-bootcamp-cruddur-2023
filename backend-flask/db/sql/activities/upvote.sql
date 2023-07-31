UPDATE public.activities
SET likes_count = likes_count + 1
WHERE activities.uuid = %(uuid)s;;
