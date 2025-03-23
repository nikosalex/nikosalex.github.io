# Baptism Invitation Website

A beautiful baptism invitation website created using Next.js, Tailwind CSS, and React.

## Features

- Responsive design for all devices
- Beautiful animations
- RSVP form
- Map integration
- Contact information

## Local Development

1. Clone the repository
   ```
   git clone https://github.com/your-username/baptism-invitation.git
   cd baptism-invitation
   ```

2. Install dependencies
   ```
   bun install
   ```

3. Start the development server
   ```
   bun run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. Push your changes to the main branch of your GitHub repository.
2. GitHub Actions will automatically build and deploy your site.
3. Your site will be available at `https://your-username.github.io/baptism-invitation/`

### Option 2: Manual Deployment

1. Configure the base path in `next.config.js` if your repository name is not `baptism-invitation`.
2. Run the deploy script:
   ```
   bun run deploy
   ```

## Configuration

To deploy to your own GitHub Pages, follow these steps:

1. Create a GitHub repository named `baptism-invitation` (or any name you prefer)
2. Update the `basePath` in `next.config.js` to match your repository name:
   ```js
   basePath: '/your-repo-name',
   ```
3. Commit and push your code to the repository:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

4. Enable GitHub Pages in your repository settings:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Select "GitHub Actions" as the source
   - Your site will be published at `https://your-username.github.io/your-repo-name/`

## Customization

Feel free to customize the content in `src/app/page.tsx` to fit your needs.

## License

This project is licensed under the MIT License.
