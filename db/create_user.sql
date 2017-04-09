INSERT INTO user_table (username, name, photo, password, bio, email, age)
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;
