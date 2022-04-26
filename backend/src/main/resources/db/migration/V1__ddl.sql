-------------------------------------------------
-- Scripts for database creation
-- December 2021 - olvdanny
--------------------------------------------------


-------------------------------------------------
--   Create domains & extensions
-------------------------------------------------
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE DOMAIN d_abv numeric(2, 1) CHECK (VALUE > 0.0);

SET timezone = 'Europe/Brussels';
-------------------------------------------------
--   Create translations table
-------------------------------------------------
CREATE TABLE translations
(
    id SMALLSERIAL PRIMARY KEY,
    fr VARCHAR(1028) NOT NULL,
    en VARCHAR(1028) NOT NULL,
    error_key VARCHAR(512)
);

-------------------------------------------------
--   Create beer_types table
-------------------------------------------------
CREATE TABLE beer_types
(
    id    SMALLSERIAL PRIMARY KEY,
    name  VARCHAR(128) NOT NULL,
    color VARCHAR(128) NOT NULL
);

-------------------------------------------------
--   Create beers table
-------------------------------------------------
CREATE TABLE beers
(
    id          SMALLSERIAL PRIMARY KEY,
    name        VARCHAR(128) NOT NULL,
    image_src   VARCHAR(128) NOT NULL,
    beer_type   SMALLSERIAL  NOT NULL,
    description SMALLSERIAL  NOT NULL,
    abv         d_abv        NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (beer_type) REFERENCES beer_types (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (description) REFERENCES translations (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-------------------------------------------------
--   Create cities table
-------------------------------------------------
CREATE TABLE cities
(
    id   SMALLSERIAL PRIMARY KEY,
    name VARCHAR(128) NOT NULL
);

-------------------------------------------------
--   Create places table
-------------------------------------------------
CREATE TABLE places
(
    id      SMALLSERIAL PRIMARY KEY,
    name    VARCHAR(128) NOT NULL,
    type    VARCHAR(128) NOT NULL,
    address VARCHAR(128) NOT NULL,
    url     VARCHAR(512) NOT NULL,
    city_id SMALLSERIAL  NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (city_id) REFERENCES cities (id) ON UPDATE CASCADE ON DELETE CASCADE
);

-------------------------------------------------
--   Create beer_places table
-------------------------------------------------
CREATE TABLE beer_places
(
    id       SMALLSERIAL PRIMARY KEY,
    place_id SMALLSERIAL,
    beer_id  SMALLSERIAL,
    FOREIGN KEY (place_id) REFERENCES places (id) ON UPDATE CASCADE ON DELETE CASCADE,
    FOREIGN KEY (beer_id) REFERENCES beers (id) ON UPDATE CASCADE ON DELETE CASCADE

);

