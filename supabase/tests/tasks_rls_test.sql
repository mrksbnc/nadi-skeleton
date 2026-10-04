BEGIN;
SELECT plan(18);

INSERT INTO auth.users (id, email)
VALUES
  ('11111111-1111-1111-1111-111111111111', 'owner@example.com'),
  ('22222222-2222-2222-2222-222222222222', 'other@example.com');

SELECT ok(
  NOT has_table_privilege('anon', 'public.tasks', 'select,insert,update,delete'),
  'anon has no table privileges'
);
SELECT ok(
  has_table_privilege('authenticated', 'public.tasks', 'select'),
  'authenticated can select tasks'
);
SELECT ok(
  has_table_privilege('authenticated', 'public.tasks', 'insert'),
  'authenticated can insert tasks'
);
SELECT ok(
  has_table_privilege('authenticated', 'public.tasks', 'update'),
  'authenticated can update tasks'
);
SELECT ok(
  has_table_privilege('authenticated', 'public.tasks', 'delete'),
  'authenticated can delete tasks'
);

SET LOCAL ROLE anon;
SELECT throws_ok(
  $$SELECT * FROM public.tasks$$,
  '42501',
  NULL,
  'anon cannot read tasks'
);
SELECT throws_ok(
  $$INSERT INTO public.tasks (title) VALUES ('anon task')$$,
  '42501',
  NULL,
  'anon cannot create tasks'
);
SELECT throws_ok(
  $$UPDATE public.tasks SET title = 'anon edit'$$,
  '42501',
  NULL,
  'anon cannot update tasks'
);
SELECT throws_ok(
  $$DELETE FROM public.tasks$$,
  '42501',
  NULL,
  'anon cannot delete tasks'
);

SET LOCAL ROLE authenticated;
SET LOCAL request.jwt.claim.sub = '11111111-1111-1111-1111-111111111111';
SELECT results_eq(
  $$INSERT INTO public.tasks (title) VALUES ('Owner task') RETURNING title$$,
  ARRAY['Owner task'],
  'an owner can create a task'
);
SELECT results_eq(
  $$SELECT title FROM public.tasks$$,
  ARRAY['Owner task'],
  'an owner can read their task'
);
SELECT results_eq(
  $$UPDATE public.tasks SET title = 'Updated task' RETURNING title$$,
  ARRAY['Updated task'],
  'an owner can update their task'
);

SET LOCAL request.jwt.claim.sub = '22222222-2222-2222-2222-222222222222';
SELECT is_empty(
  $$SELECT * FROM public.tasks$$,
  'another user cannot read the owner task'
);
SELECT throws_ok(
  $$INSERT INTO public.tasks (user_id, title)
    VALUES ('11111111-1111-1111-1111-111111111111', 'stolen task')$$,
  '42501',
  NULL,
  'another user cannot create a task for the owner'
);
SELECT is_empty(
  $$UPDATE public.tasks SET title = 'stolen edit' RETURNING title$$,
  'another user cannot update the owner task'
);
SELECT is_empty(
  $$DELETE FROM public.tasks RETURNING title$$,
  'another user cannot delete the owner task'
);

SET LOCAL request.jwt.claim.sub = '11111111-1111-1111-1111-111111111111';
SELECT results_eq(
  $$SELECT title FROM public.tasks$$,
  ARRAY['Updated task'],
  'denied writes left the owner task unchanged'
);
SELECT results_eq(
  $$DELETE FROM public.tasks RETURNING title$$,
  ARRAY['Updated task'],
  'an owner can delete their task'
);

SELECT * FROM finish();
ROLLBACK;
