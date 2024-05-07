---

# Almaquin Admin Panel

Almaquin Admin Panel is built using AdminJS, to support the "Almaquin" app.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB (atlas usage is also acceptable)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Oluwademiladeogo/almaquin-admin
   ```

2. Install dependencies:

   ```bash
   cd almaquin-admin
   npm install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following variables:

   ```plaintext
   DATABASE_URL=<your-mongodb-connection-string>
   COOKIE_SECRET=<your-cookie-secret>
   PORT=<port-number>
   ```

4. Start the application:

   ```bash
   npm run dev
   ```

## Usage

- Access the Admin Panel by navigating to `http://localhost:<port>/admin`.
- Log in using your admin credentials.
- Explore and manage resources using the intuitive interface.

## Customization

### Resource Configuration

Resource configurations are located in the `app.js` file. You can customize resource properties, actions, and appearance here.

### Authentication

Authentication logic is implemented in the `auth-provider.js` file. You can modify authentication strategies, such as JWT token verification, here.

### Error Handling

Error handling middleware is located in the `middleware` folder. Customize error responses and logging according to your needs.

---
