-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: phonebookdb
-- ------------------------------------------------------
-- Server version	5.7.24

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
-- Table structure for table `myfriends`
--

DROP TABLE IF EXISTS `myfriends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `myfriends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `phone_number` varchar(10) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` int(11) NOT NULL,
  `position` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `status` tinyint(1) NOT NULL,
  `status_delete` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `myfriends`
--

LOCK TABLES `myfriends` WRITE;
/*!40000 ALTER TABLE `myfriends` DISABLE KEYS */;
INSERT INTO `myfriends` VALUES (1,'Somchai','Nachuchom','0928807938',34,1,'Swordman','2022-10-11 15:58:43','2022-10-11 15:58:43',1,0),(3,'Chanapon','Jaidee','0821109322',19,2,'Priest','2022-10-11 16:04:09','2022-10-16 10:46:36',0,1),(4,'Chokpaisan','Sripraiwan','0882828800',26,1,'Software Engineer','2022-10-11 16:29:06','2022-10-11 16:29:06',1,0),(5,'Harry','Potter','2039922333',19,1,'Magician','2022-10-16 09:13:00','2022-10-16 11:05:56',0,0),(6,'Josie','Modalet','0699284092',27,2,'Saller','2022-10-16 09:14:08','2022-10-16 12:29:40',1,0),(7,'Wellon','Mannoza','0586678372',22,2,'Student','2022-10-16 09:15:22','2022-10-16 11:22:26',1,0),(8,'Marrin','Javob','2290948753',21,2,'Student','2022-10-16 09:23:41','2022-10-16 09:23:41',1,0),(9,'Copter','Siamniyom','0992837449',22,1,'Student','2022-10-16 11:24:35','2022-10-16 11:24:35',1,0),(10,'Bowie','Rakchana','0892837042',45,2,'Teacher','2022-10-16 11:25:47','2022-10-16 11:25:47',1,0),(11,'Golang','C#','0793846721',5,1,'Programer','2022-10-16 11:26:35','2022-10-16 13:07:23',0,0),(12,'Sonya','Malaina','0192730293',33,2,'Manager','2022-10-16 11:27:28','2022-10-16 11:27:28',1,0),(13,'Thai','Tosmit','0298370958',30,1,'Singer','2022-10-16 11:28:25','2022-10-16 11:28:25',1,0),(14,'Leanne','Graham','2098737998',46,1,'Data Engineer','2022-10-16 12:17:44','2022-10-16 12:17:44',1,0),(15,'Parusorn','Tantirattanapan','0646193101',26,2,'Saller','2022-10-16 12:19:18','2022-10-16 12:19:18',1,0),(16,'Pitchaya','Saetan','0954644692',20,2,'Student','2022-10-16 12:20:45','2022-10-16 12:20:45',1,0),(17,'Lalisa','Manobal','0987654321',25,2,'Singer','2022-10-16 12:21:45','2022-10-16 12:24:02',1,0),(18,'Jennie','Kim','0123456789',26,2,'Singer','2022-10-16 12:22:29','2022-10-16 12:22:29',1,0),(19,'Rose','Park','0897563541',25,2,'Singer','2022-10-16 12:23:45','2022-10-16 12:23:45',1,0),(20,'John','JJ','0655734810',30,1,'Student','2022-10-16 12:25:26','2022-10-16 12:25:26',1,0),(21,'Mark','Tuan','0855644321',29,1,'Rapper','2022-10-16 12:26:47','2022-10-16 12:26:47',1,0),(22,'Jackson','Wang','0937699021',28,1,'Rapper','2022-10-16 12:27:51','2022-10-16 12:27:51',1,0);
/*!40000 ALTER TABLE `myfriends` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-16 20:14:15
