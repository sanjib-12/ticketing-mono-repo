# nats-test

**nats-test** is a simple Node.js application demonstrating event-driven communication using [NATS Streaming](https://docs.nats.io/nats-streaming-concepts). It includes a publisher and multiple listeners to simulate microservices communication.

## Features
- **Event Publishing**: Sends a `ticket:created` event with sample data.
- **Event Listening**: Subscribes to the `ticket:created` event and processes it.
- **Graceful Shutdown**: Closes NATS connections properly when terminated.

## Prerequisites
Ensure you have the following installed before running the project:
- **Node.js** (>=14.x recommended)
- **NATS Streaming Server** (`stan`)
- **TypeScript** (if modifying the code)

