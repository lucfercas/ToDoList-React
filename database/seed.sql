BEGIN; 

INSERT INTO todotasks VALUES
 (1, 'Create my first todo', null, null, 'incomplete')


ON CONFLICT(id) DO NOTHING;

COMMIT;

