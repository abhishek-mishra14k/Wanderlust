<div align="center">

# 🌍 WanderLust

### A Full-Stack Airbnb Clone built using Node.js, Express.js, MongoDB Atlas & Cloudinary

Discover, create, review, and manage beautiful travel listings with secure authentication and cloud image storage.

</div>

---

## 📌 Features

### 🏡 Listings
- Create new property listings
- Edit existing listings
- Delete listings
- View complete listing details
- Upload listing images using Cloudinary
- Store listing location with GeoJSON coordinates

### 🔍 Search & Categories
- Search listings by:
  - Title
  - Location
  - Country
- Browse listings by category
  - Beaches
  - Mountains
  - Castles
  - Camping
  - Trending
  - Iconic Cities
  - Farms
  - Rooms

### 👤 Authentication
- User Registration
- User Login
- User Logout
- Password hashing using Passport Local Mongoose
- Session-based Authentication
- Protected Routes

### ⭐ Reviews
- Add Reviews
- Delete Reviews
- Rating System
- Only Review Author can delete review

### 🔐 Authorization
- Only logged-in users can:
  - Create Listings
  - Add Reviews
- Only Listing Owner can:
  - Edit Listing
  - Delete Listing
- Only Review Author can:
  - Delete Review

### ☁ Cloud Storage
- Cloudinary Image Upload
- Multer Image Handling

### 🗺 Maps & Location
- Geoapify Geocoding API
- Stores Latitude & Longitude
- GeoJSON Support

### 💬 Flash Messages
- Success Notifications
- Error Notifications

### 📱 Responsive UI
- Bootstrap 5
- Mobile Friendly Design

---

# 🛠 Tech Stack

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS
- EJS Mate

## Backend

- Node.js
- Express.js

## Database

- MongoDB Atlas
- Mongoose

## Authentication

- Passport.js
- Passport Local
- Passport Local Mongoose
- Express Session
- Connect Mongo

## Image Storage

- Cloudinary
- Multer
- Multer Storage Cloudinary

## APIs

- Geoapify Geocoding API

---

# 📂 Project Structure

```
Wanderlust
│
├── controllers/
├── init/
├── models/
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── routes/
├── utils/
├── views/
│
├── middleware.js
├── schema.js
├── cloudConfig.js
├── app.js
├── package.json
└── README.md
```

---

# 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/Wanderlust.git
```

---

### Move into Project

```bash
cd Wanderlust
```

---

### Install Dependencies

```bash
npm install
```

---

### Create .env File

```env
MONGO_URL=YOUR_MONGODB_ATLAS_URI

CLOUD_NAME=YOUR_CLOUDINARY_NAME
CLOUD_API_KEY=YOUR_CLOUDINARY_KEY
CLOUD_API_SECRET=YOUR_CLOUDINARY_SECRET

GEOAPIFY_API_KEY=YOUR_GEOAPIFY_KEY

SECRET=YOUR_SESSION_SECRET
```

---

### Seed Database

```bash
node init/index.js
```

---

### Start Server

```bash
nodemon app.js
```

---

Open

```
http://localhost:8080
```

---

# 📸 Screenshots

## Home Page

_Add Screenshot Here_

---

## Listing Details

_Add Screenshot Here_

---

## Create Listing

_Add Screenshot Here_

---

## Login

_Add Screenshot Here_

---

## Map & Reviews

_Add Screenshot Here_

---

# 📦 NPM Packages Used

- express
- mongoose
- ejs
- ejs-mate
- express-session
- connect-mongo
- passport
- passport-local
- passport-local-mongoose
- multer
- cloudinary
- multer-storage-cloudinary
- joi
- connect-flash
- method-override
- dotenv

---

# 🔒 Security Features

- Password Hashing
- Session Authentication
- MongoDB Session Store
- Protected Routes
- Owner Authorization
- Review Authorization
- Environment Variables

---

# 🌟 Future Improvements

- ❤️ Wishlist Feature
- 📍 Interactive Maps
- 💳 Online Payment Integration
- 📅 Booking System
- 💬 Chat Between Users
- 🔔 Notifications
- 📱 Progressive Web App (PWA)
- 🌙 Dark Mode

---

# 👨‍💻 Author

**Abhishek Mishra**

GitHub: https://github.com/YOUR_USERNAME

LinkedIn: https://linkedin.com/in/YOUR_LINKEDIN

---

## ⭐ If you like this project, don't forget to star the repository!

