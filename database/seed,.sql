BEGIN; 

INSER INTO tasks VALUES
(1, "Buy some milk", 0, 0, important)

ON CONFLICT(id) DO NOTHING;

COMMIT;

