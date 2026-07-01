# 📈 Trading Platform

<p align="center">

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-black?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7?style=for-the-badge&logo=render)

</p>

A **full-stack MERN Trading Platform** inspired by Zerodha, built for learning and portfolio purposes. The application enables users to securely manage their investments through authentication, portfolio tracking, holdings, positions, and buy/sell order execution.

---

# 🚀 Live Demo

| Application | Link |
|------------|------|
| 🌐 Frontend | https://trading-platform-uoc8.vercel.app |
| 📊 Dashboard | https://trading-platform-wmhw.vercel.app |
| ⚙️ Backend API | https://trading-platform-n6j2.onrender.com |

---

# ✨ Features

- 🔐 Secure User Authentication (Signup & Login)
- 🛡 JWT-based Authentication & Authorization
- 📊 Interactive Trading Dashboard
- 📈 Portfolio Overview
- 💼 Holdings Management
- 📉 Positions Tracking
- 🛒 Buy Stocks
- 💰 Sell Stocks
- 🔒 Protected Dashboard Routes
- 📡 REST API Integration
- ☁️ Cloud Deployment using Vercel & Render
- 📱 Responsive User Interface

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router DOM
- Bootstrap 5
- Axios
- Chart.js

## Backend

- Node.js
- Express.js
- JWT Authentication
- bcrypt.js

## Database

- MongoDB Atlas
- Mongoose

## Deployment

- Vercel
- Render

---

# 📸 Application Preview

## 🏠 Home Page

![Home](screenshots/home.png)

---

## 📝 Signup

![Signup](screenshots/signup.png)

---

## 🔐 Login

![Login](screenshots/login.png)

---

## 📊 Dashboard

![Dashboard](screenshots/dashboard.png)

---

## 💼 Holdings

![Holdings](screenshots/holdings.png)

---

## 🛒 Buy Order

![Buy Order](screenshots/buy-order.png)

---

# 📂 Project Structure

```text
Trading-Platform
│
├── backend
│   ├── middleware
│   ├── model
│   ├── schemas
│   ├── index.js
│   └── package.json
│
├── dashboard
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── screenshots
│   ├── home.png
│   ├── signup.png
│   ├── login.png
│   ├── dashboard.png
│   ├── holdings.png
│   └── buy-order.png
│
└── README.md
```

---

# ⚙️ Getting Started

## Clone the repository

```bash
git clone https://github.com/honeyAswani/trading-platform.git
```

```bash
cd trading-platform
```

---

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Dashboard

```bash
cd dashboard
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
MONGO_URL=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=3002
```

---

# ▶️ Run Locally

### Backend

```bash
npm start
```

### Frontend

```bash
npm run dev
```

### Dashboard

```bash
npm run dev
```

---

# 🚀 Future Improvements

- 📈 Live Stock Market API Integration
- ⭐ Watchlist Feature
- 📜 Order History
- 📊 Portfolio Analytics
- 📧 Email Verification
- 🔄 Password Reset
- 🌙 Dark Mode

---

# 👩‍💻 Author

**Honey Aswani**

- GitHub: https://github.com/honeyAswani

---

# 🙏 Acknowledgements

This project was inspired by the user experience and workflow of Zerodha. It was developed independently for educational and portfolio purposes using the MERN stack.

---

## ⭐ Show Your Support

If you found this project helpful or interesting, consider giving it a **⭐ Star** on GitHub.
