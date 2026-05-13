# MERN Stack Portfolio

A modern, full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring an Apple-inspired minimalist design.

## Features

✨ **Apple-Inspired Design**
- Minimalist, clean aesthetic
- Smooth animations and transitions
- Responsive grid layouts
- Glassmorphism effects
- Professional typography

🎯 **Full MERN Stack**
- React 18 for dynamic UI
- Express.js backend API
- MongoDB for data persistence
- Node.js runtime

📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Smooth scrolling navigation

🚀 **Performance**
- Fast load times
- Optimized assets
- Lazy loading

## Project Structure

```
portfolio-mern/
├── backend/
│   ├── server.js           # Express server
│   ├── package.json        # Backend dependencies
│   └── .env.example        # Environment variables template
├── frontend/
│   ├── src/
│   │   ├── App.js          # Main React component
│   │   ├── App.css         # Global styles
│   │   ├── components/     # Reusable components
│   │   │   ├── Navigation.js/css
│   │   │   ├── Hero.js/css
│   │   │   ├── About.js/css
│   │   │   ├── Skills.js/css
│   │   │   ├── Projects.js/css
│   │   │   ├── Experience.js/css
│   │   │   ├── Contact.js/css
│   │   │   └── Footer.js/css
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json        # Frontend dependencies
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file from the template:
   ```bash
   cp .env.example .env
   ```

4. Update `.env` with your MongoDB URI and other configuration

5. Start the server:
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm start
   ```
   App opens on `http://localhost:3000`

## API Endpoints

- `GET /api/portfolio` - Get portfolio information
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Submit contact form

## Customization

### Update Portfolio Data

Edit the portfolio information in:
- `backend/server.js` - Update the `/api/portfolio` endpoint
- `backend/server.js` - Update the `/api/projects` endpoint for projects list

### Change Styling

Modify the CSS variables in `frontend/src/App.css`:
```css
:root {
  --bg: #ffffff;
  --text-primary: #1d1d1f;
  --accent: #0071e3;
  /* ... more variables */
}
```

### Add New Components

1. Create a new component in `frontend/src/components/`
2. Import and add to `App.js`
3. Add corresponding CSS file

## Technologies Used

**Frontend:**
- React 18
- CSS3 (Grid, Flexbox, Animations)
- Axios for API calls

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Tools:**
- Git for version control
- Vercel/Netlify ready for deployment

## Deployment

### Frontend (Vercel)

1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Backend (Heroku/Railway)

1. Push to GitHub
2. Connect to hosting platform
3. Set environment variables
4. Deploy

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Project filtering
- [ ] Analytics integration
- [ ] Email notifications for contact form
- [ ] Admin dashboard

## License

MIT License - feel free to use this project for your own portfolio!

## Contact

- Email: pbs@gitam.in
- LinkedIn: linkedin.com/in/prathap-b-s
- GitHub: github.com/Prathap-bs
