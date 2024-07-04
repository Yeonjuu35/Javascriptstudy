CREATE TABLE logo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

CREATE TABLE gnb (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

CREATE TABLE gnb_ul_li (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gnb_id INT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    FOREIGN KEY (gnb_id) REFERENCES gnb(id) ON DELETE CASCADE
);

CREATE TABLE util (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

INSERT INTO logo (Text, href, img, cls) VALUES 
('uglyus', '/uglyus/', '/uglyus/img/img_yys/svg/ugly_us_logo.svg', JSON_ARRAY('me-3'));

INSERT INTO gnb (Text, href, cls) VALUES
('우리의미션', 'misson.html', JSON_ARRAY('nav-mission1 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('정기배송', 'misson.html', JSON_ARRAY('nav-mission2 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('싱싱마켓', 'misson.html', JSON_ARRAY('nav-mission3 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('커뮤니티', 'misson.html', JSON_ARRAY('nav-mission4 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li'));

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(1, '미션', 'mission.html'),
(1, '소싱철학', 'social.html'),
(2, '후기', 'mission.html'),
(2, '혜택', 'social.html'),
(2, '이용안내', 'social.html'),
(3, '인기상품', 'mission.html'),
(3, '대기중인상품', 'social.html'),
(4, '오늘의레시피', 'mission.html'),
(4, '채소이야기', 'social.html'),
(4, '어글리어스밥풀루언서', 'social.html');

INSERT INTO util (Text, href, cls) VALUES
('로그인', 'login.html', JSON_ARRAY('d-flex px-0 my-0', 'me-3 font_login', 'nav-link font_login')),
('회원가입', 'consumer.html', JSON_ARRAY('d-flex px-0 my-0', 'font_login', 'nav-link me-0 font_login'));







CREATE TABLE logo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

CREATE TABLE gnb (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

CREATE TABLE gnb_ul_li (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gnb_id INT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    FOREIGN KEY (gnb_id) REFERENCES gnb(id) ON DELETE CASCADE
);

INSERT INTO logo (Text, href, img, cls) VALUES 
('uglyus', '/uglyus/', '/uglyus/img/img_yys/svg/ugly_us_logo.svg', JSON_ARRAY('me-3'));

INSERT INTO gnb (Text, href, cls) VALUES
('우리의미션', 'misson.html', JSON_ARRAY('nav-mission1 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('정기배송', 'misson.html', JSON_ARRAY('nav-mission2 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('싱싱마켓', 'misson.html', JSON_ARRAY('nav-mission3 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('커뮤니티', 'misson.html', JSON_ARRAY('nav-mission4 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li'));

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(1, '미션', 'mission.html'),
(1, '소싱철학', 'social.html'),
(2, '후기', 'mission.html'),
(2, '혜택', 'social.html'),
(2, '이용안내', 'social.html'),
(3, '인기상품', 'mission.html'),
(3, '대기중인상품', 'social.html'),
(4, '오늘의레시피', 'mission.html'),
(4, '채소이야기', 'social.html'),
(4, '어글리어스밥풀루언서', 'social.html');



CREATE TABLE logo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

CREATE TABLE gnb (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);

CREATE TABLE gnb_ul_li (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gnb_id INT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    FOREIGN KEY (gnb_id) REFERENCES gnb(id) ON DELETE CASCADE
);

INSERT INTO logo (Text, href, img, cls) VALUES 
('uglyus', '/uglyus/', '/uglyus/img/img_yys/svg/ugly_us_logo.svg', JSON_ARRAY('me-3'));

INSERT INTO gnb (Text, href, cls) VALUES
('우리의미션', 'misson.html', JSON_ARRAY('nav-mission1 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('정기배송', 'misson.html', JSON_ARRAY('nav-mission2 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('싱싱마켓', 'misson.html', JSON_ARRAY('nav-mission3 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('커뮤니티', 'misson.html', JSON_ARRAY('nav-mission4 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li'));

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
((SELECT id FROM gnb WHERE Text = '우리의미션'), '미션', 'mission.html'),
((SELECT id FROM gnb WHERE Text = '우리의미션'), '소싱철학', 'social.html'),
((SELECT id FROM gnb WHERE Text = '정기배송'), '후기', 'mission.html'),
((SELECT id FROM gnb WHERE Text = '정기배송'), '혜택', 'social.html'),
((SELECT id FROM gnb WHERE Text = '정기배송'), '이용안내', 'social.html'),
((SELECT id FROM gnb WHERE Text = '싱싱마켓'), '인기상품', 'mission.html'),
((SELECT id FROM gnb WHERE Text = '싱싱마켓'), '대기중인상품', 'social.html'),
((SELECT id FROM gnb WHERE Text = '커뮤니티'), '오늘의레시피', 'mission.html'),
((SELECT id FROM gnb WHERE Text = '커뮤니티'), '채소이야기', 'social.html'),
((SELECT id FROM gnb WHERE Text = '커뮤니티'), '어글리어스밥풀루언서', 'social.html');



CREATE TABLE logo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    img VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);


CREATE TABLE gnb (
    id INT PRIMARY KEY AUTO_INCREMENT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    cls JSON NOT NULL
);


CREATE TABLE gnb_ul_li (
    id INT PRIMARY KEY AUTO_INCREMENT,
    gnb_id INT,
    Text VARCHAR(255) NOT NULL,
    href VARCHAR(255) NOT NULL,
    FOREIGN KEY (gnb_id) REFERENCES gnb(id) ON DELETE CASCADE
);


INSERT INTO logo (Text, href, img, cls) VALUES 
('uglyus', '/uglyus/', '/uglyus/img/img_yys/svg/ugly_us_logo.svg', JSON_ARRAY('me-3'));


INSERT INTO gnb (Text, href, cls) VALUES
('우리의미션', 'misson.html', JSON_ARRAY('nav-mission1 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('정기배송', 'misson.html', JSON_ARRAY('nav-mission2 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('싱싱마켓', 'misson.html', JSON_ARRAY('nav-mission3 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li')),
('커뮤니티', 'misson.html', JSON_ARRAY('nav-mission4 me-5 gnb_li rel', 'd-block gnb_a', 'gnb_ul abs', 'gnb_ul_li'));

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(1, '미션', 'mission.html'),
(1, '소싱철학', 'social.html'),
(2, '후기', 'mission.html'),
(2, '혜택', 'social.html'),
(2, '이용안내', 'social.html'),
(3, '인기상품', 'mission.html'),
(3, '대기중인상품', 'social.html'),
(4, '오늘의레시피', 'mission.html'),
(4, '채소이야기', 'social.html'),
(4, '어글리어스밥풀루언서', 'social.html');



INSERT INTO logo (Text, href, img, cls) VALUES
('uglyus', '/uglyus/', '/uglyus/img/img_yys/svg/ugly_us_logo.svg', 'me-3');





CREATE TABLE gnb (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Text VARCHAR(255),
    href VARCHAR(255),
    cls VARCHAR(255)
);

CREATE TABLE gnb_ul_li (
    id INT AUTO_INCREMENT PRIMARY KEY,
    gnb_id INT,
    Text VARCHAR(255),
    href VARCHAR(255),
    FOREIGN KEY (gnb_id) REFERENCES gnb(id)
);

INSERT INTO gnb (Text, href, cls) VALUES
('우리의미션', 'misson.html', 'nav-mission1 me-5 gnb_li rel|d-block gnb_a|gnb_ul abs|gnb_ul_li'),
('정기배송', 'misson.html', 'nav-mission2 me-5 gnb_li rel|d-block gnb_a|gnb_ul abs|gnb_ul_li'),
('싱싱마켓', 'misson.html', 'nav-mission3 me-5 gnb_li rel|d-block gnb_a|gnb_ul abs|gnb_ul_li'),
('커뮤니티', 'misson.html', 'nav-mission4 me-5 gnb_li rel|d-block gnb_a|gnb_ul abs|gnb_ul_li');

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(1, '미션', 'mission.html'),
(1, '소싱철학', 'social.html');

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(2, '후기', 'mission.html'),
(2, '혜택', 'social.html'),
(2, '이용안내', 'social.html');

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(3, '인기상품', 'mission.html'),
(3, '대기중인상품', 'social.html');

INSERT INTO gnb_ul_li (gnb_id, Text, href) VALUES
(4, '오늘의레시피', 'mission.html'),
(4, '채소이야기', 'social.html'),
(4, '어글리어스밥풀루언서', 'social.html');

