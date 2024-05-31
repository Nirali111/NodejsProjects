ProductHub
ProductHub is a Node.js API for managing users and products. It supports user registration, login, and CRUD operations on products.Each product can include an image, and the API ensures unique usernames during registration. The API uses JWT for authentication and PostgreSQL for data persistence.

Features

 -User registration and login with JWT authentication
 
 -Create, read, update, and delete products
 
-Image upload for products with validation

-Input validation and error handling

Technologies Used

-Node.js

-Express.js

-PostgreSQL

-Sequelize ORM

-Multer for file uploads

-JWT for authentication

-Joi for input validation

-nodemon

Prerequisites
Before you begin, ensure you have the following installed on your machine:
-Node.js
-npm
-PostgreSQL

Run Appliction using following command:
npm install
npm start

Environment Variables
Create a .env file in the root directory and add the following environment variables:

JWT_SECRET=secretkey (Your secret key)
PORT=3000
DB_NAME = product_hub (DB_name)
DB_USERNAME = Your_DB_username
DB_PASSWORD = Your_DB_password
DB_HOST = localhost

Run Appliction using following command:
npm run dev

API Endpoints
--> User Endpoints

   -Register: POST /users/register
    -Request:
    {
    "username": "exampleuser",
    "password": "examplepassword"
    }

    -Response:
   {
    "id": 13,
    "username": "exampleuser",
    "password": "$2a$10$WNOcRcts39xGLexssa3UBeApS3VyVqlMQECREkKCNhCkNBtmagRdC", // hashed password
    "updatedAt": "2024-05-31T04:16:18.555Z",
    "createdAt": "2024-05-31T04:16:18.555Z"
}

   -Login: POST /users/login
    -Request:
    {
    "username": "exampleuser",
    "password": "examplepassword"
    }

    -Response:
   {
    "user": {
        "id": 11,
        "username": "user",
        "password": "$2a$10$fWlyDznSiOwzEmUG.0mUAuv3iz4b2bEq3WMkpXXjLdMyQ0hWGoace",
        "createdAt": "2024-05-31T03:32:24.714Z",
        "updatedAt": "2024-05-31T03:32:24.714Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTcxNzEyODY1N30.WvUpd7A91PGPejvDiCJR-B7IER0neHBTQ_cr_fO98UM"
   }

--> Product Endpoints
  Authorization: Bearer <JWT token>

  -Create Product: POST /products (requires authentication)
    -Request (form-data):
    name: "Sample Product"
    description: "This is a sample product."
    price: 10.00
    image: (Select a file)

    -Response:
    {
    "id": 1,
    "name": "Sample Product",
    "description": "This is a sample product.",
    "price": 10.00,
    "imageUrl": "/uploads/image-1626789123456.jpg",
    "createdAt": "2023-05-30T12:34:56.789Z",
    "updatedAt": "2023-05-30T12:34:56.789Z"
    }

    Get Product List: GET /products (requires authentication)
    -Response:
    [
    {
        "id": 1,
        "name": "Sample Product",
        "description": "This is a sample product.",
        "price": 10.00,
        "userId": 11,
        "image": "/uploads/image-1626789123456.jpg",
        "createdAt": "2023-05-30T12:34:56.789Z",
        "updatedAt": "2023-05-30T12:34:56.789Z"
    }
    ]

    -Update Product: PUT /products/:id (requires authentication)
    -Request:
    {
    "name": "Updated Product Name",
    "description": "Updated description.",
    "price": 15.00
    }
    -Response:
    {
        "message": "Product updated successfully"
    }

    -Delete Product: DELETE /products/:id (requires authentication)
    -Response:
    {
        "message": "Product deleted successfully"
    }
