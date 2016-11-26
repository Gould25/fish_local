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
       ("Bigmouth Buffalo", "65", "/images/bigmouth-buffalo.jpg"),
       ("Common Carp", "8", "/images/common-carp.jpg"),
       ("Grass Carp", "25", "/images/grass-carp.jpg"),
       ("Bluegill", "0.75", "/images/bluegill.jpg")
;
INSERT INTO location(lat,lng,b_o_w,state,county)
 VALUES (37.837075,-93.262909,"Pomme de Terre","MO",
          "Hickory")
;

INSERT INTO record(fishName, b_o_w, wght, length, line_wght)
VALUES ("Channel Catfish", "Pomme de Terre", 57, NULL, 30)
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
        ("White Crappie", "Panfish"),
        ("White Crappie", "Panfish"),
        ("Goggle-Eye", "Panfish"),
        ("Muskellunge", "Pikes"),
        ("Northern Pike", "Pikes"),
        ("Spoonbill", "Sturgeon"),
        ("Brown Trout", "Trout"),
        ("Rainbow Trout", "Trout"),
        ("Walleye", "Perch"),
        ("Bigmouth Buffalo", "Sucker"),
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
