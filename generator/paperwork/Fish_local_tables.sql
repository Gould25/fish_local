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
CREATE TABLE if NOT EXISTS location(
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

/*Creating table record */
CREATE TABLE IF NOT EXISTS record(
  fishName VARCHAR(25) NOT NULL,
  b_o_w VARCHAR(25) NOT NULL,
  wght INTEGER(4) NOT NULL,
  length INTEGER(4),
  line_wght INTEGER(3) NOT NULL,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
  /*FOREIGN KEY (b_o_w) REFERENCES location (b_o_w)
  ON UPDATE CASCADE ON DELETE CASCADE*/
);

/*Creating table family */
CREATE TABLE IF NOT EXISTS family(
  fishName VARCHAR(25) NOT NULL,
  familyName VARCHAR(25) NOT NULL,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
);

/*Creating table alias */
CREATE TABLE IF NOT EXISTS alias(
  fishName VARCHAR(25) NOT NULL,
  aliasName VARCHAR(25) NOT NULL,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
);

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

INSERT INTO record(fishName, b_o_w, wght, length, line_wght)
VALUES ("Channel Catfish", "Pomme de Terre", 57, NULL, 30)
;

INSERT INTO family(fishName, familyName)
VALUES ("Channel Catfish", "Catfish")
;

INSERT INTO alias(fishName, aliasName)
VALUES ("Channel Catfish", "Mr Whiskers")
;
