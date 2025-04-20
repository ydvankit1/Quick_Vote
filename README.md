# 🗳️ Voting App

A full-stack secure voting application that allows users to participate in elections with roles such as **Voter** and **Admin**. The system ensures role-based access and enables both frontend and backend functionality.

---

## 🔍 1. Overview

This is a full-stack voting system built with a **Node.js/Express backend** and a **React frontend** along with **MongoDB Database**. Users can register either as a voter or admin and perform actions according to their roles:

- **Voters** can view candidates, cast votes.
- **Admins** can manage the election process by adding, editing, or removing electors and viewing statistics.

---

## ✨ 2. Features

### ✅ User Authentication
- Users can register and log in securely.
- JWT-based authentication.
- Role selection during signup (Voter/Admin).

### 👤 Profile Management
- Users can view and update profile information.
- Secure password change functionality.

### 🗳️ Voting (Voter Role)
- View all available electors.
- Cast a vote for a selected elector.

### 🧑‍💼 Electoral Management (Admin Role)
- Add, update, or delete electors.
- View all voting activity and statistics.

---

## 🛠️ 3. Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Frontend
- React.js
- React Router
- Axios
- Styled with modern responsive UI

---

## 🌐 4. API Endpoints

### 🔐 Authentication
- `POST /signup` – Register as a voter or admin.
- `POST /login` – Login using email and password.

### 👤 Profile
- `GET /profile` – Get user details.
- `PUT /profile/password` – Update password.

### 🗳️ Voting (Voter)
- `GET /electors` – View list of electors.
- `POST /vote/:electorID` – Cast a vote.

### 🧑‍💼 Electoral Management (Admin)
- `POST /electors` – Add a new elector.
- `PUT /electors/:electorID` – Update elector details.
- `DELETE /electors/:electorID` – Delete an elector.

---

## 🧭 5. Application Flow

The application consists of two user flows:

- **Voter Flow**: Sign up/login → View electors → Cast vote .
- **Admin Flow**: Sign up/login → Manage electors → View voting statistics.

> 📌 A flow diagram is included in the repository illustrating these flows.


