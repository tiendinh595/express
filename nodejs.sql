/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : nodejs

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2016-09-06 17:15:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for posts
-- ----------------------------
DROP TABLE IF EXISTS `posts`;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `img` varchar(500) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of posts
-- ----------------------------
INSERT INTO `posts` VALUES ('1', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('2', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('3', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('4', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('5', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('6', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('13', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('14', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('15', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('16', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('17', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
INSERT INTO `posts` VALUES ('18', 'post 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste sunt porro delectus cum officia magnam.', 'http://d38wlcdzwz02m5.cloudfront.net/about/cdn/farfuture/NRkWDhoZ1EZjmeswTNpWaFne7_jNyKamIZzDugeXCEc/mtime:1439316343/sites/mktg-new/files/SwaggerLogo_1.png');
