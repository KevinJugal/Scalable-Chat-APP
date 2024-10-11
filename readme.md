# Scalable Chat App

A real-time chat application built with **Next.js**, **Socket.IO**, and **Redis** for scalable messaging services.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Socket Service](#socket-service)
- [Usage](#usage)
- [License](#license)

## Features

- Real-time messaging using WebSockets.
- Redis Pub/Sub support.
- Frontend powered by React & Next.js.

## Prerequisites

- Node.js (v16+)
- Redis
- Git

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/Scalable-Chat-APP.git
   cd Scalable-Chat-APP

## socket-service
Backend (Node.js with Socket.IO)
The Socket service establishes a server with a Redis-backed pub/sub system. It subscribes to the MESSAGES Redis channel and listens for incoming WebSocket messages:
```bash
socket.on('event:message', async ({ message }: { message: String }) => {
  await pub.publish('MESSAGES', JSON.stringify({ message }));
});
