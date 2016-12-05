/*****     Fish Locale initial Data Base     *****/

/* Creating Database */

CREATE DATABASE if NOT EXISTS Fish_local;

USE Fish_local;

/* ***** Creating tables ***** */

/* Creating table fish */
CREATE TABLE if NOT EXISTS fish(
  fishName Varchar(25) NOT NULL,
  ave_wght Varchar(15),
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
  baitName VARCHAR(25) NOT NULL,
  description TEXT NOT NULL,
  PRIMARY KEY (baitName)
);

/*Creating table Artificial */
CREATE TABLE if NOT EXISTS artificial(
  baitName VARCHAR(25) NOT NULL,
  size VARCHAR(55),
  color VARCHAR(55),
  PRIMARY KEY (size,color),
  FOREIGN KEY (baitName) REFERENCES bait (baitName)
    ON UPDATE CASCADE ON DELETE CASCADE
);

/*Creating table Organic */
CREATE TABLE if NOT EXISTS organic(
  baitName VARCHAR(25) NOT NULL,
  FOREIGN KEY (baitName) REFERENCES bait (baitName)
    ON UPDATE CASCADE ON DELETE CASCADE
);

/*Creating table fishlog */
CREATE TABLE IF NOT EXISTS fishlog(
  logNum INTEGER NOT NULL AUTO_INCREMENT,
  fishName VARCHAR(25) NOT NULL,
  loc_id INTEGER(3) NOT NULL,
  wght FLOAT(6),
  length FLOAT(5),
  baitName VARCHAR(25) NOT NULL,
  notes TEXT,
  PRIMARY KEY (logNum),
  FOREIGN KEY (fishName) REFERENCES fish (fishName)
    ON UPDATE CASCADE ON DELETE CASCADE,
  FOREIGN KEY (baitName) REFERENCES bait (baitName)
    ON UPDATE CASCADE ON DELETE CASCADE
);

/* adding foreign key loc_id  to fishlog */
ALTER TABLE fishlog ADD FOREIGN KEY (loc_id) REFERENCES location (loc_id)
  ON UPDATE CASCADE ON DELETE CASCADE
;

/* ***** INSERTING DATA ***** */
INSERT INTO fish(fishName,ave_wght,picture)
VALUES ("Channel Catfish", "2-12 lbs","/images/Channel-Catfish.jpg"),
       ("Blue Catfish", "35-135 lbs","/images/Blue-Catfish.jpg"),
       ("Flathead Catfish", "2-20 lbs","/images/Flathead-Catfish.jpg"),
       ("Black Bullhead", "<2 lbs","/image/bullhead_catfish.jpg"),
       ("Largemouth Bass","0.5-4.5","/image/largemaouth-bass.jpg"),
       ("White Bass", "0.25-1.25","/images/white-bass.jpg"),
       ("Striped Bass", "5-20", "/images/striped-bass.jpg"),
       ("Hybrid Striped Bass", "7-10", "/images/hybrid-striped-bass.jpg"),
       ("Smallmouth Bass", "0.5-4", "/images/smallmouth-bass.jpg"),
       ("Kentucky Bass", "0.5-3.5", "/images/kentucky-bass.jpg"),
       ("Black Crappie", "<4", "/images/black-crappie.jpg"),
       ("White Crappie", "7-10", "/images/white-crappie.jpg"),
       ("Goggle-Eye", "1", "/images/goggle-eye.jpg"),
       ("Muskellunge", "39", "/images/muskellunge.jpg"),
       ("Northern Pike", "40+", "/images/norther-pike.jpg"),
       ("Spoonbill", "160", "/images/spoonbill.jpg"),
       ("Brown Trout", "10", "/images/brown-trout.jpg"),
       ("Rainbow Trout", "1.5", "/images/rainbow-trout.jpg"),
       ("Walleye", "8", "/images/walleye.jpg"),
       ("Bigmouth Buffalo", "35", "/images/bigmouth-buffalo.jpg"),
       ("Smallmouth Buffalo", "35", "/images/smallmouth-buffalo.jpg"),
       ("Common Carp", "8", "/images/common-carp.jpg"),
       ("Grass Carp", "25", "/images/grass-carp.jpg"),
       ("Bluegill", "0.75", "/images/bluegill.jpg")
;
INSERT INTO location(lat,lng,b_o_w,state,county)
 VALUES (37.837075,-93.262909,"Pomme de Terre","MO","Hickory"),
        (38.201491,-92.623494,"Osage River","MO","Miller"),
        (38.116625,-92.663908,"Lake of the Ozarks","MO","Miller"),
        (37.689125,-92.632192,"Clayton Pond","MO","Laclede"),
        (37.535240,-92.371943,"Gasconade River","MO","Laclede"),
        (37.731700,-92.858162,"Bennet Spring","MO","Dallas"),
        (37.797050,-93.374136,"Pomme de Terre","MO","Hickory"),
        (37.798650,-93.371869,"Pomme de Terre","MO","Hickory")
;

