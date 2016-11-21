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
  PRIMARY KEY (lat,lng,fishName,b_o_w),
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
  CONSTRAINT FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
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
  aliasName VARCHAR(25) NOT NULL UNIQUE,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
);

/*Creating table bait */
CREATE TABLE if NOT EXISTS bait(
  fishName VARCHAR(25) NOT NULL,
  baitName VARCHAR(25) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (baitName),
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
  ON UPDATE CASCADE ON DELETE CASCADE
);
