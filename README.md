# 🌿 Agroecology Content API

A backend RESTful API built with **Node.js**, **Express**, and **MongoDB** to power the Agroecology Market Pull Platform.  
It manages content for products, blogs, FAQs, outlets, users, and dashboards, supporting both English and French.

---

## 📄 Table of Contents

- [Tech Stack](#️-tech-stack)
- [Installation](#️-installation)
- [Project Structure](#project-structure)
- [Authentication](#-authentication)
- [API Routes](#-api-routes)
- [Internationalization](#-internationalization-i18n)
- [Testing](#-testing)
- [Sample Data](#sample-data)
- [Scripts](#️-scripts)
- [Author](#-author--maintainer)

---

## 🛠️ Tech Stack

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **MongoDB** + **Mongoose** (Database & ODM)
- **JWT** for authentication
- **Jest** + **Supertest** for testing
- **Postman** for API sample data testing

---

## ⚖️ Installation

```bash
# Clone the repo
git clone https://github.com/your-repo-url.git
cd GIDEON_KIPKORIR

# Install dependencies
npm install

# Run server (development)
npm run dev
```

---

## 📁 Project Structure

```
├── config/          # Configuration files (e.g., DB connection)
├── controllers/     # Route logic controllers
├── services/        # Business logic layer
├── models/          # Mongoose schemas
├── routes/          # API route definitions
├── middlewares/     # Auth and error middlewares
├── tests/           # Jest test files
├── .env             # Environment variables
├── server.js        # Main server entry point
└── README.md        # Project documentation
```

---

## 🔐 Authentication

JWT-based authentication for secure access.

**Login:**

- **POST** `/api/auth/login`

**Body:**
```json
{
  "email": "pass@example.com",
  "password": "updatedpassword"
}
```

**Usage:**  
Set token in header:  
`Authorization: Bearer <token>`

---

## 🚪 API Routes

### ✅ Users

| Method | Endpoint           | Description      | Auth |
|--------|--------------------|------------------|------|
| POST   | /api/users         | Register user    | ❌   |
| GET    | /api/users         | List users       | ✅   |
| GET    | /api/users/:id     | Single user      | ✅   |
| PUT    | /api/users/:id     | Update user      | ✅   |
| DELETE | /api/users/:id     | Delete user      | ✅   |

### 📈 Products

| Method | Endpoint           | Description                  | Auth |
|--------|--------------------|------------------------------|------|
| GET    | /api/products      | List products (search + pagination) | ✅   |
| POST   | /api/products      | Create a product             | ✅   |

### 📖 Blogs

| Method | Endpoint           | Description                  | Auth |
|--------|--------------------|------------------------------|------|
| GET    | /api/blogs         | List blogs (search + pagination) |   ✅ |
| POST   | /api/blogs         | Create blog                  | ✅   |

### ❓ FAQs

| Method | Endpoint           | Description      | Auth |
|--------|--------------------|------------------|------|
| GET    | /api/faqs          | Get FAQs         | ✅   |
| POST   | /api/faqs          | Add FAQ          | ✅   |

### 🏢 Outlets

| Method | Endpoint           | Description                  | Auth |
|--------|--------------------|------------------------------|------|
| GET    | /api/outlets       | Get outlets (filter + paginate) | ✅   |
| POST   | /api/outlets       | Create outlet                | ✅   |

### 📊 Dashboard

| Method | Endpoint           | Description      | Auth |
|--------|--------------------|------------------|------|
| GET    | /api/dashboard     | Dashboard metrics| ❌   |

---

## 🌍 Internationalization (i18n)

Products and FAQs support English (`en`) and French (`fr`).  
Fields are returned in both languages.

**Example:**
```json
{
  "name": { "en": "Fertilizer", "fr": "Engrais" },
  "description": { "en": "Helps plants grow.", "fr": "Aide les plantes à pousser." }
}
```

---

## 🔮 Testing

Tests are written using **Jest** and **Supertest**.

**Run tests:**
```bash
npm test
npm run test:watch   # Watch mode
```

**Covered:**
- Product listing and pagination
- Blog listing (authenticated and unauthenticated)
- Failed token access

---

## 👤 Sample User

```json
{
  "email": "pass@example.com",
  "password": "updatedpassword"
}
```

---

## 📊 Sample Data Created

- 15 Products (en/fr)
- 15 FAQs
- 10 Blog posts
- 10 Outlets (with coordinates, region, productCategories)

Use **Postman** or `curl` to populate.

find the postman collection inside the .env file

---

## ⚙️ Scripts

- `npm install`        – Install dependencies
- `npm run dev`        – Run dev with nodemon
- `npm test`           – Run all tests
- `npm run test:watch` – Watch mode

---

## 👨‍💼 Author & Maintainer

**Gideon Kipkorir**  
Built with passion for the Agroecology Market Pull Platform