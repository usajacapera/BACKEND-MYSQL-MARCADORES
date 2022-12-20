CREATE DATABASE if NOT EXISTS deportes;

USE deportes;

CREATE TABLE if NOT EXISTS `usuarios` (
`usu_id` BIGINT(20) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
`usu_email` VARCHAR(200) NOT NULL UNIQUE,
`usu_clave` VARCHAR(200) NOT NULL,
`usu_nombres` VARCHAR(200) NOT NULL,
`usu_apellidos` VARCHAR(200) NOT NULL,
UNIQUE KEY (usu_id)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `eventos` (
  `eve_id` int(11) NOT NULL AUTO_INCREMENT,
  `eve_fecha` date NOT NULL,
  `equ_equipo1` int(11) NOT NULL COMMENT 'foranea a equipos id',
  `equ_equipo2` int(11) NOT NULL COMMENT 'foranea a equipos id',
  `eve_marca1` int(11) NOT NULL DEFAULT '0',
  `eve_marca2` int(11) NOT NULL DEFAULT '0',
  `dep_id` int(11) NOT NULL DEFAULT '0' COMMENT 'foranea a deportes id',
  `eve_descrip` text,
  PRIMARY KEY (`eve_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

CREATE TABLE if NOT EXISTS `deportes` (
  `dep_id` BIGINT(20) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `dep_nombre` VARCHAR(50) NOT NULL UNIQUE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

CREATE TABLE if NOT EXISTS `equipos` (
  `equ_id` BIGINT(20) unsigned NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `equ_nombre` VARCHAR(150) NOT NULL UNIQUE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;








CREATE DATABASE if not exists LIBRARY;

USE LIBRARY;

CREATE TABLE IF NOT EXISTS `libros` (
  `lib_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `lib_nombre` varchar(100) NOT NULL,
  `lib_autor` varchar(100) NOT NULL,
  `lib_editorial` varchar(100) NOT NULL,
  PRIMARY KEY (`lib_id`),
  UNIQUE KEY `lib_id` (`lib_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

{
    "usu_email": "jesus.capera@o365.unab.edu.co",
    "usu_clave": "1278",
    "usu_nombres": "Jesús Antonio",
    "usu_apellidos": "Capera Acuña"
}

{
    "lib_nombre": "LA ILIADA",
    "lib_autor": "Homero",
    "lib_editorial": "Planeta"
}

CREATE TABLE producto(
  pro_id INT
)