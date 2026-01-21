# MERN Authentication System

A full-stack authentication application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user registration, login, email verification, password reset, and secure session management.

## 🚀 Features

### Core Authentication Features
- **User Registration**: Secure user signup with input validation
- **User Login/Logout**: JWT-based authentication with HTTP-only cookies
- **Email Verification**: OTP-based email verification system
- **Password Reset**: Secure password reset via email OTP
- **Session Management**: Persistent login sessions with automatic token refresh

### Security Features
- **Password Hashing**: bcryptjs for secure password storage
- **JWT Tokens**: JSON Web Tokens for stateless authentication
- **HTTP-Only Cookies**: Secure cookie storage to prevent XSS attacks
- **CORS Configuration**: Proper cross-origin resource sharing setup
- **Input Validation**: Server-side validation for all user inputs

### User Experience
- **Responsive Design**: Mobile-friendly UI built with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user feedback
- **Loading States**: Proper loading indicators during API calls
- **Form Validation**: Client-side form validation with error handling

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern React with hooks and functional components
- **Vite**: Fast build tool and development server
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client for API communication
- **React Toastify**: Notification system

### Backend
- **Node.js**: JavaScript runtime environment
- **Express.js**: Web application framework
- **MongoDB**: NoSQL database with Mongoose ODM
- **JWT**: JSON Web Token for authentication
- **bcryptjs**: Password hashing library
- **Nodemailer**: Email sending functionality
- **Cookie Parser**: HTTP cookie parsing middleware

### DevOps & Deployment
- **Vercel**: Cloud platform for deployment
- **ESLint**: Code linting and formatting
- **Nodemon**: Development server auto-restart

## 📁 Project Structure

```
mern-auth/
├── client/                          # React frontend
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   └── Navbar.jsx
│   │   ├── context/                 # React context for state management
│   │   │   └── AppContext.jsx
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── EmailVerify.jsx
│   │   │   └── ResetPassword.jsx
│   │   ├── App.jsx                  # Main app component
│   │   └── main.jsx                 # App entry point
│   ├── package.json
│   ├── vite.config.js
│   └── vercel.json
├── server/                          # Node.js backend
│   ├── config/                      # Configuration files
│   │   ├── mongodb.js               # Database connection
│   │   ├── nodemailer.js            # Email configuration
│   │   └── emailTemplates.js        # Email templates
│   ├── controllers/                 # Route controllers
│   │   ├── authController.js        # Authentication logic
│   │   └── userController.js        # User data logic
│   ├── middleware/                  # Custom middleware
│   │   └── userAuth.js              # Authentication middleware
│   ├── models/                      # Database models
│   │   └── userModel.js             # User schema
│   ├── routes/                      # API routes
│   │   ├── authRoutes.js            # Authentication routes
│   │   └── userRoutes.js            # User routes
│   ├── server.js                    # Main server file
│   ├── package.json
│   └── vercel.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Backend Setup

1. **Navigate to server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the server directory with the following variables:
   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_app_password
   FRONTEND_URL=http://localhost:5173
   ```

4. **Start the server:**
   ```bash
   npm run server
   ```

### Frontend Setup

1. **Navigate to client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Configuration:**
   Create a `.env` file in the client directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Access the application:**
   Open [http://localhost:5173](http://localhost:5173) in your browser

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/register` | User registration | No |
| POST | `/login` | User login | No |
| POST | `/logout` | User logout | Yes |
| GET | `/is-auth` | Check authentication status | Yes |
| POST | `/send-verify-otp` | Send email verification OTP | Yes |
| POST | `/verify-account` | Verify email with OTP | Yes |
| POST | `/send-reset-otp` | Send password reset OTP | No |
| POST | `/reset-password` | Reset password with OTP | No |

### User Routes (`/api/user`)

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/data` | Get user profile data | Yes |

## 🔐 Authentication Flow

1. **Registration**: User provides name, email, and password
2. **Email Verification**: System sends OTP to email for account verification
3. **Login**: User logs in with email and password
4. **JWT Token**: Server issues JWT token stored in HTTP-only cookie
5. **Session Management**: Client checks auth status on app load
6. **Password Reset**: User can request OTP to reset password

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  verifyOtp: String,
  verifyOtpExpireAt: Number,
  isAccountVerified: Boolean,
  resetOtp: String,
  resetOtpExpireAt: Number
}
```

## 🚀 Deployment

### Backend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy the server directory

### Frontend Deployment (Vercel)
1. Connect your GitHub repository to Vercel
2. Set `VITE_BACKEND_URL` environment variable
3. Deploy the client directory

## 🧪 Testing

### Manual Testing Checklist
- [ ] User registration with valid/invalid data
- [ ] Email verification process
- [ ] Login/logout functionality
- [ ] Password reset flow
- [ ] Session persistence across browser refreshes
- [ ] Protected route access
- [ ] Mobile responsiveness

### API Testing
Use tools like Postman or Thunder Client to test API endpoints:
- Test all authentication endpoints
- Verify JWT token validation
- Check error handling for invalid requests

## 🔒 Security Considerations

- **Password Security**: Minimum length requirements and complexity rules
- **Rate Limiting**: Implement rate limiting for OTP requests
- **OTP Expiration**: Time-limited OTPs (recommended: 10 minutes)
- **Environment Variables**: Never commit sensitive data to version control
- **HTTPS**: Always use HTTPS in production
- **Input Sanitization**: Validate and sanitize all user inputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Shubham Kumar**

## 🙏 Acknowledgments

- MERN stack community
- Open source contributors
- React and Node.js documentation

---

**Note**: This project is built for educational and portfolio purposes. For production use, consider additional security measures and thorough testing.</content>
<parameter name="filePath">c:\Users\shubh\OneDrive\Desktop\mern-auth\README.md