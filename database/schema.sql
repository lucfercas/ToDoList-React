BEGIN;



CREATE TABLE IF NOT EXISTS todotasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    complete INTEGER,
    editing INTEGER,
    importanceLevel TEXT
);

COMMIT; 