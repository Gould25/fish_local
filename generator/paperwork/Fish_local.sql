CREATE DATABASE if NOT EXISTS Fish_local;

USE Fish_local;

/* ***** Creating tables ***** */

/* Creating table fish */
CREATE TABLE if NOT EXISTS fish(
  fishName Varchar(25) NOT NULL,
  ave_wght Varchar(15) NOT NULL,
  picture Varchar(55),
  PRIMARY KEY (fishName)
);

/*Creating table Location */
Create TABLE if NOT EXISTS location(
  lat Float(10,6) NOT NULL,
  lng Float(10,6) NOT NULL,
  b_o_w VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  county VARCHAR(25) NOT NULL,
  fishName VARCHAR(25) NOT NULL,
  PRIMARY KEY (lat,lng,fishName),
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
);

/*Creating table */




/* ***** INSERTING DATA ***** */
INSERT INTO fish(fishName,ave_wght,picture)
VALUES ("Channel Catfish", "2-12 lbs","/images/Channel-Catfish.jpg"),
       ("Blue Catfish", "35-135 lbs","/images/Blue-Catfish.jpg"),
       ("Flathead Catfish", "2-20 lbs","/images/Flathead-Catfish.jpg"),
       ("Black Bullhead Catfish", "<2 lbs","/image/bullhead_catfish.jpg")
;
INSERT INTO location(lat,lng,b_o_w,state,county,fishName)
 VALUES (37.837075,-93.262909,"Pomme de Terre","MO",
          "Hickory","Channel Catfish"),
        (37.837075,-93.262909,"Pomme de Terre","MO",
          "Hickory","Blue Catfish")
;
