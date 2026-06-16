<?php
/**
 * Functions and definitions for Two-Thirds Community Foundation theme
 */

function twothirds_theme_setup() {
    // Add support for document title tag
    add_theme_support( 'title-tag' );
    
    // Add support for post thumbnails / featured images
    add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'twothirds_theme_setup' );

function twothirds_theme_scripts() {
    // Enqueue main stylesheet compiled by Vite
    wp_enqueue_style( 
        'twothirds-styles', 
        get_template_directory_uri() . '/assets/index.css', 
        array(), 
        '1.0.0' 
    );
    
    // Enqueue main script compiled by Vite
    wp_enqueue_script( 
        'twothirds-js', 
        get_template_directory_uri() . '/assets/index.js', 
        array(), 
        '1.0.0', 
        true 
    );
    
    // Pass the theme directory URI to the React app for asset resolution
    wp_localize_script( 
        'twothirds-js', 
        'wpTheme', 
        array(
            'themeUrl' => get_template_directory_uri()
        ) 
    );
}
add_action( 'wp_enqueue_scripts', 'twothirds_theme_scripts' );
?>
