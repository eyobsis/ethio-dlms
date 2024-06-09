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

-- order_items
CREATE TABLE IF NOT EXISTS `order_items` (
  `order_item_id` INT PRIMARY KEY AUTO_INCREMENT,
  `order_id` INT,
  `product_id` INT,
  `quantity` INT CHECK (quantity > 0),
  `price` DECIMAL(10, 2),
  FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`),
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- categories
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` INT PRIMARY KEY AUTO_INCREMENT,
  `category_name` VARCHAR(100) NOT NULL,
  `description` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- products
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_name` VARCHAR(255),
  `description` TEXT,
  `category_id` INT NOT NULL,
  `image_url` VARCHAR(255),
  `price` DECIMAL(10, 2) CHECK (price >= 0),
  `stock` INT CHECK (stock >= 0),
  `status` VARCHAR(255),
  `tags` VARCHAR(255),
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (`category_id`) REFERENCES `categories`(`category_id`)
) ENGINE=InnoDB;

-- product_images
CREATE TABLE IF NOT EXISTS `product_images` (
  `image_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT,
  `image_url` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`)
) ENGINE=InnoDB;

-- product_reviews
CREATE TABLE IF NOT EXISTS `product_reviews` (
  `review_id` INT PRIMARY KEY AUTO_INCREMENT,
  `product_id` INT,
  `user_id` INT,
  `rating` INT CHECK (rating >= 1 AND rating <= 5),
  `comment` TEXT,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`product_id`) REFERENCES `products`(`product_id`),
  FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`)
) ENGINE=InnoDB;

-- Adding some product categories
INSERT INTO `categories` (category_name, description) VALUES
('Smartphones', 'Mobile phones with advanced features'),
('Laptops', 'Portable computers'),
('Tablets', 'Touchscreen portable devices'),
('Televisions', 'Large screen TVs'),
('Cameras', 'Digital and DSLR cameras'),
('Audio Equipment', 'Speakers, headphones, and audio devices'),
('Wearables', 'Smartwatches and fitness trackers'),
('Home Appliances', 'Refrigerators, washing machines, etc.'),
('Gaming Consoles', 'PlayStation, Xbox, and other gaming consoles'),
('Networking', 'Routers, modems, and networking equipment');

-- Adding roles to the database
INSERT INTO `user_roles` (role_name, created_at) VALUES ('customer', CURRENT_TIMESTAMP), ('admin', CURRENT_TIMESTAMP);
-- Adding initial data for the users table
INSERT INTO `users` (full_name, username, email, phone, password, gender, active_user, created_at)
VALUES 
('John Doe', 'john_doe', 'john@example.com', '555-123-4567', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'male', 1, CURRENT_TIMESTAMP),
('Alice Smith', 'alice_smith', 'alice@example.com', '555-987-6543', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'female', 1, CURRENT_TIMESTAMP),
('Bob Johnson', 'bob_johnson', 'bob@example.com', '555-234-5678', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'male', 1, CURRENT_TIMESTAMP),
('Emily Davis', 'emily_davis', 'emily@example.com', '555-876-5432', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'female', 1, CURRENT_TIMESTAMP),
('Michael Brown', 'michael_brown', 'michael@example.com', '555-345-6789', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'male', 1, CURRENT_TIMESTAMP),
('Sarah Wilson', 'sarah_wilson', 'sarah@example.com', '555-765-4321', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'female', 1, CURRENT_TIMESTAMP),
('David Lee', 'david_lee', 'david@example.com', '555-456-7890', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'male', 1, CURRENT_TIMESTAMP),
('Olivia Martinez', 'olivia_martinez', 'olivia@example.com', '555-654-3210', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'female', 1, CURRENT_TIMESTAMP),
('James Taylor', 'james_taylor', 'james@example.com', '555-567-8901', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'male', 1, CURRENT_TIMESTAMP),
('Emma Anderson', 'emma_anderson', 'emma@example.com', '555-543-2109', '$2b$10$B6yvl4hECXploM.fCDbXz.brkhmgqNlawh9ZwbfkFX.F3xrs.15Xi', 'female', 1, CURRENT_TIMESTAMP);

-- Adding initial data for the user_roles table
INSERT INTO `user_roles` (user_id,role_name, user_role_id,created_at)
VALUES 
(1, 'customer', 1, CURRENT_TIMESTAMP),
(2, 'customer', 1, CURRENT_TIMESTAMP),
(3, 'customer', 1, CURRENT_TIMESTAMP),
(4, 'customer', 1, CURRENT_TIMESTAMP),
(5, 'customer', 1, CURRENT_TIMESTAMP),
(6, 'customer', 1, CURRENT_TIMESTAMP),
(7, 'customer', 1, CURRENT_TIMESTAMP),
(8, 'customer', 1, CURRENT_TIMESTAMP),
(9, 'customer', 1, CURRENT_TIMESTAMP),
(10, 'customer', 1, CURRENT_TIMESTAMP);


