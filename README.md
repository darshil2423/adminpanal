# AdminPanelWithNode

A Node.js-based Admin Panel for managing admins, categories, and blogs, featuring authentication, dashboard analytics, and CRUD operations. Built with Express, EJS, MongoDB, and AdminLTE UI.

## Features

- **Authentication**: Secure login/logout, session management, and password reset via email/OTP.
- **Admin Management**: Add, view, edit, and delete admin users with profile image upload and role-based access.
- **Category Management**: Create, view, edit, and delete blog categories.
- **Blog Management**: Add, view, edit, and delete blogs, with category assignment and search/filtering.
- **Dashboard**: Visual analytics, user stats, and quick links to key actions.
- **Responsive UI**: Built with AdminLTE and Bootstrap for a modern, mobile-friendly interface.

## Technologies Used

- **Node.js** & **Express**: Backend server and routing
- **MongoDB** & **Mongoose**: Database and ODM
- **EJS**: Templating engine for dynamic views
- **Passport.js**: Authentication middleware (local strategy)
- **Multer**: File uploads (profile images)
- **Nodemailer**: Email/OTP for password reset
- **AdminLTE** & **Bootstrap**: UI framework

## Folder Structure

- `index.js` – Main server entry point
- `config/` – Database and authentication config
- `controllers/` – Business logic for admins, blogs, categories
- `models/` – Mongoose models
- `routes/` – Express route definitions
- `views/` – EJS templates for all pages
- `assets/` – Static files (CSS, JS, images)
- `uploads/` – Uploaded images

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd AdminPanelWithNode
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure MongoDB**
   - The default connection string is set in `config/mongoose.js`.
   - Update with your credentials if needed.
4. **Run the application**
   ```bash
   npm start
   ```
5. **Access the app**
   - Open [http://localhost:4000](http://localhost:4000) in your browser.

## Usage

- **Login**: Use your admin credentials to log in.
- **Dashboard**: View analytics and quick stats.
- **Admins**: Add/edit/delete admin users.
- **Categories**: Manage blog categories.
- **Blogs**: Create, view, update, and delete blogs. Search and filter supported.
- **Profile**: View and update your profile, change password, and reset password via email/OTP.

## License

ISC

