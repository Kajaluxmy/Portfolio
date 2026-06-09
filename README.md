# Personal Portfolio Website - MERN Stack

A modern, clean, minimal, and fully responsive personal portfolio website designed for a software engineer. Built from scratch with the MERN stack (MongoDB, Express, React, Node.js) and plain CSS.

## Project Overview

This repository contains both the frontend client (React + Vite) and the backend API server (Express + Node.js) for the portfolio. Key highlights:
- **Clean & Minimal Design:** High-contrast neutral palette, generous whitespace, Inter typography, 1px border lines, and smooth micro-animations.
- **Dynamic Seeding:** Script to clear and seed realistic projects and skills using custom styled SVG icons.
- **Sticky Navbar:** Smooth scroll to sections (About, Skills, Projects, Contact) with active section detection on scroll and mobile drawer toggling.
- **Projects Showcase:** Async project loading with animated skeleton grids.
- **Functional Contact Form:** Front-end and server-side validation with instant inline success/error banners storing responses to MongoDB.

---

## Folder Structure

```
portfolio/
├── client/                  (React Vite app)
│   ├── public/
│   │   └── resume.pdf       (Sample resume PDF)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx   (Sticky header with mobile menu and scroll logic)
│   │   │   ├── Hero.jsx     (Welcome visual banner & call to actions)
│   │   │   ├── About.jsx    (Introductory texts & avatar)
│   │   │   ├── Skills.jsx   (Chips rendering database skills with icons)
│   │   │   ├── Projects.jsx (Project grid showcasing work & loader skeletons)
│   │   │   ├── Contact.jsx  (Contact form validation, posting & social links)
│   │   │   └── Footer.jsx   (Centered credits footer)
│   │   ├── App.jsx          (Main application wrapper and routing)
│   │   ├── main.jsx         (React mounting script)
│   │   └── index.css        (Global styling variables, resets, helper utilities)
│   ├── .env                 (Frontend configurations)
│   └── package.json
├── server/                  (Express API server)
│   ├── models/
│   │   ├── Project.js       (Mongoose Project Schema)
│   │   ├── Skill.js         (Mongoose Skill Schema)
│   │   └── Message.js       (Mongoose Message Schema)
│   ├── routes/
│   │   ├── projects.js      (GET /api/projects route handler)
│   │   ├── skills.js        (GET /api/skills route handler)
│   │   └── contact.js       (POST /api/contact form handler)
│   ├── seed.js              (Database seeder configuration)
│   ├── server.js            (Express server & Database initializer)
│   ├── .env                 (Backend secret credentials & ports)
│   └── package.json
├── package.json             (Root orchestrator using concurrently)
└── README.md
```

---

## Prerequisites

Before starting, ensure you have the following installed on your system:
- **Node.js** (v16.0.0 or higher recommended)
- **npm** (comes packaged with Node.js)
- **MongoDB Community Server** (running locally on default port `27017`)

---

## Setup Instructions

### 1. Clone or Move to Workspace
Open your terminal in the root folder of the project (`portfolio/` or the directory containing this README).

### 2. Install Dependencies
You can install dependencies for the root, backend server, and frontend client all at once:
```bash
npm run install-all
```

Alternatively, you can install them individually:
```bash
# In the root directory (for orchestrator dev tools)
npm install

# In the server directory
cd server
npm install

# In the client directory
cd ../client
npm install
```

### 3. Setup Environment Variables

#### Backend (`server/.env`)
Create/verify the `server/.env` file with the following variables:
```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/portfolio
```

#### Frontend (`client/.env`)
Create/verify the `client/.env` file with the following variables:
```env
VITE_API_URL=http://localhost:5000
```

---

## Database Seeding

To populate MongoDB with sample projects and skills (including custom SVG icons):
```bash
# From the root directory:
npm run seed

# Or directly in the server folder:
cd server
npm run seed
```
This clears existing collections and inputs 3 sample projects and 12 categorized skills.

---

## Running in Development

Ensure your local MongoDB instance is running, then start both frontend and backend concurrently from the root directory:

```bash
npm run dev
```

This starts:
- **Express Backend:** Running on [http://localhost:5000](http://localhost:5000)
- **React Frontend:** Running on [http://localhost:5173](http://localhost:5173)

Open [http://localhost:5173](http://localhost:5173) in your browser to view the portfolio.