-- Adding initial data for the categories table
INSERT INTO `categories` (category_name, description, created_at)
VALUES 
('Smartphones', 'Mobile phones with advanced features', CURRENT_TIMESTAMP),
('Laptops', 'Portable computers', CURRENT_TIMESTAMP),
('Tablets', 'Touchscreen portable devices', CURRENT_TIMESTAMP),
('Televisions', 'Large screen TVs', CURRENT_TIMESTAMP),
('Cameras', 'Digital and DSLR cameras', CURRENT_TIMESTAMP),
('Audio Equipment', 'Speakers, headphones, and audio devices', CURRENT_TIMESTAMP),
('Wearables', 'Smartwatches and fitness trackers', CURRENT_TIMESTAMP),
('Home Appliances', 'Refrigerators, washing machines, etc.', CURRENT_TIMESTAMP),
('Gaming Consoles', 'PlayStation, Xbox, and other gaming consoles', CURRENT_TIMESTAMP),
('Networking', 'Routers, modems, and networking equipment', CURRENT_TIMESTAMP);

-- Adding initial data for the products table
INSERT INTO `products` (product_name, description, category_id, image_url, price, stock, status, tags, created_at)
VALUES 
('iPhone 13 Pro', 'Apple iPhone 13 Pro - 256GB - Graphite', 1, 'iphone13pro.jpg', 1099.99, 50, 'available', 'Apple, iPhone, Smartphone', CURRENT_TIMESTAMP),
('Samsung Galaxy S21 Ultra', 'Samsung Galaxy S21 Ultra - 256GB - Phantom Black', 1, 'galaxys21ultra.jpg', 1199.99, 50, 'available', 'Samsung, Galaxy, Smartphone', CURRENT_TIMESTAMP),
('Dell XPS 13', 'Dell XPS 13 - 13.4" FHD - Core i7 - 16GB RAM - 512GB SSD', 2, 'dellxps13.jpg', 1399.99, 30, 'available', 'Dell, Laptop', CURRENT_TIMESTAMP),
('MacBook Pro 16', 'Apple MacBook Pro 16 - M1 Pro - 16GB RAM - 1TB SSD', 2, 'macbookpro16.jpg', 2399.99, 20, 'available', 'Apple, MacBook, Laptop', CURRENT_TIMESTAMP),
('iPad Air', 'Apple iPad Air - 10.9" - 256GB - Wi-Fi - Space Gray', 3, 'ipadair.jpg', 599.99, 40, 'available', 'Apple, iPad, Tablet', CURRENT_TIMESTAMP),
('Samsung Galaxy Tab S7', 'Samsung Galaxy Tab S7 - 11" - 128GB - Wi-Fi - Mystic Black', 3, 'galaxytabs7.jpg', 649.99, 30, 'available', 'Samsung, Galaxy, Tablet', CURRENT_TIMESTAMP),
('LG OLED C1', 'LG OLED C1 Series 65" - 4K UHD Smart OLED TV', 4, 'lgoledc1.jpg', 2499.99, 10, 'available', 'LG, OLED, TV', CURRENT_TIMESTAMP),
('Sony A7 III', 'Sony Alpha A7 III Mirrorless Digital Camera', 5, 'sonya7iii.jpg', 1999.99, 15, 'available', 'Sony, Camera', CURRENT_TIMESTAMP),
('Bose QuietComfort 45', 'Bose QuietComfort 45 Wireless Noise Cancelling Headphones', 6, 'boseqc45.jpg', 329.99, 25, 'available', 'Bose, Headphones', CURRENT_TIMESTAMP),
('Apple Watch Series 7', 'Apple Watch Series 7 GPS + Cellular, 41mm - Blue Aluminum Case', 7, 'applewatchseries7.jpg', 499.99, 35, 'available', 'Apple, Watch, Wearable', CURRENT_TIMESTAMP),
('Samsung 4-Door Flex Refrigerator', 'Samsung 4-Door Flex Refrigerator with Family Hub - Stainless Steel', 8, 'samsungrefrigerator.jpg', 2999.99, 5, 'available', 'Samsung, Refrigerator, Home Appliance', CURRENT_TIMESTAMP),
('Sony PlayStation 5', 'Sony PlayStation 5 Console - Ultra HD Blu-ray Edition', 9, 'playstation5.jpg', 499.99, 20, 'available', 'Sony, PlayStation, Gaming Console', CURRENT_TIMESTAMP),
('Google Nest Wifi', 'Google Nest Wifi - AC2200 - Mesh Wi-Fi System - 2 Pack', 10, 'googlenestwifi.jpg', 299.99, 15, 'available', 'Google, Nest, Router', CURRENT_TIMESTAMP);

