-- Since it's a prototype won't normalize the tables just the barebone. Ignoring all createdDate and updatedDate for all tables also
-- CREATE TABLE users (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(256) UNIQUE NOT NULL,
--     fullName VARCHAR(256) NOT NULL
-- );
-- CREATE TABLE flights (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     airline VARCHAR(128) NOT NULL,
--     price DECIMAL(10, 2) NOT NULL DEFAULT 0.0
-- );
-- CREATE TABLE flightClasses (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     flightId INT NOT NULL,
--     class VARCHAR(64) NOT NULL
-- );
CREATE TABLE hotels (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    imageLink VARCHAR(512),
    overallRating DECIMAL(2, 1) DEFAULT 0.0,
    price DECIMAL(10, 2) NOT NULL,
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
    overallRating DECIMAL(2, 1) DEFAULT 0.0,
    bestReview TEXT
);
CREATE TABLE leisures (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(256) NOT NULL,
    imageLink VARCHAR(512)
);
CREATE TABLE itinerary (
    id INT PRIMARY KEY AUTO_INCREMENT,
    hotelId INT NOT NULL
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
-- Hotels
INSERT INTO hotels
SET id = 1,
    name = "The Stratford Hotel London",
    imageLink = "/images/stratford.jpeg",
    overallRating = 8.7,
    price = 250,
    bestReview = "the rooms were big and pretty. all the amenities, and of course a great location.";
INSERT INTO hotels
SET id = 2,
    name = "The Park Tower",
    imageLink = "/images/parktower.jpeg",
    overallRating = 9.2,
    price = 330,
    bestReview = "literally the most spectacular experience in hotels in London. the best of the best. you really feel like pampering yourself. the staff are so kind and welcoming. cleanliness";
-- Restaurants
INSERT INTO restaurants
SET id = 1,
    name = "Flat Three",
    imageLink = "/images/flatthree.jpeg",
    overallRating = 9.5,
    bestReview = "I was in town for the weekend and had an amazing dinner experience with my brothers";
INSERT INTO restaurants
SET id = 2,
    name = "Gulliver's",
    imageLink = "/images/gulliver.jpeg",
    overallRating = 7,
    bestReview = "Quality restaurant. I ordered the Calamari which came with a nice lemon-y flavored Arugula. The calamari was crispy and they were good sized";
-- Leisures
INSERT INTO leisures
SET id = 1,
    name = "Big Bus London Hop-On Hop-Off Tour",
    imageLink = "/images/hope.jpeg";
INSERT INTO leisures
SET id = 2,
    name = "Stonehenge",
    imageLink = "/images/stonehenge.jpeg";
INSERT INTO leisures
SET id = 3,
    name = "Greenwich Sightseeing",
    imageLink = "/images/greenwich.jpeg";
-- Dummy itinerary
INSERT INTO itinerary
SET id = 1,
    hotelId = 1;
INSERT INTO activities
SET itineraryId = 1,
    dayNumber = 1,
    leisureId = 1,
    restaurantId = 1;
INSERT INTO activities
SET itineraryId = 1,
    dayNumber = 2,
    leisureId = 2,
    restaurantId = 2;
INSERT INTO activities
SET itineraryId = 1,
    dayNumber = 3,
    leisureId = 3,
    restaurantId = 1