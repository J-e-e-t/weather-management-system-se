CREATE TABLE IF NOT EXISTS `weather_management_system`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE TABLE IF NOT EXISTS `weather_management_system`.`room` (
  `date` DATE NOT NULL,
  `cc1_temp` VARCHAR(45) NOT NULL,
  `cc1_humidity` VARCHAR(45) NOT NULL,
  `cc1_feels_like` VARCHAR(45) NOT NULL,
  `cc1_min_temp` VARCHAR(45) NOT NULL,
  `cc1_max_temp` VARCHAR(45) NOT NULL,
  `cc2_temp` VARCHAR(45) NOT NULL,
  `cc2_humidity` VARCHAR(45) NOT NULL,
  `cc2_feels_like` VARCHAR(45) NOT NULL,
  `cc2_min_temp` VARCHAR(45) NOT NULL,
  `cc2_max_temp` VARCHAR(45) NOT NULL,
  `cc3_temp` VARCHAR(45) NOT NULL,
  `cc3_humidity` VARCHAR(45) NOT NULL,
  `cc3_feels_like` VARCHAR(45) NOT NULL,
  `cc3_min_temp` VARCHAR(45) NOT NULL,
  `cc3_max_temp` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`date`),
  UNIQUE INDEX `data_UNIQUE` (`date` ASC) VISIBLE);


-- Dummy data

INSERT INTO weather_management_system.room () VALUES('2022-04-28','29','23','33','27','40', '35','24','31','26','41', '37','45','37','25','41');
INSERT INTO weather_management_system.room () VALUES('2022-04-29','30','45','32','21','42', '32','56','33','26','42', '32','23','34','24','42');
INSERT INTO weather_management_system.room () VALUES('2022-04-30','32','34','33','22','41', '31','24','35','26','43', '34','45','32','22','43');
INSERT INTO weather_management_system.room () VALUES('2022-05-01','32','13','31','24','43', '35','53','36','25','44', '31','24','31','24','41');
INSERT INTO weather_management_system.room () VALUES('2022-05-02','31','56','33','22','42', '35','35','36','24','42', '38','22','34','24','40');
INSERT INTO weather_management_system.room () VALUES('2022-05-03','34','45','32','26','43', '36','45','31','24','41', '34','45','35','19','39');
INSERT INTO weather_management_system.room () VALUES('2022-05-04','34','56','31','25','42', '32','67','35','24','42', '31','23','31','24','38');
INSERT INTO weather_management_system.room () VALUES('2022-05-05','31','12','34','26','39', '33','14','34','21','41', '35','21','35','25','40');
INSERT INTO weather_management_system.room () VALUES('2022-05-06','29','23','33','27','40', '35','24','31','26','41', '37','45','37','25','41');
INSERT INTO weather_management_system.room () VALUES('2022-05-07','30','45','32','21','42', '32','56','33','26','42', '32','23','34','24','42');
INSERT INTO weather_management_system.room () VALUES('2022-05-08','32','34','33','22','41', '31','24','35','26','43', '34','45','32','22','43');
INSERT INTO weather_management_system.room () VALUES('2022-05-09','32','13','31','24','43', '35','53','36','25','44', '31','24','31','24','41');
INSERT INTO weather_management_system.room () VALUES('2022-05-10','31','56','33','22','42', '35','35','36','24','42', '38','22','34','24','40');
INSERT INTO weather_management_system.room () VALUES('2022-05-11','34','45','32','26','43', '36','45','31','24','41', '34','45','35','19','39');