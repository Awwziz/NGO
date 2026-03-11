# 🌍 NGO Platform

A web-based platform designed to help **Non-Governmental Organizations (NGOs)** manage donations, volunteers, and campaigns efficiently.  
This project aims to connect **donors, volunteers, and NGOs** to make charitable activities easier and more transparent.

---

## ✨ Features

- 🤝 **Donation System** – Users can donate money or items to NGOs.
- 🏢 **NGO Profiles** – NGOs can showcase their mission and ongoing campaigns.
- 👥 **Volunteer Management** – Users can sign up to volunteer for events.
- 📅 **Event & Campaign Creation** – NGOs can organize fundraising campaigns.
- 🔍 **Search & Discover** – Easily find NGOs and causes to support.
- 📱 **Responsive UI** – Works across desktop and mobile devices.

---

## 🛠️ Tech Stack

**Frontend**
- HTML
- CSS
- JavaScript

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB

**Tools**
- Git
- GitHub
- REST API

---

## 📂 Project Structure

```
NGO/
│
├── client/          # Frontend code
├── server/          # Backend server
├── models/          # Database models
├── routes/          # API routes
├── controllers/     # Application logic
├── public/          # Static files
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Awwziz/NGO.git
cd NGO
```

### 2. Install dependencies

Backend:

```bash
cd server
npm install
```

Frontend:

```bash
cd client
npm install
```

### 3. Setup environment variables

Create a `.env` file inside the **server** folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the project

Start backend:

```bash
cd server
npm start
```

Start frontend:

```bash
cd client
npm start
```

---

## 📊 Example Data Models

### User
```
name
email
password
role
```

### Donation
```
donorName
donationType
amount
date
```

### Event
```
eventName
description
date
location
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit and push
5. Submit a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ❤️ Support

If you like this project:

⭐ Star the repository  
🍴 Fork it  
📢 Share it with others

---