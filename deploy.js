const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  // Set this to your preferred deployment platform: 'vercel', 'netlify', 'github-pages'
  platform: 'vercel',
  
  // For GitHub Pages
  ghPagesRepo: 'username/repo-name',
  
  // For custom deployments
  outputDir: './out',
};

// Ensure the .next directory exists (build has been run)
if (!fs.existsSync(path.join(__dirname, '.next'))) {
  console.error('Error: Build directory (.next) not found. Run "npx next build --no-lint" first.');
  process.exit(1);
}

console.log('Starting deployment process...');

try {
  switch (config.platform.toLowerCase()) {
    case 'vercel':
      console.log('Deploying to Vercel...');
      console.log('To deploy to Vercel, run:');
      console.log('1. Install Vercel CLI: npm i -g vercel');
      console.log('2. Login to Vercel: vercel login');
      console.log('3. Deploy: vercel --prod');
      break;
      
    case 'netlify':
      console.log('Deploying to Netlify...');
      console.log('To deploy to Netlify, run:');
      console.log('1. Install Netlify CLI: npm i -g netlify-cli');
      console.log('2. Login to Netlify: netlify login');
      console.log('3. Deploy: netlify deploy --prod');
      break;
      
    case 'github-pages':
      console.log('Preparing for GitHub Pages deployment...');
      
      // Create static export
      console.log('Creating static export...');
      execSync('npx next export', { stdio: 'inherit' });
      
      console.log('To deploy to GitHub Pages:');
      console.log(`1. Push the 'out' directory to the gh-pages branch of your repository (${config.ghPagesRepo})`);
      console.log('2. Configure GitHub Pages in your repository settings to use the gh-pages branch');
      break;
      
    default:
      console.log('Custom deployment...');
      console.log(`Your build is ready in the ${config.outputDir} directory.`);
      console.log('Upload these files to your hosting provider.');
  }
  
  console.log('\nDeployment preparation completed successfully!');
} catch (error) {
  console.error('Deployment failed:', error.message);
  process.exit(1);
} 