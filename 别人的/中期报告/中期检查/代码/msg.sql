/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50515
Source Host           : localhost:3306
Source Database       : msg

Target Server Type    : MYSQL
Target Server Version : 50515
File Encoding         : 65001

Date: 2016-03-17 17:09:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `admin`
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `a_id` int(10) NOT NULL AUTO_INCREMENT,
  `a_username` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `a_password` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `a_name` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`a_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('1', 'admin', 'admin', null);
INSERT INTO `admin` VALUES ('2', 'kx', 'thisthis', null);

-- ----------------------------
-- Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `m_id` varchar(20) COLLATE utf8_bin NOT NULL,
  `m_name` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  `type` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `text` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `picture` text COLLATE utf8_bin,
  `sound` text COLLATE utf8_bin,
  `video` text COLLATE utf8_bin,
  `date` date DEFAULT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('11111', '测试', '寇鑫的测试', '测试', null, null, null, '2016-03-03');
INSERT INTO `message` VALUES ('111111111111', 'asfds', 'asdfsadfsd', 'asdfasfdsaf', null, null, null, '2016-03-03');
INSERT INTO `message` VALUES ('121212121212', '寇鑫', '寇鑫', '我是寇鑫', null, null, null, '2016-01-07');
INSERT INTO `message` VALUES ('1212121212121', '寇鑫', '寇鑫', '我是寇鑫', null, null, null, '2016-01-07');
INSERT INTO `message` VALUES ('123', '兵马俑', '文物', '秦始皇兵马俑', null, null, null, '2016-01-07');
INSERT INTO `message` VALUES ('123456789123456', '铜钱', '文物', '这是一个秦国时期的铜钱', null, null, null, '2016-01-07');
INSERT INTO `message` VALUES ('234', '长城', '文物', '中国长城', null, null, null, '2016-01-07');

-- ----------------------------
-- Table structure for `msg_type`
-- ----------------------------
DROP TABLE IF EXISTS `msg_type`;
CREATE TABLE `msg_type` (
  `mt_id` int(10) NOT NULL AUTO_INCREMENT,
  `mt_name` varchar(10) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`mt_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of msg_type
-- ----------------------------
INSERT INTO `msg_type` VALUES ('8', '测试');
INSERT INTO `msg_type` VALUES ('9', '测试1');
INSERT INTO `msg_type` VALUES ('10', '测试2');
INSERT INTO `msg_type` VALUES ('11', '文物');
INSERT INTO `msg_type` VALUES ('12', '寇鑫');
INSERT INTO `msg_type` VALUES ('13', '寇鑫的测试');
INSERT INTO `msg_type` VALUES ('14', '寇鑫的测试2');
INSERT INTO `msg_type` VALUES ('15', 'asdfsadfsd');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `u_id` int(10) NOT NULL AUTO_INCREMENT,
  `u_username` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `u_password` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  `u_name` varchar(20) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`u_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
