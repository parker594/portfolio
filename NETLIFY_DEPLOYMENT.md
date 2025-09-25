# 🚀 Netlify Deployment Guide

## ✅ Your portfolio is now ready for Netlify deployment!

### 📋 What's Been Set Up:

1. **✅ Netlify Configuration** (`netlify.toml`)
   - Build settings for Vite
   - SPA routing redirects
   - API routes to Netlify Functions
   - Security headers

2. **✅ Netlify Functions** (`netlify/functions/send-email.js`)
   - Serverless email handling
   - Gmail SMTP integration
   - CORS support

3. **✅ Production-Ready Frontend**
   - ContactSection.tsx updated for production
   - Automatic endpoint switching (dev/production)
   - Production build tested ✅

4. **✅ Environment Variables Ready**
   - `.env.example` created with required variables

---

## 🌐 Deployment Steps:

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Netlify deployment with email functions"
git push origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository: `parker594/nmiet`

### Step 3: Configure Build Settings
Netlify will auto-detect these from `netlify.toml`:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `netlify/functions`

### Step 4: Set Environment Variables
In Netlify Dashboard → Site Settings → Environment Variables:
```
EMAIL_USER = notification12457@gmail.com
EMAIL_PASSWORD = pupn utci ozye dsse
EMAIL_FROM = notification12457@gmail.com  
EMAIL_TO = debajyotiupadhayaya@gmail.com
```

### Step 5: Deploy! 🎉
- Netlify will automatically deploy
- Your site will be live at: `https://your-site-name.netlify.app`

---

## 🧪 Testing After Deployment:

1. **Visit your live site**
2. **Go to Contact section**
3. **Fill out and submit the form**
4. **Check debajyotiupadhayaya@gmail.com for the email**

---

## 📞 How It Works:

**Development** (localhost):
- Frontend: `http://localhost:3000`
- API: `http://localhost:3003/api/send-email`

**Production** (Netlify):
- Frontend: `https://your-site-name.netlify.app`
- API: `https://your-site-name.netlify.app/api/send-email` (via Functions)

---

## 🔧 If Email Doesn't Work:

1. Check Netlify Functions logs in dashboard
2. Verify environment variables are set correctly
3. Ensure Gmail 2-Step Verification is enabled
4. Confirm app password is correct

---

**Your portfolio is production-ready! 🎉**