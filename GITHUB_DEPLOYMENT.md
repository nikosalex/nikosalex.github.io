# Deploying Your Baptism Invitation to GitHub Pages

Follow these steps to deploy your baptism invitation website to GitHub Pages.

## Step 1: Create a GitHub Repository

1. Sign in to your GitHub account (or create one at https://github.com/signup)
2. Click on the "+" icon in the top right corner and select "New repository"
3. Name your repository (e.g., `baptism-invitation`)
4. Set it to Public (required for GitHub Pages with a free account)
5. Click "Create repository"

## Step 2: Configure Your Project

The project is already configured for GitHub Pages deployment with:
- `next.config.js` set for static export
- GitHub Actions workflow in `.github/workflows/deploy.yml`
- `.nojekyll` file to prevent Jekyll processing
- Deployment scripts in `package.json`

However, you may need to adjust the `basePath` in `next.config.js` if your repository name is different:

```js
// In next.config.js
basePath: '/your-repo-name', // e.g., '/baptism-invitation'
```

## Step 3: Push Your Code to GitHub

Initialize a Git repository and push your code:

```bash
# Initialize Git repository if not already done
git init

# Add all files to staging
git add .

# Commit the changes
git commit -m "Initial commit"

# Rename the main branch (GitHub's default is 'main')
git branch -M main

# Add your GitHub repository as the remote
git remote add origin https://github.com/your-username/your-repo-name.git

# Push your code to GitHub
git push -u origin main
```

## Step 4: Deploy Options

### Option 1: Automatic Deployment via GitHub Actions

1. After pushing to main, GitHub Actions will automatically start the deployment workflow
2. Go to your repository on GitHub
3. Click on the "Actions" tab to see the workflow progress
4. Once complete, your site will be published

### Option 2: Manual Deployment using gh-pages

If you prefer to deploy manually:

```bash
# Install gh-pages if not already installed
bun add -d gh-pages

# Run the deploy script
bun run deploy
```

## Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. Under "Source", select "GitHub Actions" as the source

## Step 6: Access Your Website

Your website will be available at:
```
https://your-username.github.io/your-repo-name/
```

For example, if your username is "johndoe" and your repository is "baptism-invitation", your website will be at:
```
https://johndoe.github.io/baptism-invitation/
```

## Troubleshooting

### Images not displaying?

Make sure your images are correctly referenced with the base path. In Next.js, the Image component handles this automatically when the `basePath` is set in the config.

### Custom Domain

To use a custom domain:

1. Go to your repository's Settings > Pages
2. Under "Custom domain", enter your domain
3. Configure your domain's DNS settings according to GitHub instructions
4. Update the `next.config.js` file to remove the `basePath`

### Need Help?

If you encounter any issues, check GitHub's documentation on GitHub Pages:
https://docs.github.com/en/pages

## Updating Your Site

To update your site after making changes:

1. Commit and push your changes to GitHub:
```bash
git add .
git commit -m "Update website content"
git push
```

2. GitHub Actions will automatically rebuild and deploy your site
