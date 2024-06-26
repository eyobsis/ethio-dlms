-- Create the users table
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` INT PRIMARY KEY AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  `gender` VARCHAR(255),
  `phone` VARCHAR(255),
  `active_user` INT NOT NULL,
  `created_at` DATETIME,
  INDEX (`email`)
) ENGINE=InnoDB;

-- user_roles table
CREATE TABLE IF NOT EXISTS `user_roles` (
  `user_roles_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_role_id` INT NOT NULL UNIQUE,
  `user_id` INT,
  `role_name` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;


--files table
CREATE TABLE IF NOT EXISTS `files` (
  `file_id` INT PRIMARY KEY AUTO_INCREMENT,
  `fileName` VARCHAR(255) NOT NULL,
  `filePath` VARCHAR(255) NOT NULL,
  `user_id` INT,
  `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

--new Driving License tranee registrant table 
CREATE TABLE IF NOT EXISTS `driving_license_trainee` (
  `trainee_id` INT PRIMARY KEY AUTO_INCREMENT,
  `address` VARCHAR(255) NOT NULL,
  `dob` VARCHAR(255) NOT NULL,
  `vehicle_type` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `user_id` INT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- license_renewals table
CREATE TABLE IF NOT EXISTS `license_renewals` (
  `renewal_id` INT PRIMARY KEY AUTO_INCREMENT,
  `user_id` INT,
  `email` VARCHAR(255) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  `vehicle_type` VARCHAR(255) NOT NULL,
  `expiry_date` VARCHAR(255) NOT NULL,
  `license_number` VARCHAR(255) NOT NULL,
  `dob` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB;


--admin approve reject table for trainee
CREATE TABLE IF NOT EXISTS `trainee_approval_status` (
  `approval_id` INT PRIMARY KEY AUTO_INCREMENT,
  `trainee_id` INT,
  `status` ENUM('approved', 'rejected') NOT NULL,
  `admin_comment` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`trainee_id`) REFERENCES `driving_license_trainee`(`trainee_id`)
  
) ENGINE=InnoDB;

--admin approve reject table for renewals
CREATE TABLE IF NOT EXISTS `renewal_approval_status` (
  `approval_id` INT PRIMARY KEY AUTO_INCREMENT,
  `renewal_id` INT,
  `status` ENUM('approved', 'rejected') NOT NULL,
  `admin_comment` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`renewal_id`) REFERENCES `license_renewals`(`renewal_id`)
) ENGINE=InnoDB;



-- Add orders
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT,
  `created_at` DATETIME,
  `total_amount` DECIMAL(10, 2),
  `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') DEFAULT 'pending',
  PRIMARY KEY (`order_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;

-- Add order_status
CREATE TABLE IF NOT EXISTS `order_status` (
  `order_status_id` INT NOT NULL AUTO_INCREMENT,
  `order_id` INT NOT NULL,
  `status` ENUM('pending', 'processing', 'shipped', 'delivered', 'cancelled') NOT NULL,
  `updated_at` DATETIME,
  PRIMARY KEY (`order_status_id`),
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`)
) ENGINE=InnoDB;

-- categories
CREATE TABLE IF NOT EXISTS `vehicle_categories` (
  `category_id` INT PRIMARY KEY AUTO_INCREMENT,
  `category_name` VARCHAR(100) NOT NULL,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;






-- product_images
CREATE TABLE IF NOT EXISTS `user_profile_images` (
  `image_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT,
  `image_url` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

