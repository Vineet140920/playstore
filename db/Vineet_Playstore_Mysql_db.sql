-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: owner_service
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `application`
--

DROP TABLE IF EXISTS `application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `application` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` varchar(255) DEFAULT NULL,
  `download_count` int NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `rating` double NOT NULL,
  `release_date` date DEFAULT NULL,
  `version` varchar(255) DEFAULT NULL,
  `visibility` bit(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `application`
--

LOCK TABLES `application` WRITE;
/*!40000 ALTER TABLE `application` DISABLE KEYS */;
INSERT INTO `application` VALUES (1,'A cool app for everyone.',504,'Utility','CoolApp',4.500998003992016,'2023-01-15','1.0.0',_binary ''),(2,'An exciting game for all ages.',1503,'Game','FunGame',4.800133067198935,'2023-06-01','2.3.1',_binary ''),(3,'Boost your productivity with this app.',800,'Productivity','ProductiveApp',4.3,'2022-11-20','1.2.0',_binary ''),(5,'Stay connected with your friends.',2000,'Social','SocialBuzz',4.7,'2023-02-25','3.1.2',_binary ''),(10,'A trendy fashion app to keep up with the latest trends.',10003,'Fashion','Fashionista',4.500049990001999,'2023-06-15','1.0',_binary ''),(11,'A women\'s health tracking app for wellness and fitness.',50000,'Women\'s Health','Healthify',4.7,'2023-03-01','2.3',_binary ''),(12,'A beauty app offering makeup tutorials and product reviews.',30000,'Beauty','GlamUp',4.3,'2022-11-20','3.1',_binary ''),(13,'A collection of brain-teasing puzzles and games.',7500,'Games','MindGames',4.2,'2024-01-05','1.4',_binary ''),(14,'An app promoting sustainable living and eco-friendly tips.',12000,'Lifestyle','EcoLiving',4.6,'2023-07-10','1.2',_binary ''),(15,'Your companion for daily workouts and fitness routines.',45000,'Fitness','WorkoutPal',4.8,'2023-09-14','1.8',_binary ''),(16,'A personal stylist app that helps you choose outfits.',22000,'Fashion','StylePro',4.4,'2023-04-22','1.5',_binary ''),(17,'A hub for gaming news, reviews, and live streams.',18000,'Games','GameMaster',4.1,'2023-02-17','2.1',_binary ''),(18,'A guide to yoga exercises and meditation.',15000,'Wellness','YogaZen',4.5,'2023-05-23','1.0',_binary ''),(19,'Plan your perfect vacation with TravelBuddy.',24000,'Travel','TravelBuddy',4.6,'2023-07-12','1.3',_binary ''),(20,'Discover and share delicious recipes.',32000,'Food & Drink','RecipeMaster',4.7,'2023-06-18','2.2',_binary ''),(21,'Keep track of your pet\'s health and wellness.',13000,'Pets','PetCare',4.3,'2023-03-08','1.1',_binary ''),(22,'A book reading and review platform.',28000,'Books','BookLover',4.4,'2023-04-29','2.0',_binary ''),(23,'Monitor your fitness progress and achieve your goals.',37000,'Fitness','FitTrack',4.8,'2023-08-05','1.9',_binary ''),(24,'Stream and discover new music.',54000,'Music','MusicJam',4.9,'2023-09-10','2.4',_binary ''),(25,'Create and share digital art.',14000,'Art & Design','ArtStudio',4.3,'2023-07-22','1.2',_binary ''),(26,'Get the latest movie reviews and recommendations.',42000,'Entertainment','MovieBuff',4.5,'2023-06-25','2.1',_binary ''),(27,'Tips and tricks for maintaining your garden.',11000,'Lifestyle','GardenGurus',4.2,'2023-05-11','1.3',_binary ''),(28,'Meditation and mindfulness exercises.',25000,'Wellness','Mindfulness',4.6,'2023-08-30','1.6',_binary ''),(29,'Easy and delicious recipes for home cooking.',33000,'Food & Drink','HomeChef',4.7,'2023-03-15','2.2',_binary ''),(30,'Your guide to the best travel destinations.',27000,'Travel','TravelGuide',4.5,'2023-04-07','1.4',_binary ''),(31,'Tips and advice for a healthier lifestyle.',38000,'Health & Fitness','HealthyLiving',4.7,'2023-09-01','1.1',_binary ''),(32,'Get fashion advice and style tips.',25000,'Fashion','FashionGuru',4.4,'2023-06-19','2.0',_binary ''),(33,'Exciting adventure games to challenge your skills.',19000,'Games','AdventureGames',4.3,'2023-02-21','1.5',_binary ''),(34,'Your guide to beauty products and routines.',35001,'Beauty','BeautyEssentials',4.5,'2023-05-27','1.2',_binary ''),(35,'A puzzle game to keep your mind sharp.',8000,'Games','MindMaze',4.2,'2024-01-08','1.3',_binary ''),(36,'Crafting projects and ideas for all skill levels.',18000,'Hobbies','Craftsy',4.4,'2023-03-23','1.1',_binary ''),(37,'Track your fitness journey and stay motivated.',41000,'Fitness','FitJourney',4.7,'2023-07-05','1.7',_binary ''),(38,'A music streaming app with personalized playlists.',56000,'Music','MusicStream',4.8,'2023-09-12','2.5',_binary ''),(39,'Edit and enhance your photos with ease.',29000,'Photography','PhotoEditor',4.3,'2023-08-14','1.2',_binary ''),(40,'A collection of recipes from around the world.',34000,'Food & Drink','CookBook',4.6,'2023-06-07','2.3',_binary ''),(41,'Explore new travel destinations and experiences.',26000,'Travel','TravelExplorer',4.5,'2023-04-15','1.4',_binary ''),(42,'A guide to wellness and self-care.',22000,'Health & Wellness','WellnessGuide',4.6,'2023-07-18','1.5',_binary ''),(43,'Your daily dose of fashion news and trends.',28000,'Fashion','FashionFix',4.5,'2023-05-14','2.1',_binary ''),(44,'A challenging puzzle game for all ages.',9000,'Games','PuzzleQuest',4.3,'2024-01-12','1.6',_binary ''),(45,'Beauty tips and tutorials for every occasion.',36000,'Beauty','BeautyTips',4.6,'2023-03-28','1.0',_binary ''),(46,'Embark on epic adventures in this game.',20000,'Games','AdventureQuest',4.4,'2023-02-25','1.5',_binary ''),(47,'Master the art of crafting with these projects.',19000,'Hobbies','CraftMasters',4.4,'2023-03-18','1.1',_binary ''),(48,'Live a healthier life with this fitness app.',42000,'Fitness','FitLife',4.7,'2023-08-08','1.8',_binary ''),(49,'Discover new music based on your mood.',58000,'Music','MusicVibes',4.9,'2023-09-17','2.5',_binary ''),(50,'Add magic to your photos with this editor.',31000,'Photography','PhotoMagic',4.3,'2023-08-20','1.3',_binary ''),(51,'A digital cookbook with easy-to-follow recipes.',35000,'Food & Drink','Cookery',4.6,'2023-06-10','2.4',_binary ''),(52,'Plan your next travel adventure with ease.',28000,'Travel','TravelAdventures',4.6,'2023-04-18','1.4',_binary ''),(53,'Track your wellness journey with this app.',23000,'Health & Wellness','WellnessTracker',4.7,'2023-07-25','1.5',_binary ''),(54,'Stay updated with the latest fashion trends.',29000,'Fashion','FashionVogue',4.6,'2023-05-19','2.2',_binary ''),(55,'A world of puzzles to challenge your mind.',9500,'Games','PuzzleWorld',4.3,'2024-01-15','1.7',_binary ''),(56,'demo application',0,'demo','demo email app',0,'2024-09-03','1.0.1',_binary ''),(57,'new app',0,'social','newApp',0,'2024-09-03','v1',_binary '');
/*!40000 ALTER TABLE `application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `owner`
--

DROP TABLE IF EXISTS `owner`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `owner` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `owner`
--

LOCK TABLES `owner` WRITE;
/*!40000 ALTER TABLE `owner` DISABLE KEYS */;
INSERT INTO `owner` VALUES (3,'$2a$10$FdykmC59hlukO2E6BzOCRumvi4BjNjMwRFfiB7V8OhEbsUDK6A/Cm','owner12');
/*!40000 ALTER TABLE `owner` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `application_id` bigint DEFAULT NULL,
  `comment` varchar(255) DEFAULT NULL,
  `rating` int NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,'Amazing app! Super useful and easy to use.',5,'john_doe'),(2,1,'Pretty good, but could use some improvements.',4,'jane_smith'),(3,2,'I love this game! So much fun.',5,'alice_wonder'),(4,3,'It helps, but it lacks some features I need.',3,'john_doe'),(5,5,'Great app for staying connected with friends.',4,'jane_smith'),(6,1,'good',5,'user'),(7,1,'Absolutely love this app for fashion tips!',5,'user1'),(8,1,'Great app, but could use more outfit ideas.',4,'user2'),(9,2,'Healthify has really helped me track my fitness!',5,'user3'),(10,2,'Good, but the UI could be improved.',4,'user4'),(11,3,'Perfect app for beauty enthusiasts!',5,'user5'),(12,3,'Content is good, but the app crashes sometimes.',3,'user6'),(13,4,'Fun games, keeps me engaged for hours.',4,'user7'),(14,4,'Challenging puzzles, but some levels are too hard.',4,'user8'),(15,5,'Very informative and eco-friendly tips.',5,'user9'),(16,5,'Great app, but could add more features.',4,'user10'),(17,6,'WorkoutPal is the best fitness app I\'ve used!',5,'user11'),(18,6,'Good, but needs more workout routines.',4,'user12'),(19,7,'StylePro has really improved my fashion sense.',4,'user13'),(20,7,'Excellent app for daily outfit ideas!',5,'user14'),(21,8,'Great for gaming news and reviews.',4,'user15'),(22,8,'Good content, but the app is a bit slow.',4,'user16'),(23,9,'YogaZen has transformed my yoga practice!',5,'user17'),(24,9,'Good for beginners, but lacks advanced content.',4,'user18'),(25,10,'TravelBuddy helped me plan my dream vacation.',4,'user19'),(26,10,'Fantastic app for travel enthusiasts!',5,'user20'),(27,11,'RecipeMaster has amazing recipes!',5,'user21'),(28,11,'Good, but could use more vegan options.',4,'user22'),(29,12,'PetCare is great for keeping track of my pet\'s health.',4,'user23'),(30,12,'Highly recommended for pet owners!',5,'user24'),(31,13,'BookLover is a must-have for book lovers.',4,'user25'),(32,13,'Love the book recommendations!',5,'user26'),(33,14,'FitTrack keeps me motivated every day!',5,'user27'),(34,14,'Good app, but the UI could be more intuitive.',4,'user28'),(35,15,'MusicJam is my go-to music app!',5,'user29'),(36,15,'Great selection of music, but ads are annoying.',4,'user30'),(37,16,'ArtStudio is perfect for digital artists.',5,'user31'),(38,16,'Good, but needs more brushes and tools.',4,'user32'),(39,17,'MovieBuff always has the best movie reviews!',5,'user33'),(40,17,'Good, but could use more indie movie recommendations.',4,'user34'),(41,18,'GardenGurus has helped me improve my gardening skills.',4,'user35'),(42,18,'Great tips for both beginners and experts!',5,'user36'),(43,19,'Mindfulness app is great for daily meditation.',5,'user37'),(44,19,'Good content, but the sessions could be longer.',4,'user38'),(45,20,'HomeChef makes cooking easy and fun!',5,'user39'),(46,20,'Good, but needs more vegetarian recipes.',4,'user40'),(47,21,'TravelGuide has been my companion for all my trips.',4,'user41'),(48,21,'Fantastic app for travel enthusiasts!',5,'user42'),(49,22,'HealthyLiving has really improved my lifestyle.',5,'user43'),(50,22,'Good tips, but could add more detailed guides.',4,'user44'),(51,23,'FashionGuru has great fashion advice.',4,'user45'),(52,23,'I always get compliments on my outfits now!',5,'user46'),(53,24,'AdventureGames are fun and engaging.',4,'user47'),(54,24,'Best adventure games I\'ve played in a while!',5,'user48'),(55,10,'best app',5,'user'),(56,2,'This app is nice ',5,'rahul');
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'$2a$10$qpPIGRs9MP3LADgU0EmYuev0ljIMifHXxQYbvNWGnVRqC25QFUp52','user12'),(5,'$2a$10$OuFItoh3R8mSfHtwZjrR2.BDBu2.fQFcTXgz/lwsg1xYr9vCPPIHK','user15');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-03 22:17:16
