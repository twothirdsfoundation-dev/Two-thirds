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

/**
 * Filter the script tag to add type="module" for Vite's ES module enqueuing.
 */
function twothirds_add_module_to_script( $tag, $handle, $src ) {
    if ( 'twothirds-js' === $handle ) {
        $tag = '<script type="module" src="' . esc_url( $src ) . '" id="twothirds-js-js"></script>';
    }
    return $tag;
}
add_filter( 'script_loader_tag', 'twothirds_add_module_to_script', 10, 3 );

/**
 * Register Team Members Custom Post Type
 */
function twothirds_register_team_cpt() {
    $labels = array(
        'name'               => _x( 'Our Team', 'post type general name' ),
        'singular_name'      => _x( 'Team Member', 'post type singular name' ),
        'menu_name'          => _x( 'Our Team', 'admin menu' ),
        'name_admin_bar'     => _x( 'Team Member', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New', 'team member' ),
        'add_new_item'       => __( 'Add New Team Member' ),
        'new_item'           => __( 'New Team Member' ),
        'edit_item'          => __( 'Edit Team Member' ),
        'view_item'          => __( 'View Team Member' ),
        'all_items'          => __( 'All Team Members' ),
        'search_items'       => __( 'Search Team Members' ),
        'not_found'          => __( 'No team members found.' ),
        'not_found_in_trash' => __( 'No team members found in Trash.' )
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'team-member' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 26,
        'menu_icon'          => 'dashicons-groups',
        'supports'           => array( 'title', 'thumbnail' )
    );

    register_post_type( 'team_member', $args );
}
add_action( 'init', 'twothirds_register_team_cpt' );
?>
