CREATE DATABASE  legaliter_db;

USE legaliter_db;

CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL, 
    role ENUM('user', 'admin') NOT NULL DEFAULT 'user',
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

UPDATE users
SET role = 'admin'
WHERE email = 'jenny@gmail.com';

-- Opcional: Verifica que el cambio se haya realizado
SELECT id, username, email, role FROM users WHERE email = 'jenny@gmail.com';