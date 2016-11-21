/* ***** INSERTING DATA ***** */
INSERT INTO fish(fishName,ave_wght,picture)
VALUES ("Channel Catfish", "2-12 lbs","/images/Channel-Catfish.jpg"),
       ("Blue Catfish", "35-135 lbs","/images/Blue-Catfish.jpg"),
       ("Flathead Catfish", "2-20 lbs","/images/Flathead-Catfish.jpg"),
       ("Black Bullhead Catfish", "<2 lbs","/image/bullhead_catfish.jpg"),
       ("Largemouth Bass","0.5-4.5","/image/largemaouth-bass.png")
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
VALUES ("Channel Catfish", "Mr Whiskers"),
        ("Channel Catfish", "BarbHead")
;

INSERT INTO bait(fishName, baitName, description)
VALUES ("Channel Catfish", "Nightcrawlers","typical large earthworm"),
        ("Largemouth Bass", "Rappala","2 hook minnow")
;

INSERT INTO artificial(baitName,size,color)
VALUES  ("Rappala", "6inch","Black/Silver")
;

INSERT INTO organic(baitName)
VALUES  ("Nightcrawlers")
;

INSERT INTO boat(lat,lng)
VALUES  (37.837075,-93.262909)
;

INSERT INTO bank(lat,lng)
VALUES  (37.837075,-93.262909)
;

INSERT INTO fishlog(fishName,b_o_w,notes)
VALUES  ("channel Catfish", "Pomme de Terre", "Trial log sample")
;
