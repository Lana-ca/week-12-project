# Deploy Family Grimoire to Vercel

## Quick Deploy (5 minutes)

### Step 1: Go to Vercel
1. Visit **https://vercel.com/signup**
2. Click **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account

### Step 2: Import Your Repository
1. Click **"Add New... → Project"**
2. Find **`Lana-ca/week-12-project`** in the list
3. Click **"Import"**

### Step 3: Configure Project
Vercel will auto-detect Next.js settings. Just verify:
- **Framework Preset**: Next.js ✓
- **Root Directory**: `./` ✓
- **Build Command**: `npm run build` ✓
- **Output Directory**: `.next` ✓

### Step 4: Environment Variables (Optional - skip for now)
You can add these later when you need database/AI features:
```
NEXTAUTH_SECRET=your-random-secret-here
NEXTAUTH_URL=https://your-app.vercel.app
DATABASE_URL=your-postgres-url
OPENAI_API_KEY=your-openai-key
```

### Step 5: Deploy!
1. Click **"Deploy"**
2. Wait 2-3 minutes for the build
3. Get your live URL: `https://family-grimoire-xxx.vercel.app`

---

## Your Grimoire is Now Live! 🎉

Visit your deployed URL to see:
- ✨ The beautiful grimoire book interface
- 📖 Grandma Ruby's story with rain effects
- 📸 Photos tucked into pages
- 🌧️ Animated raindrops
- ✍️ Handwritten journal styling

## Next Steps After Deployment

### 1. **Set Up Database** (when ready for real data)
```bash
# Use Vercel Postgres
1. In Vercel dashboard → Storage → Create Database → Postgres
2. Copy the DATABASE_URL
3. Add to Environment Variables
4. Run: npx prisma migrate deploy
```

### 2. **Enable AI Features** (when ready)
```bash
1. Get OpenAI API key from platform.openai.com
2. Add OPENAI_API_KEY to Environment Variables
3. Redeploy
```

### 3. **Custom Domain** (optional)
```bash
1. Vercel dashboard → Domains
2. Add your custom domain
3. Update DNS records
```

---

## Automatic Deployments

Every time you push to your GitHub repository, Vercel will:
- ✓ Automatically rebuild your site
- ✓ Run tests and checks
- ✓ Deploy to production
- ✓ Give you a preview URL for each branch

---

## Troubleshooting

**Build fails?**
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Environment variables are set correctly

**Page not loading?**
- Clear browser cache
- Check Vercel deployment logs
- Verify build was successful

**Need help?**
- Vercel docs: https://vercel.com/docs
- Next.js docs: https://nextjs.org/docs

---

**You're all set!** 🚀 Your Family Grimoire will be live at your Vercel URL.
