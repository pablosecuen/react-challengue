

### Beer E-Commerce Challenge

Welcome to the Beer E-Commerce Challenge! In this project, i aim to build a functional e-commerce. Below, we'll provide an in-depth overview of the project structure, technologies used, and key features implemented.

---

#### Project Structure

The project consists of two main parts: the backend API built with Express.js and the frontend web application developed with React.js. Let's delve into the details of each part:

##### Backend API (Express.js)

- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js, used to build the backend API.
- **@babel/core, @babel/node, @babel/preset-env**: Babel dependencies for transpiling modern JavaScript code to ensure compatibility across different Node.js versions.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing (CORS) in the Express.js application, allowing it to accept requests from different origins.
- **dotenv**: Library for loading environment variables from a `.env` file into `process.env`.
- **mercadopago**: SDK for integrating MercadoPago's payment gateway into the application.
- **morgan**: HTTP request logger middleware for Express.js, used for logging HTTP requests to the console.
- **nodemon**: Development dependency for automatically restarting the server when changes are detected during development.

##### Frontend Web Application (React.js)

- **React.js**: A JavaScript library for building user interfaces, used to create the frontend of the beer e-commerce platform.
- **@clerk/clerk-react**: Library for integrating user authentication and identity management features powered by Clerk into the React application.
- **@heroicons/react**: Collection of free, MIT-licensed high-quality SVG icons for React, utilized for UI elements and iconography.
- **@mercadopago/sdk-react**: MercadoPago SDK for React, enabling seamless integration of MercadoPago's payment functionality into the web application.
- **axios**: Promise-based HTTP client for making requests to the backend API and fetching data asynchronously.
- **html2canvas**: Library for capturing screenshots of web pages, used for generating receipts and snapshots of the payment process.
- **react-router-dom**: Library for declaratively routing and navigating between different views in the React application.
- **sonner**: Utility library for generating and managing unique identifiers (UUIDs) in the frontend application.

##### Development Dependencies

- **@vitejs/plugin-react-swc**: Vite plugin for transforming React code using SWC (SWift Compiler), providing faster builds and improved performance.
- **eslint, eslint-plugin-react, eslint-plugin-react-hooks, eslint-plugin-react-refresh**: ESLint and related plugins for enforcing code quality and best practices in the React codebase.
- **vite**: Next-generation frontend build tool, used for lightning-fast development and optimized production builds.

---

#### Key Features

1. **Dynamic Product Detail Page (PDP)**: Implemented an API endpoint to fetch stock and price information for a specific product identified by its SKU code. The PDP updates stock and price information every 5 seconds, ensuring real-time data accuracy.
  
2. **URL-based Routing**: Access the PDP through a URL in the format of `/productId-productBrand`, providing a user-friendly and SEO-friendly URL structure.

3. **Payment Gateway Integration**: Integrated MercadoPago's payment gateway into the application, allowing users to make secure online payments for their purchases.


---

#### Getting Started

To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install dependencies using `npm install` in both the backend and frontend directories.
3. Download the `.env` in this repository. (thought it was better to include them stead of ignoring the in the git ignore file for supervition purposes)
4. Start the backend server using `npm start` or `npm run dev`.
5. Start the frontend development server using `npm run dev` or `npm start`.
6. Access the application in your browser at the specified URL.

---

#### Test Credentials

For testing purposes, you can use the following credentials:

- **MercadoPago Sandbox Accounts**: Use the provided test credentials to simulate payment transactions without real money.

Reseller test account for payment gateway
TESTUSER1681282947
PARGRJO9w9

Buyer test account for payment gateway
TESTUSER268591529
FCMsbnQ4Go

---

#### Conclusion

The Beer E-Commerce Challenge showcases a fully functional beer e-commerce platform with real-time stock and price updates, secure payment processing, and a responsive user interface. We hope you enjoy exploring the application and find it a valuable learning experience.

Feel free to reach out with any questions, feedback, or suggestions. Happy coding!

---

Deployment of the api was performed in Railway
Deployment of the front-end was performed in vercel

Happy coding and thanks for stepping by

Pablo Amico
Fullstack Developer
