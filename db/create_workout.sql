INSERT INTO workouts_table (date, workout_type, distance_unit, distance, time, description, username)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;
