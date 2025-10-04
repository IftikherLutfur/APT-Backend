# 📌 Portfolio Backend

A backend project for managing portfolio content such as **projects, blogs, and users**. This project is built with **Node.js, Express, MongoDB, and JWT authentication**.

---

## 🚀 Features

* 🔐 **User Authentication & Authorization** with JWT
* 👨‍💻 **Role-based login** (e.g., Admin, User)
* 📂 **Project Showcase Management**

  * Create (POST)
  * Read (GET / Find)
  * Update (PUT/PATCH)
  * Delete (DELETE)
* ✍️ **Blog Management** (similar CRUD operations)
* 👤 **User Management** (secure login & registration)

---

## 🛠️ Tech Stack

* **Backend Framework:** Express.js
* **Database:** MongoDB + Mongoose
* **Authentication:** JWT (JSON Web Token)
* **Language:** TypeScript / JavaScript
* **Environment:** Node.js

---

## 📦 Installation

```bash
# Clone this repository
git clone https://github.com/IftikherLutfur/APT-Backend.git

# Go into the project folder
cd APT-Backend

# Install dependencies
npm install

# Setup environment variables
touch .env
```

### `.env` file example

```env
PORT=3000/5000
DB_USER=******
DB_PASS=*******
DB_CONNECT=***************
BCRYPT_SALT_ROUND= Number like 10,20
ACCESS_TOKEN=*******************
TOKEN_EXPIRE=***
```

---

## ▶️ Run the Project

```bash
# Development mode
npm run dev

# Production build
npm run build
npm start
```

---

## 📡 API Endpoints

### 🔑 User create 

* `GET /user` → Get all user
* `POST /user` → Registration
### 🔑 Auth

* `POST /auth/login` → Login user & get JWT
* `POST /auth/logout` → Logout user and token remove

### 📂 Projects

* `POST /project` → Create new project
* `GET /project` → Get all projects
* `GET /project/:id` → Get single project
* `PATCH /project/:id` → Update project
* `DELETE /project/:id` → Delete project

### ✍️ Blogs

* `POST /blog` → Create new blog
* `GET /blog` → Get all blogs
* `GET /blog/:id` → Get single blog
* `PATCH /blog/:id` → Update blog
* `DELETE /blog/:id` → Delete blog

---

## 👤 Users & Roles

* Normal User → can view projects & blogs
* Admin → can manage projects, blogs, and users

---

## ✅ Status

This backend is fully functional with CRUD operations, authentication, and role-based authorization.

---

## 📜 License

This project is **not licensed**. All rights reserved.  
No one has permission to use, copy, modify, or distribute this code without the author's consent.

---

## 🧑‍💻 Developer

<a herf="https://my-portfolio-1a1bc.web.app/">**Iftikher Lutfur Abdullah**</a>
Junior Full Stack Developer 

---
