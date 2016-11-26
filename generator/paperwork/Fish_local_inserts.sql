/* ***** INSERTING DATA ***** */
INSERT INTO fish(fishName,ave_wght,picture)
VALUES ("Channel Catfish", "2-12 lbs","/images/Channel-Catfish.jpg"),
       ("Blue Catfish", "35-135 lbs","/images/Blue-Catfish.jpg"),
       ("Flathead Catfish", "2-20 lbs","/images/Flathead-Catfish.jpg"),
       ("Bullhead Catfish", "<2 lbs","/image/bullhead_catfish.jpg"),
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
 VALUES (37.837075,-93.262909,"Pomme de Terre","MO",
          "Hickory")
;

INSERT INTO record(fishName, b_o_w, wght,date_caught)
VALUES ("Channel Catfish", "Lake Jacomo", "34 lbs. 10 oz.",'1976-10-12'),
        ("Bullhead Catfish", "Binder Lake", "4 lbs. 11 oz.",'1977-06-05'),
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
        ("Bullhead Catfish", "Catfish"),
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
VALUES ("Channel Catfish", "Mr Whiskers"),
        ("Channel Catfish", "BarbHead")
;

INSERT INTO bait(fishName, baitName, description)
VALUES ("Channel Catfish", "Nightcrawlers","typical large earthworm"),
        ("Channel Catfish", "Chicken Liver","raw"),
        ("Channel Catfish", "Stink bait","blood, cheese, ground liver"),
        ("Channel Catfish", "Cut Shad","Whole"),
        ("Channel Catfish", "Hotdog","soaked in grape coolaid"),
        ("Blue Catfish", "Nightcrawlers","typical large earthworm"),
        ("Blue Catfish", "Chicken Liver","raw"),
        ("Blue Catfish", "Stink bait","blood, cheese, ground liver"),
        ("Blue Catfish", "Cut Shad","Whole"),
        ("Blue Catfish", "Hotdog","soaked in grape coolaid"),
        ("Blue Catfish", "Chicken","Whole fryer soaked in garlic and oil"),
        ("Flathead Catfish", "Nightcrawlers","typical large earthworm"),
        ("Flathead Catfish", "Chicken Liver","raw"),
        ("Flathead Catfish", "Stink bait","blood, cheese, ground liver"),
        ("Flathead Catfish", "Cut Shad","Whole"),
        ("Largemouth Bass", "Rappala","2 hook minnow"),
        ("Largemouth Bass", "Rubber Worm","slip weight rig")

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
        ("Hotdog"),
        ("Chicken")
;

INSERT INTO boat(loc_id)
VALUES  (1)
;

INSERT INTO bank(loc_id)
VALUES  (1)
;

INSERT INTO fishlog(fishName,loc_id,wght,length,baitName,notes)
VALUES  ("Channel Catfish", 1, 2, 22,"Nightcrawlers","sunset on bottom")
;
