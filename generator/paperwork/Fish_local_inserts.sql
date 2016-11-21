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
