CREATE DATABASE social_app;
\c social_app

CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name TEXT,
  email TEXT,
  password_digest TEXT
);


CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INT,
  content TEXT,
  location TEXT,
  image_url TEXT, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);


CREATE TABLE reviews(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER,
  reviews TEXT
);

CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER
);