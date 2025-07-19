# 🎨 ApiProductsNodeJs Monorepo

A fullstack monorepo for a Products Management application, featuring a RESTful API (Node.js, Express, MongoDB) and a modern React frontend. All package management and scripts are handled with [Bun](https://bun.sh/).

---

## 📚 Table of Contents

- [✨ About](#-about)
- [🛠️ Tech Stack](#-tech-stack)
- [⚡ Requirements](#-requirements)
- [🚀 Installation](#-installation)
- [▶️ Usage](#-usage)
- [🔗 API Endpoints](#-api-endpoints)
- [🗃️ Data Model](#-data-model)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)

---

## ✨ About

This monorepo contains:

- **🖥️ Backend**: A RESTful API for product management (CRUD), built with Node.js, Express, and MongoDB.
- **💻 Frontend**: A React application for interacting with the API, styled with Tailwind CSS and built with Vite.

---

## 🛠️ Tech Stack

- **📦 Monorepo Manager**: [Bun](https://bun.sh/) (v1.1+)
- **🟢 Node.js**: v20.x (Bun is compatible and fast with Node.js APIs)
- **🔙 Backend**: Node.js, Express, Mongoose, TypeScript
- **🔜 Frontend**: React 18, Vite, Tailwind CSS, DaisyUI, SweetAlert2

---

## ⚡ Requirements

- [🍞 Bun](https://bun.sh/) v1.1 or higher
- 🟢 Node.js v20.x (for compatibility)
- 🍃 MongoDB Atlas or local MongoDB instance

---

## 🚀 Installation

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd ApiProductsNodeJs
   ```

2. **Install all dependencies (monorepo):**
   ```sh
   bun install
   ```

3. **Set up environment variables:**
   - For production, move your MongoDB connection string to a `.env` file in `backend/`.

---

## ▶️ Usage

### 🖥️ Backend

1. **Start the backend server:**
   ```sh
   cd backend
   bun run dev
   ```
   The API will be available at `http://localhost:4000/api/products`.

### 💻 Frontend

1. **Start the frontend dev server:**
   ```sh
   cd frontend
   bun run dev
   ```
   The app will be available at `http://localhost:5173` (or the port Vite chooses).

---

## 🔗 API Endpoints

| 🛠️ Method | 🌐 Route                  | 📄 Description         |
|-----------|--------------------------|------------------------|
| GET       | /api/products            | List all products      |
| GET       | /api/products/:id        | Get a product by ID    |
| POST      | /api/products            | Create a new product   |
| PUT       | /api/products/:id        | Update a product       |
| DELETE    | /api/products/:id        | Delete a product       |

---

## 🗃️ Data Model

Product schema (Mongoose):

```js
{
  name: String,         // required
  description: String,
  sku: String,          // required, unique
  inStock: Boolean,     // default: false
  basePrice: Number,    // required
  brand: String,        // required
  stock: Boolean,       // default: false
  imageUrl: String
}
```

---

## 📁 Project Structure

```diff
ApiProductsNodeJs/
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── services/
│   ├── package.json
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── assets/
│   │   ├── config/
│   │   └── utils/
│   ├── package.json
│   └── ...
├── README.md
└── ...
```

---

## 🏁 Scripts (with Bun)

From the root, you can run scripts in each package:

- **📦 Install all dependencies:**  
  `bun install`
- **🖥️ Start backend:**  
  `cd backend && bun run dev`
- **💻 Start frontend:**  
  `cd frontend && bun run dev`
- **⚒️ Build frontend:**  
  `cd frontend && bun run build`

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request for suggestions or improvements. 🙌

---

## 📝 License

This project is licensed under the MIT License.

---

> **Note:**  
> - Replace `<your-repo-url>` with your actual repository URL.  
> - For production, always use environment variables for sensitive data (like MongoDB connection strings).  
> - You can add a root `bunfig.toml` or workspace configuration for advanced monorepo management.
