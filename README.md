# Botiga Backend

This is the backend for the **Botiga** project, built using **Node.js**, **Express**, and **MongoDB** . It provides APIs for managing the e-commerce functionalities.

## Features
- User authentication (Signup, Login, ResetPassword,ForgotPassword,OtpVerification)
- Product management (Create, Read, Update, Delete)
  
## Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v22.13.1 recommended)
- [MongoDB](https://www.mongodb.com/) 
- [Git](https://git-scm.com/) (optional)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/mireilleIrafasha25/Botiga_Backend.git

2. Navigate into the project directory
   ```sh
   cd Botiga_Backend

3. Install Dependencies:
   ```sh
   npm install
4. Set Up Environment Variables: Create a .env file in the root directory and add:
   ```sh
   EMAIL_SERVICE=your email service name
   EMAIL_USER=your email
   EMAIL_PASSWORD=your email password
   JWT_SECRET_KEY=secret key
   db=your database url
   PORT=5000
   CLOUD_NAME= your cloud name
   CLOUD_KEY=your cloud key
   CLOUD_SECRET=your cloud secret
5. Running Server
   ```sh
   npm run dev

## API Endpoints  

Here are some key API routes for User Management:  

| Method | Endpoint                     | Description            |
|--------|------------------------------|------------------------|
| POST   | `/Botiga/user/signup`        | Register a new user    |
| POST   | `/Botiga/user/signin`        | Login a user           |
| GET    | `/Botiga/user/listAll`       | Get all users          |
| POST   | `/Botiga/user/resetpassword` | Reset Password         |
| POST   | `/Botiga/user/forgotpassword`| Forgot Password        |
| DELETE | `/Botiga/user/delete/:id`    | Delete User            |
| POST   |  `/Botiga/user/`             | Verify OTP

Here are some key API routes for Product

| Method | Endpoint                                        | Description            |
|--------|-------------------------------------------------|------------------------|
| POST   | `/Botiga/product/addProduct`                    | Add new product        |
| GET    | `/Botiga/product/getProducts`                   | List All product       |
| PUT    |`/Botiga/product/updateProduct/:productId`       |Update Product by Id    |
| GET    | `/Botiga/product/getProductById/:productId`     | Get Produt by productId|
| GET    | `/Botiga/product/getProductByCategory/:category`| Get product by Category|
| DELETE | `/Botiga/product/deleteProduct/:id`             | Delete Product         |

## Technologies Used

Node.js + Express.js (Backend Framework)

MongoDB + Mongoose (Database)

JWT for Authentication

dotenv for environment variables

Nodemon for development

   
