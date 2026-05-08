# Sicilia Collection 🛍️

A full-stack ecommerce web application built with the MERN stack, featuring a customer-facing storefront, an admin dashboard, and a REST API backend.

## Live Demo

- **Frontend:** [sicilia-collection.vercel.app](https://sicilia-collection.vercel.app)

---

## Features

### Customer Storefront

- Browse and filter products by category and subcategory
- Product detail pages with image gallery and size selection
- Shopping cart with quantity management
- User authentication (register/login)
- Checkout with delivery information
- Multiple payment methods: Cash on Delivery, Stripe, and Razorpay
- Order history page

### Admin Dashboard

- Add new products with image uploads
- View and manage all product listings
- View and manage all orders
- Update order status (Packing, Shipped, Out for Delivery, Delivered)

---

## Tech Stack

**Frontend & Admin**

- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify
- Vite

**Backend**

- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- Bcrypt
- Stripe
- Razorpay
- Cloudinary (image uploads)
- Multer

---

## Project Structure

```
SiciliaCollection/
├── frontend/       # Customer-facing React app
├── admin/          # Admin panel React app
└── Backend/        # Express REST API
```

---

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account
- Stripe account
- Razorpay account
- Cloudinary account

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/gautam-parmar-ai/SiciliaCollection.git
cd SiciliaCollection
```

**2. Install dependencies for each app**

```bash
# Backend
cd Backend && npm install

# Frontend
cd ../frontend && npm install

# Admin
cd ../admin && npm install
```

**3. Set up environment variables**

Create a `.env` file in the `Backend` folder:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret_key
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

Create a `.env` file in the `frontend` folder:

```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Create a `.env` file in the `admin` folder:

```env
VITE_BACKEND_URL=http://localhost:4000
```

**4. Run the apps**

```bash
# Backend (from /Backend)
npm run server

# Frontend (from /frontend)
npm run dev

# Admin (from /admin)
npm run dev
```

---

## API Endpoints

| Method | Endpoint                  | Description                 |
| ------ | ------------------------- | --------------------------- |
| POST   | /api/user/register        | Register a new user         |
| POST   | /api/user/login           | Login user                  |
| GET    | /api/product/list         | Get all products            |
| POST   | /api/product/add          | Add a product (admin)       |
| POST   | /api/product/remove       | Remove a product (admin)    |
| POST   | /api/cart/add             | Add item to cart            |
| POST   | /api/cart/update          | Update cart item            |
| POST   | /api/cart/get             | Get user cart               |
| POST   | /api/order/place          | Place COD order             |
| POST   | /api/order/stripe         | Place Stripe order          |
| POST   | /api/order/razorpay       | Place Razorpay order        |
| POST   | /api/order/verifyStripe   | Verify Stripe payment       |
| POST   | /api/order/verifyRazorpay | Verify Razorpay payment     |
| POST   | /api/order/userorders     | Get user orders             |
| POST   | /api/order/list           | Get all orders (admin)      |
| POST   | /api/order/status         | Update order status (admin) |

---

## Deployment

This project is deployed on **Vercel**. Make sure to:

1. Add all environment variables in Vercel project settings
2. Set MongoDB Atlas Network Access to allow all IPs (`0.0.0.0/0`)

---

## Author

**Gautam Parmar**

- GitHub: [@gautam-parmar-ai](https://github.com/gautam-parmar-ai)
