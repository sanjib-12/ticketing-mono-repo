<div align="center">

# 🎫 Ticketing Common


### *A shared library for ticketing services, providing common models, interfaces, and utilities.*

</div>

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [System Requirements](#-system-requirements)
- [Getting Started](#-getting-started)
- [Usage](#-usage)

## 📖 Overview

`ticketing-common` is a Node.js library designed to be shared across various microservices within a ticketing system. It provides a centralized location for common models (e.g., Ticket, Order, User), interfaces, error handling, and utility functions. This promotes code reusability, consistency, and reduces redundancy across different services.  This library is a crucial part of a larger microservices architecture.


- 🧩 **Reusable Core Components**: Common functionality for microservices architectures
- 🚦 **Standardized Error Handling**: Unified error classes and middleware
- 📡 **Event-Driven Architecture**: Base classes for NATS event streaming
- 🔐 **Auth Utilities**: JWT validation and role-based access control

## ✨ Key Features

- **Core Utilities**
  - Custom Error classes (BadRequestError, NotAuthorizedError, etc.)
  - Middleware for error handling and request validation

- **Type Definitions**
  - Ticket status enums (Created, Reserved, Cancelled)
  - Order types and interfaces
  - User role definitions

- **Infrastructure**
  - Database connection utilities
  - Environment configuration loader
  - Health check endpoints

## 💻 System Requirements

- **Operating System**:  Cross-platform (Windows, macOS, Linux)
- **Runtime Environment**: Node.js 16 or higher (LTS recommended)
- **Package Manager**: npm or yarn

## 🚀 Getting Started
### Installation

```bash
# Install the package
npm install @sanjib-12/ticketing-common  # or yarn add @sanjib-12/ticketing-common

```

## 📘 Usage
This library is intended to be used within a Node.js microservices environment.  Import the necessary modules and classes into your services and use them as needed.  Refer to the documentation for detailed information on available models, interfaces, and functions.

```typescript
// Example of using a custom error
import { DatabaseConnectionError } from '@sanjib-12/ticketing-common';

try {
  // Attempt a database connection
  // ...
} catch (error) {
  throw new DatabaseConnectionError('Failed to connect to the database');
}
```
<div align="center">

**Ticketing Common** is maintained by [Sanjib](https://github.com/sanjib-12).  
Found this project useful? Please consider giving it a ⭐️!

</div>
