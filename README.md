# Santhiya T — Portfolio Website

A dark-themed, animated personal portfolio website for Santhiya T — Full Stack Web Developer.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML structure |
| `style.css` | All styles & animations |
| `script.js` | Certificate carousel, lightbox, skill bars |
| `render.yaml` | Render.com deployment config |

---

## 🚀 Deploy on Render.com (Step-by-Step)

### Step 1 — Push to GitHub
1. Create a new repository on [github.com](https://github.com)
2. Name it: `santhiya-portfolio` (or any name you like)
3. Upload all four files: `index.html`, `style.css`, `script.js`, `render.yaml`
   - Click **Add file → Upload files** and drop all 4 files
   - Click **Commit changes**

### Step 2 — Sign up / Log in to Render
1. Go to [render.com](https://render.com) and sign up (free)
2. Click **"Connect GitHub"** and authorize Render to access your account

### Step 3 — Create a Static Site on Render
1. From the Render dashboard, click **"+ New"** → **"Static Site"**
2. Select your `santhiya-portfolio` GitHub repository
3. Fill in these settings:

| Setting | Value |
|---------|-------|
| Name | `santhiya-portfolio` |
| Branch | `main` |
| Root Directory | *(leave empty)* |
| Build Command | *(leave empty)* |
| Publish Directory | `.` |

4. Click **"Create Static Site"**

### Step 4 — Done!
- Render will deploy in about 30–60 seconds
- You'll get a free URL like: `https://santhiya-portfolio.onrender.com`
- Every time you push changes to GitHub, Render auto-redeploys ✨

---

## 📸 Adding Real Certificate Images

Open `script.js` and update the `CERTS` array at the top:

```js
const CERTS = [
  {
    name: "Your Certificate Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    link: "https://verify-link.com",
    img: "https://your-image-url.com/cert.jpg"
    // OR use a local file path if hosting images in a /certs folder
  },
  // ...
];
```

You can also upload certificates directly on the live site using the **"Add Certificate"** button — they'll persist for that session.

---

## 🎨 Customization

- **Colors**: Edit CSS variables in `style.css` under `:root { ... }`
- **Content**: Edit sections directly in `index.html`
- **Links**: Update LinkedIn/GitHub `href` values in `index.html`
"# Santhiya-Portfolio" 
