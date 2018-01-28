-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 19, 2016 at 12:44 PM
-- Server version: 5.5.36
-- PHP Version: 5.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `enc_type`
--

-- --------------------------------------------------------

--
-- Table structure for table `mail`
--

CREATE TABLE IF NOT EXISTS `mail` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `to_mail` varchar(30) NOT NULL,
  `from` varchar(30) NOT NULL,
  `des` varchar(300) NOT NULL,
  `link` varchar(100) NOT NULL,
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `mail`
--

INSERT INTO `mail` (`mid`, `to_mail`, `from`, `des`, `link`) VALUES
(1, 'charles@gmail.com', 'admin@gmail.com', 'read it', '12Abstract.docx'),
(2, 'sam@gmail.com', 'admin@gmail.com', 'study it', '12Abstract.docx'),
(3, 'jibin@gmail.com', 'admin@gmail.com', 'read it', '1401  WE WISH YOU.mp3'),
(4, 'jibin@gmail.com', 'admin@gmail.com', 'okk', '12Abstract.docx'),
(5, 'sam@gmail.com', 'admin@gmail.com', 'zxc ', '1801  WE WISH YOU.mp3'),
(6, 'ashok@gmail.com', 'jacksingh.d@gmail.com', 'hhjhhjh', '1Abstract.docx'),
(7, 'ashok@gmail.com', 'admin@gmail.com', 'aaaa', 'ID004PRIYA.docx'),
(8, 'ashok@gmail.com', 'admin@gmail.com', 'aaaa', 'ID004PRIYA.docx'),
(9, 'ashok@gmail.com', 'admin@gmail.com', 'aaaa', 'ID004PRIYA.docx'),
(10, 'jibin@gmail.com', 'admin@gmail.com', 'klklklkl', 'ID006Abstract.docx'),
(11, 'jibin@gmail.com', 'admin@gmail.com', 'klklklkl', 'ID006Abstract.docx'),
(12, 'jack@gmail.com', 'admin@gmail.com', 'hai', 'ID002AdvancedEncryptionStandard.docx'),
(13, 'ashok@gmail.com', 'admin@gmail.com', 'ss', 'ID002AdvancedEncryptionStandard.docx'),
(14, 'ashok@gmail.com', 'admin@gmail.com', 'aaa', 'ID00601  WE WISH YOU.mp3'),
(15, 'jack@gmail.com', 'admin@gmail.com', 'hai', 'ID007Abstract.docx'),
(16, 'jack@gmail.com', 'ashok@gmail.com', 'hai', 'ID010-Athi Maram Thulir Vidaamal.mp3'),
(17, 'jack@gmail.com', 'ashok@gmail.com', 'hai', 'ID010-Athi Maram Thulir Vidaamal.mp3'),
(18, 'jack@gmail.com', 'ashok@gmail.com', 'hai', 'ID010-Athi Maram Thulir Vidaamal.mp3'),
(19, 'jack@gmail.com', 'ashok@gmail.com', 'hai', 'ID010-Athi Maram Thulir Vidaamal.mp3'),
(20, 'ashok@gmail.com', 'sam@gmail.com', 'sasas', 'ID00801  WE WISH YOU.mp3'),
(21, 'jack@gmail.com', 'ashok@gmail.com', 'hai', 'ID007Abstract.docx'),
(22, 'jack@gmail.com', 'ashok@gmail.com', 'hai', 'ID001Abstract.docx'),
(23, 'ashok@gmail.com', 'admin@gmail.com', 'asas', 'ID007Abstract.docx');

-- --------------------------------------------------------

--
-- Table structure for table `owner_tbl`
--

CREATE TABLE IF NOT EXISTS `owner_tbl` (
  `oid` varchar(30) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `addr` varchar(300) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `upass` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `owner_tbl`
--

INSERT INTO `owner_tbl` (`oid`, `name`, `phone`, `email`, `addr`, `uname`, `upass`) VALUES
('COM001', 'jack', '8887772221', 'ashok@gmail.com', 'chennai', 'jack', 'jack'),
('COM003', 'ganesh', '8887772221', 'ganesh@gmail.com', 'madurai', 'ganesh', 'ganesh'),
('COM004', 'david', '77777777777', 'dasan@gmail.com', 'tirunelveli', 'david', 'david');

-- --------------------------------------------------------

--
-- Table structure for table `reg_tbl`
--

CREATE TABLE IF NOT EXISTS `reg_tbl` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(30) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `upass` varchar(30) NOT NULL,
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=11 ;

--
-- Dumping data for table `reg_tbl`
--

INSERT INTO `reg_tbl` (`rid`, `name`, `phone`, `email`, `uname`, `upass`) VALUES
(2, 'sam', '99948339521', 'jack@gmail.com', 'sam', 'sam'),
(9, 'ashok', '99948339521', 'ashok@gmail.com', 'ashok', 'ashok'),
(10, 'selvam', '8899776655', 'selvam@gmail.com', 'selvam', 'selvam');

-- --------------------------------------------------------

--
-- Table structure for table `upload_tbl`
--

CREATE TABLE IF NOT EXISTS `upload_tbl` (
  `upid` varchar(30) NOT NULL,
  `rid` varchar(30) NOT NULL,
  `up_name` varchar(100) NOT NULL,
  `uname` varchar(30) NOT NULL,
  `upass` varchar(30) NOT NULL,
  `type` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `upload_tbl`
--

INSERT INTO `upload_tbl` (`upid`, `rid`, `up_name`, `uname`, `upass`, `type`) VALUES
('ID001', '2', 'ID001Abstract.docx', 'sam', 'sam', '1'),
('ID002', '2', 'ID00201  WE WISH YOU.mp3', 'sam', 'sam', '1'),
('ID003', '2', 'ID003PRIYA.docx', 'sam', 'sam', '1'),
('ID004', '2', 'ID004Abstract.docx', 'aa', 'aa', ''),
('ID005', '2', 'ID005PRIYA.docx', 'aa', 'aa', ''),
('ID006', '2', 'ID006OnlineExam.pdf', 'aa', 'aa', ''),
('ID007', '9', 'ID007Abstract.docx', 'ashok', 'ashok', '1'),
('ID008', '9', 'ID00801  WE WISH YOU.mp3', 'ashok', 'ashok', '1'),
('ID010', '9', 'ID010-Athi Maram Thulir Vidaamal.mp3', 'aa', 'aa', ''),
('ID011', '2', 'ID011-Athi Maram Thulir Vidaamal.mp3', 'sam', 'sam', '1');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