INSERT INTO record(fishName, b_o_w, wght,date_caught)
VALUES ("Channel Catfish", "Lake Jacomo", "34 lbs. 10 oz.",'1976-10-12'),
        ("Black Bullhead", "Binder Lake", "4 lbs. 11 oz.",'1977-06-05'),
        ("Blue Catfish", "Missouri River", "130 lbs. 0 oz.",'2010-07-20'),
        ("Flathead Catfish", "Montrose Lake", "77 lbs. 8 oz.",'2003-04-28'),
        ("Largemouth Bass", "Bull Shoals Lake", "13 lbs. 14 oz.",'1961-04-21'),
        ("White Bass", "Table Rock Lake", "5 lbs. 6 oz.",'2002-03-19'),
        ("Striped Bass", "Bull Shoals Lake", "65 lbs. 2 oz.",'2015-05-21'),
        ("Smallmouth Bass", "Stockton Lake", "7 lbs. 2 oz.",'1994-12-18'),
        ("Kentucky Bass", "Table Rock Lake", "7 lbs. 8 oz.",'1966-04-06'),
        ("Hybrid Striped Bass", "Lake of the Ozarks", "20 lbs. 8 oz.",'1986-11-22'),
        ("Black Crappie", "Private Pond", "5 lbs. 0 oz.",'2006-04-21'),
        ("White Crappie", "Farm Pond", "4 lbs. 9 oz.",'2000-03-05'),
        ("Goggle-Eye", "Big Piney River", "2 lbs. 12 oz.",'1968-06-15'),
        ("Muskellunge", "Lake of the Ozarks", "41 lbs. 2 oz.",'1981-03-09'),
        ("Spoonbill", "Table Rock Lake", "140 lbs. 9 oz.",'2015-03-21'),
        ("Northern Pike", "Stockton Lake", "18 lbs. 9 oz.",'1975-04-26'),
        ("Brown Trout", "Lake Taneycomo", "28 lbs. 12 oz.",'2009-11-20'),
        ("Rainbow Trout", "Roaring River", "18 lbs. 1 oz.",'2009-08-14'),
        ("Walleye", "Bull Shoals Lake", "21 lbs. 1 oz.",'1988-03-26'),
        ("Bigmouth Buffalo", "Loch-Loma Lake", "56 lbs. 0 oz.",'1976-08-19'),
        ("Smallmouth Buffalo", "Lake of the Ozarks", "36 lbs. 12 oz.",'1986-06-10'),
        ("Common Carp", "Rothwell Park Lake", "50 lbs. 6 oz.",'1996-06-02'),
        ("Grass Carp", "Crowder State Park", "69 lbs. 0 oz.",'2002-11-13'),
        ("Bluegill", "Farm Pond", "3 lbs. 0 oz.",'1963-06-08')
;

INSERT INTO family(fishName, familyName)
VALUES ("Channel Catfish", "Catfish"),
        ("Blue Catfish", "Catfish"),
        ("Flathead Catfish", "Catfish"),
        ("Black Bullhead", "Catfish"),
        ("Largemouth Bass", "Bass"),
        ("White Bass", "Bass"),
        ("Striped Bass", "Bass"),
        ("Smallmouth Bass", "Bass"),
        ("Hybrid Striped Bass", "Bass"),
        ("Kentucky Bass", "Bass"),
        ("Black Crappie", "Panfish"),
        ("White Crappie", "Panfish"),
        ("Goggle-Eye", "Panfish"),
        ("Muskellunge", "Pikes"),
        ("Northern Pike", "Pikes"),
        ("Spoonbill", "Sturgeon"),
        ("Brown Trout", "Trout"),
        ("Rainbow Trout", "Trout"),
        ("Walleye", "Perch"),
        ("Bigmouth Buffalo", "Sucker"),
        ("Smallmouth Buffalo", "Sucker"),
        ("Common Carp", "Minnow"),
        ("Grass Carp", "Minnow"),
        ("Bluegill", "Panfish")
;

INSERT INTO alias(fishName, aliasName)
VALUES ("Channel Catfish", "Spotted cat"),
        ("Channel Catfish", "Fiddler"),
        ("Channel Catfish", "Lady Cat"),
        ("Channel Catfish", "Chucklehead Cat"),
        ("Channel Catfish", "Willow Cat"),
        ("Blue Catfish", "Old Blue"),
        ("Flathead Catfish", "Steel Head Cat"),
        ("Largemouth Bass", "Bigmouth Bass"),
        ("Muskellunge", "Musky"),
        ("Goggle-Eye", "Rock Bass"),
        ("Northern Pike", "Duckbill"),
        ("Kentucky Bass", "Spotted Bass"),
        ("White Crappie", "Papermouth")
;

INSERT INTO bait(baitName, description)
VALUES ("Nightcrawlers","typical large earthworm"),
        ("Chicken Liver","raw"),
        ("Stink bait","blood, cheese, ground liver"),
        ("Cut Shad","Whole"),
        ("Rappala","2 hook minnow"),
        ("Rubber Worm","slip weight rig"),
        ("Small Minnow","Small Minnow")
;

INSERT INTO artificial(baitName,size,color)
VALUES  ("Rappala", "6inch","Black/Silver"),
        ("Rubber Worm", "6 inch", "Black"),
        ("Rubber Worm", "6 inch", "Black/Silver"),
        ("Rubber Worm", "6 inch", "Shortreuse"),
        ("Rubber Worm", "6 inch", "Oil can"),
        ("Rubber Worm", "6 inch", "Purple")
;

INSERT INTO organic(baitName)
VALUES  ("Nightcrawlers"),
        ("Chicken Liver"),
        ("Stink bait"),
        ("Cut Shad"),
        ("Small Minnow")
;

INSERT INTO fishlog(fishName,loc_id,wght,length,baitName,notes)
VALUES  ("Channel Catfish", 1, 2, 22,"Nightcrawlers","sunset on bottom"),
        ("Black Bullhead", 4, .75, 8,"Nightcrawlers","bottom"),
        ("Largemouth Bass", 4, 4.75, 18,"Rubber Worm","Black"),
        ("Goggle-Eye", 5, .75, 9,"Rubber Worm","Tree stump"),
        ("Rainbow Trout", 6, 2.35, 17,"Small Minnow","swimming"),
        ("White Crappie", 8, 1.1, 9,"Small Minnow","20' water"),
        ("Blue Catfish", 8, 10.75, 26,"Cut Shad","bottom")
;
