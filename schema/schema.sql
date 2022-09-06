-- Since it's a prototype won't normalize the tables just the barebone. Ignoring all createdDate and updatedDate for all tables also
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(256) UNIQUE NOT NULL,
    fullName VARCHAR(256) NOT NULL
);
CREATE TABLE flights (
    id INT PRIMARY KEY AUTO_INCREMENT,
    airline VARCHAR(128) NOT NULL
);
-- CREATE TABLE flightClasses (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     flightId INT NOT NULL,
--     class VARCHAR(64) NOT NULL
-- );
CREATE TABLE hotels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    imageLink VARCHAR(512),
    overallRating DECIMAL(1, 1) DEFAULT 0.0,
    bestReview TEXT
);
-- CREATE TABLE hotelRooms (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     hotelId INT NOT NULL,
--     name VARCHAR(256) NOT NULL,
--     price DECIMAL(4, 2) DEFAULT 0.00
-- );
CREATE TABLE restaurants (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    imageLink VARCHAR(512),
    overallRating DECIMAL(1, 1) DEFAULT 0.0,
    bestReview TEXT
);
CREATE TABLE leisures (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    imageLink VARCHAR(512),
    overallRating DECIMAL(1, 1) DEFAULT 0.0
);
CREATE TABLE itinerary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hotelRoomId INT NOT NULL
);
CREATE TABLE activities (
    itineraryId INT NOT NULL,
    dayNumber SMALLINT NOT NULL,
    leisureId INT NOT NULL,
    restaurantId INT NOT NULL
);
-- Preload data
INSERT INTO flights
SET airline = "Delta";