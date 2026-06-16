import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const templateDir = path.join(__dirname, 'wordpress-template');

console.log('Packaging WordPress theme...');

// 1. Copy WordPress theme files to dist
const filesToCopy = ['style.css', 'index.php', 'functions.php'];
filesToCopy.forEach(file => {
  const src = path.join(templateDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to dist/`);
  } else {
    console.warn(`Warning: Template file ${file} not found!`);
  }
});

// 2. Find assets/index.js in dist and process it
const assetsDir = path.join(distDir, 'assets');
if (fs.existsSync(assetsDir)) {
  const files = fs.readdirSync(assetsDir);
  const jsFile = files.find(file => file.endsWith('.js'));
  
  if (jsFile) {
    const jsPath = path.join(assetsDir, jsFile);
    let code = fs.readFileSync(jsPath, 'utf8');
    
    // Replace absolute relative "/assets/" references (in template literals) with dynamic ones
    let replaced = false;
    
    // Template literal backtick check
    const originalRefBacktick = '`/assets/';
    const updatedRefBacktick = '`${window.wpTheme?window.wpTheme.themeUrl:""}/assets/';
    if (code.includes(originalRefBacktick)) {
      code = code.split(originalRefBacktick).join(updatedRefBacktick);
      replaced = true;
    }
    
    // Double quotes check
    const originalRef = '"/assets/';
    const updatedRef = '((window.wpTheme?window.wpTheme.themeUrl:"")+"/assets/")';
    if (code.includes(originalRef)) {
      code = code.split(originalRef).join(updatedRef);
      replaced = true;
    }
    
    // Single quotes check
    const originalRefSingle = "'/assets/";
    const updatedRefSingle = "((window.wpTheme?window.wpTheme.themeUrl:'')+'/assets/')";
    if (code.includes(originalRefSingle)) {
      code = code.split(originalRefSingle).join(updatedRefSingle);
      replaced = true;
    }
    
    if (replaced) {
      fs.writeFileSync(jsPath, code, 'utf8');
      console.log(`Successfully replaced asset path prefixes in ${jsFile}`);
    } else {
      console.log(`Notice: No raw "/assets/" prefix strings found in ${jsFile}.`);
    }
  } else {
    console.error('Error: No compiled JS file found in dist/assets!');
  }
} else {
  console.error('Error: dist/assets directory not found!');
}

console.log('WordPress theme packaging complete!');
