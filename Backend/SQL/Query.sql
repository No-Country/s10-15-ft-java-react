-- Creación de la tabla Usuarios
CREATE TABLE s10Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMINISTRADOR', 'VENDEDOR', 'ALMACEN') NOT NULL,
    otherDetails TEXT
);

-- Creación de la tabla Productos
CREATE TABLE s10Products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    productName VARCHAR(255) NOT NULL,
    itemCode VARCHAR(50) NOT NULL,
    category INT,
    unitPrice DECIMAL(10, 2) NOT NULL,
    quantityStock INT NOT NULL,
    pathImage VARCHAR(255),
    locationDeposit VARCHAR(255),
    provider VARCHAR(255),
    description TEXT,
    warehouseStatus VARCHAR(50)
);

-- Creación de la tabla Transacciones
CREATE TABLE s10transactions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDProduct INT,
    transactionType ENUM('entrada', 'salida') NOT NULL,
    quantity INT NOT NULL,
    dateTimeTransaction DATETIME NOT NULL,
    IDUser INT,
    INDEX IDProduct_idx (IDProduct),
    INDEX IDUser_idx (IDUser)
);

-- Creación de la tabla Ajustes de Inventario
CREATE TABLE s10SettingsInventory (
    ID INT PRIMARY KEY,
    IDProduct INT,
    adjustedQuantity INT NOT NULL,
    reasonAdjustment TEXT NOT NULL,
    dateTimeSetting DATETIME NOT NULL,
    IDUser INT,
    INDEX IDProduct_idx (IDProduct),
    INDEX IDUser_idx (IDUser)
);

-- Creación de la tabla Notificaciones
CREATE TABLE s10Notifications (
    ID INT PRIMARY KEY,
    IDUser INT,
    messageNotification TEXT NOT NULL,
    dateTimeNotification DATETIME NOT NULL,
    INDEX IDUser_idx (IDUser)
);

-- Creación de la tabla Categorías de Productos
CREATE TABLE s10CategoriesProducts (
    ID INT PRIMARY KEY,
    nameCategory VARCHAR(255) NOT NULL
);

-- Creación de la tabla Permisos
CREATE TABLE s10Permissions (
    ID INT PRIMARY KEY,
    IDUser INT,
    permissionSpecific BOOLEAN,
    INDEX IDUser_idx (IDUser)
);

-- Creación de la tabla Historial de Búsquedas
CREATE TABLE s10historySearches (
    ID INT PRIMARY KEY,
    IDUser INT,
    searchTerm VARCHAR(255) NOT NULL,
    dateTimeSearch DATETIME NOT NULL,
    INDEX IDUser_idx (IDUser)
);











----------------------------------------------------------------
-- Creación de la tabla Usuarios
CREATE TABLE sUsers (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMINISTRADOR', 'VENDEDOR', 'ALMACEN') NOT NULL,
    otherDetails TEXT
);

-- Creación de la tabla Productos
CREATE TABLE sProducts (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    productName VARCHAR(255) NOT NULL,
    itemCode VARCHAR(50) NOT NULL,
    category INT,
    unitPrice DECIMAL(10, 2) NOT NULL,
    quantityStock INT NOT NULL,
    pathImage VARCHAR(255),
    locationDeposit VARCHAR(255),
    provider VARCHAR(255),
    description TEXT,
    warehouseStatus VARCHAR(50)
);

-- Creación de la tabla Transacciones
CREATE TABLE s10transactions (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDProduct INT,
    transactionType ENUM('entrada', 'salida') NOT NULL,
    quantity INT NOT NULL,
    dateTimeTransaction DATETIME NOT NULL,
    IDUser INT,
    FOREIGN KEY (IDProduct) REFERENCES sProducts(ID),
    FOREIGN KEY (IDUser) REFERENCES sUsers(ID)
);

-- Creación de la tabla Ajustes de Inventario
CREATE TABLE s10SettingsInventory (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDProduct INT,
    adjustedQuantity INT NOT NULL,
    reasonAdjustment TEXT NOT NULL,
    dateTimeSetting DATETIME NOT NULL,
    IDUser INT,
    FOREIGN KEY (IDProduct) REFERENCES s10Products(ID),
    FOREIGN KEY (IDUser) REFERENCES s10Users(ID)
);

-- Creación de la tabla Notificaciones
CREATE TABLE s10Notifications (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDUser INT,
    messageNotification TEXT NOT NULL,
    dateTimeNotification DATETIME NOT NULL,
    FOREIGN KEY (IDUser) REFERENCES s10Users(ID)
);

-- Creación de la tabla Categorías de Productos
CREATE TABLE s10CategoriesProducts (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    nameCategory VARCHAR(255) NOT NULL
);

-- Creación de la tabla Permisos
CREATE TABLE s10Permissions (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDUser INT,
    permissionSpecific BOOLEAN, -- Pueden ser varios campos booleanos según los permisos necesarios
    FOREIGN KEY (IDUser) REFERENCES s10Users(ID)
);

-- Creación de la tabla Historial de Búsquedas
CREATE TABLE s10historySearches (
    ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDUser INT,
    searchTerm VARCHAR(255) NOT NULL,
    dateTimeSearch DATETIME NOT NULL,
    FOREIGN KEY (IDUser) REFERENCES s10Users(ID)
);
