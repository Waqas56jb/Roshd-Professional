# Roshd Professional Platform

> Modern consulting & training platform with Customer Satisfaction Intelligence Engine.

## Project Structure

```
Roshd-Professional/
├── server/         Node.js + Express + Supabase API
├── client/         React.js customer-facing website
└── admin/          React.js admin panel
```

---

## Quick Start

### 1. Server
```bash
cd server
# Copy .env.example → .env and fill credentials (already done)
npm run dev
# API runs on http://localhost:5000
```

### 2. Client (Customer Website)
```bash
cd client
npm run dev
# Opens at http://localhost:5173
```

### 3. Admin Panel
```bash
cd admin
npm run dev
# Opens at http://localhost:5174
```

---

## Database Setup (Supabase)

Run `server/schema.sql` in your Supabase SQL Editor to create all required tables.

---

## Tech Stack

| Layer    | Technology                          |
|----------|-------------------------------------|
| Backend  | Node.js · Express · JWT · bcryptjs  |
| Database | Supabase (PostgreSQL)               |
| Client   | React 18 · Vite · Tailwind CSS · Framer Motion |
| Admin    | React 18 · Vite · Tailwind CSS · Recharts |
| Icons    | Lucide React                        |

---

## Features

### Client (localhost:5173)
- **Homepage** – Animated hero, services, stats counters, programs, features, CTA
- **Login / Signup** – JWT authentication
- **Dashboard** – Full Customer Satisfaction Intelligence Engine
  - 8 tabs: Executive, Drivers, Effect Size, Segments, Simulation, Customers, Recommendations, Model Quality
  - Global filters: Branch / Gender / Service
  - Interactive simulation sliders
  - Bubble map, bar charts, driver tables

### Admin (localhost:5174)
- **Login** – Admin-only access (role: admin)
- **Overview** – KPIs, branch charts, driver impact, risk distribution pie
- **Users** – Full CRUD with role management
- **Customers** – Add / filter / delete satisfaction records

### Server (localhost:5000)
- `POST /api/auth/register` · `POST /api/auth/login` · `GET /api/auth/me`
- `GET /api/dashboard/data` · `/branches` · `/segments`
- `GET /api/customers`
- `GET /api/admin/users` · `PUT /api/admin/users/:id/role` · `DELETE /api/admin/users/:id`
- `GET /api/admin/stats` · `POST /api/admin/customers` · `DELETE /api/admin/customers/:id`
