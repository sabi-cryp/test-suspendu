USE my_web_service_db;

CREATE TABLE IF NOT EXISTS clients (
  id INT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);
