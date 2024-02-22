
DROP TABLE if exists users;
DROP TABLE if exists items;


CREATE TABLE users(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `firstname` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `item_id` BIGINT UNSIGNED NOT NULL
);


CREATE TABLE items(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `era` VARCHAR(255) NULL,
    `maker` VARCHAR(255) NULL,
    `colour` VARCHAR(255) NULL,
    `material` VARCHAR(255) NULL,
    `paid` BIGINT NULL,
    `description` VARCHAR(255) NULL,
    `for_sale` TINYINT(1) NULL
);

ALTER TABLE
    `users` ADD CONSTRAINT `users_item_id_foreign` FOREIGN KEY(`item_id`) REFERENCES `items`(`id`);


