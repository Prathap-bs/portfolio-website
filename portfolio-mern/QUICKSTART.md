# Quick Start Guide

## 🚀 Initial Setup (One-time)

### 1. Install MongoDB

**Option A: Local Installation**
- Download from https://www.mongodb.com/try/download/community
- Follow installation guide for your OS
- MongoDB will run on `mongodb://localhost:27017`

**Option B: MongoDB Atlas (Cloud)**
- Go to https://www.mongodb.com/cloud/atlas
- Create free cluster
- Get connection string and add to backend `.env`

### 2. Install Dependencies

From the root `portfolio-mern` folder:

```bash
# Install all dependencies at once
npm run install-all
```

Or manually:

```bash
# Backend
cd backend
npm install
cd ..

# Frontend
cd frontend
npm install
cd ..
```

### 3. Configure Environment Variables

**Backend (.env)**
```bash
cd backend
cp .env.example .env
```

Edit `backend/.env`:
```
MONGODB_URI=mongodb://localhost:27017/portfolio
PORT=5000
NODE_ENV=development
```

**Frontend (.env)**
```bash
cd frontend
cp .env.example .env
```

Leave the `.env` as is for local development.

## 🎬 Running the Project

### Development Mode (Both Frontend & Backend)

From root folder:
```bash
npm run dev
```

This runs:
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

### Manual (if needed)

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

## 📝 Updating Your Portfolio Data

### Update Personal Info

Edit `backend/server.js` - Update the `GET /api/portfolio` endpoint:

```javascript
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Your Name',
    role: 'Your Role',
    bio: 'Your bio...',
    email: 'your-email@example.com',
    phone: '+91 XXXXX XXXXX',
    location: 'Your City, Country',
    social: {
      github: 'https://github.com/yourusername',
      linkedin: 'https://linkedin.com/in/yourprofile/'
    }
  });
});
```

### Add/Edit Projects

Edit `backend/server.js` - Update the `GET /api/projects` endpoint:

```javascript
app.get('/api/projects', (req, res) => {
  res.json([
    {
      id: 1,
      title: 'Project Name',
      description: 'Project description',
      tags: ['Tag1', 'Tag2'],
      link: 'https://link-to-project.com',
      icon: '🎯'
    },
    // Add more projects...
  ]);
});
```

## 🎨 Customize Design

### Change Colors

Edit `frontend/src/App.css` - Modify the `:root` variables:

```css
:root {
  --bg: #ffffff;              /* Main background */
  --bg-secondary: #f5f5f7;    /* Secondary background */
  --text-primary: #1d1d1f;    /* Main text */
  --text-secondary: #86868b;  /* Secondary text */
  --accent: #0071e3;          /* Blue accent (Apple blue) */
  --success: #34c759;         /* Green for success */
}
```

### Change Fonts

The project uses system fonts (San Francisco on Mac, Segoe UI on Windows).
To use custom fonts, add to `frontend/src/App.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  font-family: 'Inter', -apple-system, sans-serif;
}
```

## 📦 Building for Production

### Frontend Build
```bash
cd frontend
npm run build
```

Creates optimized build in `frontend/build/` folder.

### Deploy

**Frontend (Vercel - Recommended)**
```bash
npm install -g vercel
cd frontend
vercel
```

**Backend (Railway/Heroku)**
- Push to GitHub
- Connect repo to Railway/Heroku
- Set environment variables
- Deploy

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### CORS Errors
Make sure backend is running on `http://localhost:5000` before starting frontend.

### MongoDB Connection Error
- Check MongoDB is running locally
- Or verify MongoDB Atlas connection string in `.env`

### Dependencies Missing
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📚 Project Structure Recap

```
portfolio-mern/
├── backend/                  # Express API server
│   ├── server.js            # Main server file
│   ├── package.json         # Dependencies
│   └── .env                 # Configuration (don't commit)
├── frontend/                # React app
│   ├── src/
│   │   ├── App.js          # Main component
│   │   ├── App.css         # Global styles
│   │   └── components/     # Reusable components
│   └── package.json        # Dependencies
├── .gitignore              # Git ignore rules
├── package.json            # Root package (for concurrently)
└── README.md              # Documentation
```

## ✨ Next Steps

1. ✅ Setup complete!
2. Update portfolio info in `backend/server.js`
3. Add your projects
4. Customize colors and design
5. Test locally
6. Deploy to production

## 🤝 Support

For issues or questions:
- Check the main README.md
- Review backend/server.js for API structure
- Inspect browser console for frontend errors
- Check terminal for backend errors

Happy coding! 🚀
