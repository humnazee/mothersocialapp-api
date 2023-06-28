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
  ('Decorating chritmas tree', ' happy family', 'https://images.pexels.com/photos/3303614/pexels-photo-3303614.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP ),

   ('Art activity','Help your child in healthy activities','https://images.pexels.com/photos/16485567/pexels-photo-16485567/free-photo-of-mother-with-two-kids-sitting-in-a-playroom.jpeg', CURRENT_TIMESTAMP ),

   ('Stay fit and shine bright', 'Being a mother is learning about strengths', 'https://images.pexels.com/photos/5445218/pexels-photo-5445218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP ),

   ('Me time', 'selfcare isnt selfish', 'https://images.pexels.com/photos/6487208/pexels-photo-6487208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP ),

   (' Beach day', 'All you need is family', 'https://images.pexels.com/photos/1231365/pexels-photo-1231365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP ),

   (' Stay fit and active', 'kids-they do what they see so .', 'https://images.pexels.com/photos/6951846/pexels-photo-6951846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP ),

   ('stay fit with babies', 'Workout with your kids they are not excuses', 'https://images.pexels.com/photos/3094230/pexels-photo-3094230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', CURRENT_TIMESTAMP );

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
