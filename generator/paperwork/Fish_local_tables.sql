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
  loc_id INTEGER(3) NOT NULL AUTO_INCREMENT,
  lat Float(10,6) NOT NULL,
  lng Float(10,6) NOT NULL,
  b_o_w VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  county VARCHAR(25) NOT NULL,
  PRIMARY KEY (loc_id)
);

/*Creating table record */
CREATE TABLE IF NOT EXISTS record(
  fishName VARCHAR(25) NOT NULL,
  b_o_w VARCHAR(25) NOT NULL,
  wght VARCHAR(20) NOT NULL,
  date_caught DATE NOT NULL,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
);

/*Creating table family */
CREATE TABLE IF NOT EXISTS family(
  fishName VARCHAR(25) NOT NULL,
  familyName VARCHAR(25) NOT NULL,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
);

/*Creating table alias */
CREATE TABLE IF NOT EXISTS alias(
  fishName VARCHAR(25) NOT NULL,
  aliasName VARCHAR(25) NOT NULL UNIQUE,
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
);

/*Creating table bait */
CREATE TABLE if NOT EXISTS bait(
  fishName VARCHAR(25) NOT NULL,
  baitName VARCHAR(25) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (baitName,fishName),
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
);

/*Creating table Artificial */
CREATE TABLE if NOT EXISTS artificial(
  baitName VARCHAR(25) NOT NULL,
  size VARCHAR(15),
  color VARCHAR(15),
  PRIMARY KEY (baitName,size,color)
);

/*Creating table Organic */
CREATE TABLE if NOT EXISTS organic(
  baitName VARCHAR(25) NOT NULL,
  PRIMARY KEY (baitName)
);

/*Creating table boat */
CREATE TABLE if NOT EXISTS boat(
  loc_id INTEGER(3) NOT NULL,
  PRIMARY KEY (loc_id)
);

/*Creating table bank*/
CREATE TABLE if NOT EXISTS bank(
  loc_id INTEGER(3) NOT NULL,
  PRIMARY KEY (loc_id)
);

/*Creating table fishlog */
CREATE TABLE IF NOT EXISTS fishlog(
  logNum INTEGER NOT NULL AUTO_INCREMENT,
  fishName VARCHAR(25) NOT NULL,
  loc_id INTEGER(3),
  wght INTEGER(4),
  length INTEGER(4),
  baitName VARCHAR(25),
  notes TEXT,
  PRIMARY KEY (logNum),
  FOREIGN KEY (fishName) REFERENCES fish (fishName),
  FOREIGN KEY (baitName) REFERENCES bait (baitName)
);

/* adding foreign key loc_id  to fishlog */
ALTER TABLE fishlog ADD FOREIGN KEY (loc_id) REFERENCES location (loc_id)
;
