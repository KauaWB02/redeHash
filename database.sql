CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY email_UNIQUE (email),
    updated_at DATE,
    created_at DATE,
    updated_del DATE,
    user_deleted BOOLEAN DEFAULT(FALSE)
);

create table post(
  id int(11) NOT NULL AUTO_INCREMENT,
  url_image varchar(255),
  description varchar(255),
  date_created datetime,
  PRIMARY KEY (id)
);

CREATE TABLE user_posts(
  id int(11) NOT NULL AUTO_INCREMENT,
  id_user int NOT NULL,
  id_post int NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_post) REFERENCES post(id)
);

CREATE TABLE post_comments(
  id int(11) NOT NULL AUTO_INCREMENT,
  id_user int NOT NULL,
  id_post int NOT NULL,
  comments text NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_post) REFERENCES post(id)
);

CREATE TABLE users_invite(
  id int(11) NOT NULL AUTO_INCREMENT,
  id_user_from INT NOT NULL,
  id_user_to INT NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_user_from) REFERENCES users(id),
  FOREIGN KEY (id_user_to) REFERENCES users(id)
);

CREATE TABLE users_friends(
  id int(11) NOT NULL AUTO_INCREMENT,
  id_user INT NOT NULL,
  id_friend INT NOT NULL,
  
  PRIMARY KEY (id),
  FOREIGN KEY (id_user) REFERENCES users(id),
  FOREIGN KEY (id_friend) REFERENCES users(id)
)
