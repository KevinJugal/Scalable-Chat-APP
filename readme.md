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
```
Frontend (Next.js with React)
The frontend client is set up to listen to WebSocket messages using the socket.io-client library.
```bash
const { sendMessage, messages } = useSocket();
```
Context API
The app uses a SocketProvider to provide WebSocket functionality throughout the component tree.

## Usage
Once installed and running, open your browser and go to http://localhost:8000.
Enter messages, and watch them appear in real-time for all connected users.

## License
This project is licensed under the MIT License.
```bash
git clone https://github.com/KevinJugal/Scalable-Chat-APP.git
```
