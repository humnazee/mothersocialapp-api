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
  title TEXT,
  content TEXT,
  image_url TEXT, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
INSERT INTO posts(title, content, image_url, created_at)
VALUES
  ('Beach fun', 'Enjoying holidays with kids on my favourite beach ', 'https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP );
  

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER,
  comment TEXT
);

CREATE TABLE likes(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  post_id INTEGER
);
