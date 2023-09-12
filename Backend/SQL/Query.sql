
-- Creación de la tabla Usuarios
CREATE TABLE s_Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMINISTRADOR', 'VENDEDOR', 'ALMACEN') NOT NULL,
    otherDetails TEXT,
    currencyType VARCHAR(50),
    showDecimals BOOLEAN,
    img VARCHAR(255),
    darkMode BOOLEAN,
    email VARCHAR(255)
);

-- Creación de la tabla Proveedores
CREATE TABLE s_Providers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    providerName VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    contactPhoneNumber VARCHAR(20)
);

-- Creación de la tabla Productos
CREATE TABLE s_Products (
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
CREATE TABLE s_Transactions (
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
CREATE TABLE s_SettingsInventory (
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
CREATE TABLE s_Notifications (
    ID INT PRIMARY KEY,
    IDUser INT,
    messageNotification TEXT NOT NULL,
    dateTimeNotification DATETIME NOT NULL,
    INDEX IDUser_idx (IDUser)
);

-- Creación de la tabla Categorías de Productos
CREATE TABLE s_CategoriesProducts (
    ID INT PRIMARY KEY,
    nameCategory VARCHAR(255) NOT NULL
);

-- Creación de la tabla Historial de Búsquedas
CREATE TABLE s_HistorySearches (
    ID INT PRIMARY KEY,
    IDUser INT,
    searchTerm VARCHAR(255) NOT NULL,
    dateTimeSearch DATETIME NOT NULL,
    INDEX IDUser_idx (IDUser)
);



-------------------------------------------------------------------------------------------------------------------------------















-- Creación de la tabla Usuarios
CREATE TABLE s_Users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    rol ENUM('ADMINISTRADOR', 'VENDEDOR', 'ALMACEN') NOT NULL,
    otherDetails TEXT,
    currencyType VARCHAR(50),
    showDecimals BOOLEAN,
    darkMode BOOLEAN,
    email VARCHAR(255)
);

-- Creación de la tabla Proveedores
CREATE TABLE s_Providers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    providerName VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    contactPhoneNumber VARCHAR(20)
);

-- Creación de la tabla Categorías de Productos
CREATE TABLE s_CategoriesProducts (
    ID INT PRIMARY KEY,
    nameCategory VARCHAR(255) NOT NULL
);

-- Creación de la tabla Productos
CREATE TABLE s_Products (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    productName VARCHAR(255) NOT NULL,
    itemCode VARCHAR(50) NOT NULL,
    category INT,
    unitPrice DECIMAL(10, 2) NOT NULL,
    quantityStock INT NOT NULL,
    pathImage VARCHAR(255),
    locationDeposit VARCHAR(255),
    provider INT,
    description TEXT,
    warehouseStatus VARCHAR(50),
    FOREIGN KEY (category) REFERENCES s_CategoriesProducts(ID),
    FOREIGN KEY (provider) REFERENCES s_Providers(id)
);

-- Creación de la tabla Transacciones
CREATE TABLE s_Transactions (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    IDProduct INT,
    transactionType ENUM('entrada', 'salida') NOT NULL,
    quantity INT NOT NULL,
    dateTimeTransaction DATETIME NOT NULL,
    IDUser INT,
    FOREIGN KEY (IDProduct) REFERENCES s_Products(id),
    FOREIGN KEY (IDUser) REFERENCES s_Users(id)
);

-- Creación de la tabla Ajustes de Inventario
CREATE TABLE s_SettingsInventory (
    ID INT PRIMARY KEY,
    IDProduct INT,
    adjustedQuantity INT NOT NULL,
    reasonAdjustment TEXT NOT NULL,
    dateTimeSetting DATETIME NOT NULL,
    IDUser INT,
    FOREIGN KEY (IDProduct) REFERENCES s_Products(id),
    FOREIGN KEY (IDUser) REFERENCES s_Users(id)
);

-- Creación de la tabla Notificaciones
CREATE TABLE s_Notifications (
    ID INT PRIMARY KEY,
    IDUser INT,
    messageNotification TEXT NOT NULL,
    dateTimeNotification DATETIME NOT NULL,
    FOREIGN KEY (IDUser) REFERENCES s_Users(id)
);

-- Creación de la tabla Historial de Búsquedas
CREATE TABLE s_HistorySearches (
    ID INT PRIMARY KEY,
    IDUser INT,
    searchTerm VARCHAR(255) NOT NULL,
    dateTimeSearch DATETIME NOT NULL,
    FOREIGN KEY (IDUser) REFERENCES s_Users(id)
);
