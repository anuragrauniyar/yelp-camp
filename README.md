# YelpCamp

![YelpCamp](https://img.shields.io/badge/YelpCamp-orange?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)

YelpCamp is a full-stack web application for discovering and sharing campgrounds across world. It allows users to register, create, edit, and review campgrounds with interactive maps and image uploads. Explore the diverse camping destinations across the world!


## 🛠 Tech Stack

### Frontend
- **EJS** - Templating Engine
- **Bootstrap 5** - CSS Framework
- **MapTiler SDK** - Interactive Maps

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **Passport.js** - Authentication (LocalStrategy)

### Database
- **MongoDB Atlas** - Cloud Database
- **Mongoose** - ODM Library

### Services
- **Cloudinary** - Image Storage & Management
- **MapTiler** - Map Services & Geocoding

### Security
- **Helmet.js** - Security Headers
- **express-mongo-sanitize** - NoSQL Injection Prevention
- **Cookie Security** - Session Management

## 🚀 Features

### 👤 User Management
- ✅ User registration and authentication
- ✅ Secure login/logout functionality
- ✅ Session management with cookies

### 🏕️ Campground Management
- ✅ Create new campgrounds with detailed information
- ✅ Edit and update existing campgrounds
- ✅ Delete campgrounds (authorized users only)
- ✅ Upload and manage multiple images per campground
- ✅ Location-based search and filtering

### 📝 Review System
- ✅ Add reviews and ratings for campgrounds
- ✅ Delete reviews (authorized users only)
- ✅ Star-based rating system
- ✅ Review timestamps and user attribution

### 🗺️ Interactive Maps
- ✅ Location-based markers for all campgrounds
- ✅ Clustered map view for better performance
- ✅ Interactive map centered on India
- ✅ Zoom and pan functionality

### 🎨 UI/UX
- ✅ Responsive design for all devices
- ✅ Modern Bootstrap 5 styling
- ✅ User-friendly navigation
- ✅ Flash messages for user feedback

### 🔒 Security Features
- ✅ Input validation and sanitization
- ✅ CSRF protection
- ✅ Secure HTTP headers
- ✅ NoSQL injection prevention
- ✅ Authentication middleware

## 🧑‍💻 Setup Instructions

### 📋 Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account
- Cloudinary account
- MapTiler account

### 📁 1. Clone the Repository
```bash
git clone https://github.com/anuragrauniyar/yelp-camp.git
cd yelp-camp
```

### 📦 2. Install Dependencies
```bash
npm install
```

### ⚙️ 3. Environment Variables
Create a `.env` file in the root directory and add the following:

```env
# Database
DB_URL=your_mongodb_atlas_connection_string

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET=your_cloudinary_secret

# MapTiler Configuration
MAPTILER_API_KEY=your_maptiler_api_key

# Security
SECRET=your_cookie_secret_key

# Optional: Development/Production Mode
NODE_ENV=development
PORT=3000
```

### 🌱 4. Seed the Database (Optional)
To populate the database with 300+ random campgrounds:

```bash
node seeds/index.js
```

This will create sample campgrounds across various Indian cities.

### ▶️ 5. Run the Application
```bash
npm start
# or for development with nodemon
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📁 Project Structure

```
yelpcamp/
├── app.js                 # Main application file
├── package.json          # Project dependencies
├── .env                  # Environment variables
├── models/               # Database models
│   ├── campground.js     # Campground schema
│   ├── user.js           # User schema
│   └── review.js         # Review schema
├── routes/               # Express routes
│   ├── campgrounds.js    # Campground routes
│   ├── users.js          # Authentication routes
│   └── reviews.js        # Review routes
├── middleware/           # Custom middleware
│   └── index.js          # Authentication & authorization
├── views/                # EJS templates
│   ├── layouts/          # Layout templates
│   ├── partials/         # Partial templates
│   ├── campgrounds/      # Campground views
│   └── users/            # User authentication views
├── public/               # Static assets
│   ├── stylesheets/      # CSS files
│   └── javascripts/      # Client-side JS
├── seeds/                # Database seeding
│   ├── index.js          # Seed script
│   ├── cities.js         # 100+ Indian cities data
│   └── seedHelpers.js    # Helper functions
└── utils/                # Utility functions
    └── catchAsync.js     # Error handling wrapper
```

## 🗺️ Map Configuration

The application features an interactive map centered on India:

```javascript
const map = new maptilersdk.Map({
    container: 'cluster-map',
    style: maptilersdk.MapStyle.BRIGHT,
    center: [78.9629, 20.5937], // Geographic center of India
    zoom: 4
});
```

## 🔒 Security Measures

- **Helmet.js**: Sets various HTTP headers for security
- **Express Session**: Secure session management
- **Passport.js**: Robust authentication system
- **MongoDB Sanitization**: Prevents NoSQL injection attacks
- **Input Validation**: Server-side validation using Joi
- **CSRF Protection**: Cross-site request forgery prevention

## 🌐 API Endpoints

### Authentication
- `GET /register` - User registration form
- `POST /register` - Create new user
- `GET /login` - Login form
- `POST /login` - User authentication
- `GET /logout` - User logout

### Campgrounds
- `GET /campgrounds` - List all campgrounds
- `GET /campgrounds/new` - New campground form
- `POST /campgrounds` - Create new campground
- `GET /campgrounds/:id` - Show specific campground
- `GET /campgrounds/:id/edit` - Edit campground form
- `PUT /campgrounds/:id` - Update campground
- `DELETE /campgrounds/:id` - Delete campground

### Reviews
- `POST /campgrounds/:id/reviews` - Add review
- `DELETE /campgrounds/:id/reviews/:reviewId` - Delete review

## 👤 Author

**Anurag**
- 🎓 B.Tech Chemical Engineering | IIT(BHU)

## 🙏 Acknowledgments

- **Colt Steele** for the YelpCamp concept
- **Bootstrap** for the responsive UI framework
- **MapTiler** for excellent mapping services
- **Cloudinary** for image management
- **MongoDB Atlas** for cloud database services


⭐ **If you found this project helpful, please consider giving it a star!** ⭐