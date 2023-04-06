CREATE SCHEMA redehash2;
use redehash2;

CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `updated_at` date DEFAULT NULL,
  `created_at` date DEFAULT NULL,
  `deleted_at` date DEFAULT NULL,
  `user_deleted` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);

CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url_image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date_created` datetime DEFAULT NULL,
  `id_user` int(11) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `post_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_post` int(11) NOT NULL,
  `comment` text NOT NULL,
  `date_comment` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_post` (`id_post`),
  CONSTRAINT `post_comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `post_comments_ibfk_2` FOREIGN KEY (`id_post`) REFERENCES `post` (`id`)
);

CREATE TABLE `users_friends` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user` int(11) NOT NULL,
  `id_friend` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user` (`id_user`),
  KEY `id_friend` (`id_friend`),
  CONSTRAINT `users_friends_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`),
  CONSTRAINT `users_friends_ibfk_2` FOREIGN KEY (`id_friend`) REFERENCES `users` (`id`)
);

CREATE TABLE `users_invite` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_user_from` int(11) NOT NULL,
  `id_user_to` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_user_from` (`id_user_from`),
  KEY `id_user_to` (`id_user_to`),
  CONSTRAINT `users_invite_ibfk_1` FOREIGN KEY (`id_user_from`) REFERENCES `users` (`id`),
  CONSTRAINT `users_invite_ibfk_2` FOREIGN KEY (`id_user_to`) REFERENCES `users` (`id`)
);