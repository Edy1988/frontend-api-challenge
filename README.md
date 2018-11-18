
Here are some interactions the API supports. Implement as many as you see fit.

* Creating Users
* Logging in
* Posting Peeps
* Viewing all Peeps *(I suggest you start here)*
* Viewing individual Peeps
* Deleting Peeps
* Liking Peeps
* Unliking Peeps

## Utilities you might find useful

* [The Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for making requests.
* [Postman](https://www.getpostman.com/) or [Insomnia](https://insomnia.rest/) for exploring the API.

## Setting up the environment
SET up this postsql database- copy and paste:

CREATE DATABASE chitterjs; (also create a chitterjs_test database replica using the same commands)

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR (80) UNIQUE NOT NULL,
  password VARCHAR (140) NOT NULL,
  name VARCHAR (100) NOT NULL,
  email VARCHAR (355) UNIQUE NOT NULL
);

CREATE TABLE peeps (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  text VARCHAR (280) NOT NULL,
  timestamp TIMESTAMP
);
