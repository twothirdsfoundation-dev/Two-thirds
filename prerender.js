import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import React from 'react';
import { renderToString } from 'react-dom/server';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const templateDir = path.join(__dirname, 'wordpress-template');

// Path to compiled SSR bundle of App.tsx
const ssrBundlePath = './dist-ssr/assets/App.js';

async function run() {
  try {
    console.log('Loading SSR bundle...');
    const module = await import(ssrBundlePath);
    const App = module.default;

    console.log('Rendering App component to HTML string...');
    const html = renderToString(React.createElement(App));
    console.log(`Rendered HTML length: ${html.length} chars.`);

    // Replace "/assets/" with "<?php echo get_template_directory_uri(); ?>/assets/" for WordPress compatibility
    const wpAssetPathPrefix = '<?php echo get_template_directory_uri(); ?>/assets/';
    let phpMarkup = html;
    
    // Replace absolute relative "/assets/" in HTML
    phpMarkup = phpMarkup.split('"/assets/').join('"' + wpAssetPathPrefix);
    phpMarkup = phpMarkup.split("'/assets/").join("'" + wpAssetPathPrefix);
    phpMarkup = phpMarkup.split('url(/assets/').join('url(' + wpAssetPathPrefix);
    phpMarkup = phpMarkup.split('url("/assets/').join('url("' + wpAssetPathPrefix);
    phpMarkup = phpMarkup.split("url('/assets/").join("url('" + wpAssetPathPrefix);

    // Read index.php from template
    const templateIndexPhpPath = path.join(templateDir, 'index.php');
    if (!fs.existsSync(templateIndexPhpPath)) {
      throw new Error(`Template index.php not found at ${templateIndexPhpPath}`);
    }
    
    let indexPhpContent = fs.readFileSync(templateIndexPhpPath, 'utf8');
    
    // Insert pre-rendered HTML into <div id="root"></div>
    const rootPlaceholder = '<div id="root"></div>';
    if (!indexPhpContent.includes(rootPlaceholder)) {
      throw new Error('Placeholder <div id="root"></div> not found in template index.php!');
    }
    
    const updatedIndexPhp = indexPhpContent.replace(
      rootPlaceholder,
      `<div id="root">${phpMarkup}</div>`
    );
    
    // Write index.php directly to dist/index.php
    const destIndexPhpPath = path.join(distDir, 'index.php');
    fs.writeFileSync(destIndexPhpPath, updatedIndexPhp, 'utf8');
    console.log(`Successfully injected SSR HTML into ${destIndexPhpPath}`);

    // Update dist/index.html (static preview file) for completeness
    const destIndexHtmlPath = path.join(distDir, 'index.html');
    if (fs.existsSync(destIndexHtmlPath)) {
      let indexHtmlContent = fs.readFileSync(destIndexHtmlPath, 'utf8');
      if (indexHtmlContent.includes(rootPlaceholder)) {
        // In static HTML, absolute relative paths /assets/ are correct, so we inject raw html
        const updatedIndexHtml = indexHtmlContent.replace(
          rootPlaceholder,
          `<div id="root">${html}</div>`
        );
        fs.writeFileSync(destIndexHtmlPath, updatedIndexHtml, 'utf8');
        console.log(`Successfully injected SSR HTML into ${destIndexHtmlPath}`);
      }
    }

  } catch (err) {
    console.error('Error during prerendering:', err);
    process.exit(1);
  }
}

run();
