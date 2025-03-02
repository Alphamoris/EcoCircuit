# EcoCircuit Deployment Guide

This guide provides detailed instructions for deploying the EcoCircuit application to various hosting platforms.

## Prerequisites

Before deploying, ensure you have:

1. Node.js 18.x or higher installed
2. Successfully built the application with `npx next build --no-lint`
3. Access to your chosen hosting platform (account credentials)

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the platform created by the developers of Next.js and offers the simplest deployment experience.

#### Steps:

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```
   Follow the prompts to authenticate your account.

3. **Deploy**
   ```bash
   vercel
   ```
   This will deploy to a preview URL. To deploy to production:
   ```bash
   vercel --prod
   ```

4. **Configure Custom Domain** (Optional)
   - Go to your Vercel dashboard
   - Select your project
   - Navigate to "Settings" > "Domains"
   - Add your custom domain and follow the DNS configuration instructions

### 2. Netlify

Netlify is another excellent platform for hosting Next.js applications.

#### Steps:

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify Configuration** (First-time only)
   ```bash
   netlify init
   ```
   Follow the prompts to set up your project.

4. **Deploy**
   ```bash
   netlify deploy
   ```
   This creates a draft URL. To deploy to production:
   ```bash
   netlify deploy --prod
   ```

5. **Configure Build Settings** (Optional)
   Create a `netlify.toml` file in your project root:
   ```toml
   [build]
     command = "npx next build --no-lint"
     publish = ".next"

   [[plugins]]
     package = "@netlify/plugin-nextjs"
   ```

### 3. GitHub Pages

For static exports of your Next.js application.

#### Steps:

1. **Create Static Export**
   ```bash
   npx next build --no-lint
   npx next export
   ```

2. **Deploy to GitHub Pages**
   - Create a new GitHub repository or use an existing one
   - Push your code to the repository
   - Create a new branch called `gh-pages`
   - Copy the contents of the `out` directory to this branch
   - Push the `gh-pages` branch
   - Go to repository settings > Pages
   - Select the `gh-pages` branch as the source

3. **Configure for GitHub Pages** (Optional)
   Add to your `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     basePath: '/your-repo-name',
     images: {
       unoptimized: true,
     },
   }
   ```

### 4. Traditional Hosting (FTP)

For deployment to traditional web hosting services.

#### Steps:

1. **Create Static Export**
   ```bash
   npx next build --no-lint
   npx next export
   ```

2. **Upload Files**
   - Use an FTP client (like FileZilla) to connect to your hosting server
   - Upload the contents of the `out` directory to your web server's public directory (often `public_html`, `www`, or `htdocs`)

3. **Configure Server** (If needed)
   - For Apache, create or modify `.htaccess` in your public directory:
     ```
     RewriteEngine On
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
     ```
   - For Nginx, update your server block configuration:
     ```
     location / {
       try_files $uri $uri/ /index.html;
     }
     ```

## Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed: `npm install`
   - Check for TypeScript or ESLint errors
   - Try building with the `--no-lint` flag: `npx next build --no-lint`

2. **Deployment Failures**
   - Check platform-specific logs for error details
   - Ensure you have the correct permissions for the target repository or server
   - Verify your authentication credentials

3. **Missing Assets**
   - Check that all assets are properly referenced with relative paths
   - Ensure the `basePath` is correctly configured in `next.config.js` if using a subdirectory

4. **404 Errors After Deployment**
   - Verify that routing is properly configured for your hosting platform
   - Check that the build output contains all expected pages
   - Ensure your hosting platform supports client-side routing or has appropriate redirects

## Additional Resources

- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

## Support

If you encounter any issues with deployment, please:

1. Check the troubleshooting section above
2. Review the logs from your build and deployment process
3. Consult the documentation for your specific hosting platform
4. Open an issue in the project repository with detailed information about the problem 