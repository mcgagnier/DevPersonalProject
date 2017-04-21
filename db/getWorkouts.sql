SELECT date, workout_type, distance_unit, distance, time, description
FROM workouts_table
WHERE username = $1
