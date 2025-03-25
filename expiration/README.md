<div align="center">

# Expiration Service

### *Enterprise-grade microservice for handling order expirations of Tickets platform*

[Report Bug](https://github.com/sanjib-12/ticketing-expiration/issues) 

</div>

---

## 📋 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
- [Getting Started](#-getting-started)
- [Usage](#-usage)
- [Architecture](#-architecture)


## 📖 Overview

The Ticket Expiration Service is a critical microservice within the Ticketing platform that manages the lifecycle of ticket reservations. It ensures that tickets are only held for a limited time, automatically releasing them back into inventory if a purchase is not completed within the allotted timeframe.

### Why Ticket Expiration Service?

- 🎯 **Optimized Inventory Management**: Prevents tickets from being locked indefinitely, ensuring maximum availability for customers
- ⚡ **Event-Driven Architecture**: Seamlessly integrates with other microservices through NATS Streaming for reliable event processing
- 🛡️ **Fault Tolerance**: Built with Redis-backed job queues to ensure expiration jobs are processed reliably even during service restarts

## ✨ Key Features

- **Timer Management**
  - Precise reservation expiration timing
  - Configurable expiration durations
  - Automatic cleanup of expired reservations

- **Event Processing**
  - Order creation event consumption
  - Expiration completion event publishing
  - Queue group support for load balancing

- **Reliability**
  - Redis-backed job persistence
  - Graceful service shutdown
  - Comprehensive error handling



## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/sbmytickets/expiration.git

# Navigate to project directory
cd expiration

# Install dependencies
npm install

# Start the service
npm start
```

### Environment Variables

```
NATS_CLIENT_ID=expiration-service
NATS_URI=http://nats-srv:4222
NATS_CLUSTER_ID=ticketing
REDIS_HOST=expiration-redis-srv
```

## 📘 Usage

The Expiration Service is designed to work as part of a microservices ecosystem. It listens for order created events and publishes expiration complete events when orders expire.

### Event Listeners

The service listens for `OrderCreated` events with the following structure:

```typescript
interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
    id: string;
    status: OrderStatus;
    userId: string;
    expiresAt: string;
    ticket: {
      id: string;
      price: number;
    };
  };
}
```

### Event Publishers

When an order expires, the service publishes an `ExpirationComplete` event:

```typescript
interface ExpirationCompleteEvent {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
```

## 🏗 Architecture

The Expiration Service utilizes a job queue architecture with the following components:

- **NATS Streaming**: For event-based communication with other microservices
- **Bull**: Redis-backed job queue for reliable expiration job processing
- **Node.js**: Runtime environment for the TypeScript application

The service follows these steps:
1. Listens for OrderCreated events from NATS
2. Calculates the delay until expiration
3. Adds a job to the Bull queue with the calculated delay
4. When the delay expires, processes the job and publishes an ExpirationComplete event

---

<div align="center">

**Ticket Expiration Service** is maintained by [sanjib](https://github.com/sanjib-12).  
If you find it helpful, please consider giving it a ⭐️!

</div>