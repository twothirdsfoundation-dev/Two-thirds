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

    // Read index.php from template as the base markup
    const templateIndexPhpPath = path.join(templateDir, 'index.php');
    if (!fs.existsSync(templateIndexPhpPath)) {
      throw new Error(`Template index.php not found at ${templateIndexPhpPath}`);
    }
    const indexPhpContent = fs.readFileSync(templateIndexPhpPath, 'utf8');
    const rootPlaceholder = '<div id="root"></div>';
    if (!indexPhpContent.includes(rootPlaceholder)) {
      throw new Error('Placeholder <div id="root"></div> not found in template index.php!');
    }

    // Define all the pages/templates we want to pre-render
    const pages = [
      { view: 'home', templateName: null, filename: 'index.php' },
      { view: 'about-us', templateName: 'About Us Page', filename: 'page-about-us.php' },
      { view: 'educare', templateName: 'Educare Page', filename: 'page-educare.php' },
      { view: 'environment', templateName: 'Environment Page', filename: 'page-environment.php' },
      { view: 'internships', templateName: 'Internships Page', filename: 'page-internships.php' },
      { view: 'women-empowerment', templateName: 'Women\'s Empowerment Page', filename: 'page-women-empowerment.php' },
      { view: 'financials', templateName: 'Budgets and Audits Page', filename: 'page-financials.php' },
    ];

    const wpAssetPathPrefix = '<?php echo get_template_directory_uri(); ?>/assets/';

    for (const page of pages) {
      console.log(`Rendering App component for view "${page.view}"...`);
      const html = renderToString(React.createElement(App, { initialView: page.view }));
      console.log(`Rendered HTML length for ${page.view}: ${html.length} chars.`);

      // Replace absolute relative "/assets/" in HTML with WordPress dynamic theme paths
      let phpMarkup = html;
      phpMarkup = phpMarkup.split('"/assets/').join('"' + wpAssetPathPrefix);
      phpMarkup = phpMarkup.split("'/assets/").join("'" + wpAssetPathPrefix);
      phpMarkup = phpMarkup.split('url(/assets/').join('url(' + wpAssetPathPrefix);
      phpMarkup = phpMarkup.split('url("/assets/').join('url("' + wpAssetPathPrefix);
      phpMarkup = phpMarkup.split("url('/assets/").join("url('" + wpAssetPathPrefix);

      // Insert pre-rendered HTML into base template markup
      let fileContent = indexPhpContent.replace(
        rootPlaceholder,
        `<div id="root">${phpMarkup}</div>`
      );

      // If it is a custom page template, add the Template Name comment header at the top
      if (page.templateName) {
        const templateHeader = `<?php
/**
 * Template Name: ${page.templateName}
 */
?>
`;
        fileContent = templateHeader + fileContent;
      }

      const destPath = path.join(distDir, page.filename);
      fs.writeFileSync(destPath, fileContent, 'utf8');
      console.log(`Successfully generated template ${destPath}`);
    }

    // Also generate a generic page.php with empty root div so any other page created will render cleanly in React client
    let genericPageContent = indexPhpContent;
    genericPageContent = genericPageContent.split('"/assets/').join('"' + wpAssetPathPrefix);
    genericPageContent = genericPageContent.split("'/assets/").join("'" + wpAssetPathPrefix);
    genericPageContent = genericPageContent.split('url(/assets/').join('url(' + wpAssetPathPrefix);
    genericPageContent = genericPageContent.split('url("/assets/').join('url("' + wpAssetPathPrefix);
    genericPageContent = genericPageContent.split("url('/assets/").join("url('" + wpAssetPathPrefix);

    const destPagePhpPath = path.join(distDir, 'page.php');
    fs.writeFileSync(destPagePhpPath, genericPageContent, 'utf8');
    console.log(`Successfully generated generic page.php template at ${destPagePhpPath}`);

    // Update dist/index.html (static preview file) for completeness using the home view html
    const homeHtml = renderToString(React.createElement(App, { initialView: 'home' }));
    const destIndexHtmlPath = path.join(distDir, 'index.html');
    if (fs.existsSync(destIndexHtmlPath)) {
      let indexHtmlContent = fs.readFileSync(destIndexHtmlPath, 'utf8');
      if (indexHtmlContent.includes(rootPlaceholder)) {
        const updatedIndexHtml = indexHtmlContent.replace(
          rootPlaceholder,
          `<div id="root">${homeHtml}</div>`
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
