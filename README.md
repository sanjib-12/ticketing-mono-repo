<div align="center">

# 🎫 Ticketing Application

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)


### *A microservices application for managing and selling tickets.*


[Report Bug](https://github.com/sanjib-12/ticketing/issues) 
</div>

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Contributing](#-contributing)
- [License](#-license)

## 📖 Overview

The Ticketing Application is a microservices-based platform designed to facilitate the management and sale of tickets for various events. It leverages modern technologies to provide a scalable, resilient, and efficient solution for event organizers and customers alike.

### Why Ticketing Application?

- 🚀 **Scalable Architecture**: Built using microservices, the application can handle a large number of requests and users, ensuring a smooth experience even during peak times.
- 🎫 **Efficient Ticket Management**: Provides tools for creating, managing, and selling tickets, with real-time updates and inventory tracking.
- 🤝 **Modular Design**: Each microservice is designed to be independent and reusable, making it easy to add new features and integrate with other systems.

## ✨ Key Features

- **Authentication & Authorization**
  - User registration and login
  - Secure password management
  - Role-based access control

- **Ticket Management**
  - Create and manage events
  - Define ticket types and prices
  - Real-time inventory tracking

- **Order Management**
  - Users can browse and purchase tickets
  - Order history and details

- **Event Streaming (NATS)**
  - Real-time updates via NATS for ticket and order events
  - Decoupled communication between microservices

## 🏗 Architecture

The application follows a microservices architecture, with each service responsible for a specific domain. 

```graph LR
Client --> API Gateway
API Gateway --> Auth Service
API Gateway --> Tickets Service
API Gateway --> Orders Service
Tickets Service --> NATS
Orders Service --> NATS
Auth Service --> Database
Tickets Service --> Database
Orders Service --> Database
```
## 🚀 Getting Started

To get started with the Ticketing Application, follow these steps:

### Prerequisites

- Kubernetes
- Skaffold
- Docker
- Kubectl
- Nats

### Installation

1.  **Clone the repository:**

    ```
    git clone https://github.com/sanjib-12/ticketing.git

    cd ticketing

    git submodule update --init --recursive
    ```

2.  **Install dependencies of each folders:**
    ```
    npm install
    ```
3.  **Start the application using Skaffold:**

    ```
    skaffold dev
    ```

    This command will build and deploy all the microservices to your Kubernetes cluster.

## 📘 Usage

Once the application is up and running, you can access it through the API Gateway. 

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Implement your changes and write tests.
4.  Submit a pull request with a clear description of your changes.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

<div align="center">

If you find this project helpful, please consider giving it a ⭐️!

</div>
