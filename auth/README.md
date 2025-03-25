<div align="center">

# 🚀 Ticketing Auth Service

### *A microservice for user authentication and authorization in a ticketing system.*


[Report Bug](https://github.com/sanjib-12/ticketing-auth/issues) 

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [API Reference](#-api-reference)


## 📖 Overview

Ticketing Auth Service is a crucial microservice responsible for managing user authentication and authorization within a larger ticketing system. Built using Node.js, Express, and MongoDB, this service ensures secure access to ticketing resources and provides a foundation for user identity management.

### Why Ticketing Auth Service?

- 🎯 **Security**: Implements robust authentication and authorization mechanisms to protect user data and system integrity.
- ⚡ **Scalability**: Designed as a microservice, it can be scaled independently to handle increasing user loads.
- 🛡️ **Maintainability**: Clear code structure and comprehensive documentation facilitate easy maintenance and future development.

## ✨ Key Features

- **User Authentication:**
    - User registration with email and password
    - User login and logout
    - Password reset functionality
- **Authorization:**
    - Role-based access control (RBAC)
    - JWT (JSON Web Token) based authentication
- **API Endpoints:**
    - Well-defined API endpoints for user management and authentication.


## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone [https://github.com/sanjib-12/ticketing-auth.git](https://www.google.com/search?q=https://github.com/sanjib-12/ticketing-auth.git)

# Navigate to project directory
cd ticketing-auth

# Install dependencies
npm install

# Configure environment
cp .env.example .env  # Modify the .env file with your MongoDB URI and JWT Secret

# Start the application
npm start
````

## 📚 API Reference
| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/users/signup` | POST | Register a new user |
| `/api/users/signin` | POST | User login |
| `/api/users/current` | GET | Get current user information (requires authentication) |

<div align="center">

If you find this project helpful, please consider giving it a ⭐️!

</div>