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
        'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' )
    );

    register_post_type( 'team_member', $args );
}
add_action( 'init', 'twothirds_register_team_cpt' );

/**
 * Add Meta Boxes for Team Members Details
 */
function twothirds_team_member_meta_boxes() {
    add_meta_box(
        'team_member_details',
        __( 'Team Member Details' ),
        'twothirds_team_member_meta_box_callback',
        'team_member',
        'normal',
        'high'
    );
}
add_action( 'add_meta_boxes', 'twothirds_team_member_meta_boxes' );

// Callback function to render the meta box form in WP dashboard
function twothirds_team_member_meta_box_callback( $post ) {
    wp_nonce_field( 'twothirds_save_team_member_meta', 'twothirds_team_member_meta_nonce' );

    $role = get_post_meta( $post->ID, 'member_role', true );
    $bio = get_post_meta( $post->ID, 'member_bio', true );
    $initials = get_post_meta( $post->ID, 'member_initials', true );

    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="member_role">' . __( 'Role / Designation' ) . '</label></th>';
    echo '<td><input type="text" id="member_role" name="member_role" value="' . esc_attr( $role ) . '" class="regular-text" placeholder="e.g. Founder & Director" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="member_initials">' . __( 'Initials Badge' ) . '</label></th>';
    echo '<td><input type="text" id="member_initials" name="member_initials" value="' . esc_attr( $initials ) . '" class="small-text" maxlength="2" placeholder="e.g. AS" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="member_bio">' . __( 'Biography' ) . '</label></th>';
    echo '<td><textarea id="member_bio" name="member_bio" rows="4" style="width: 100%;" placeholder="Short bio about the member...">' . esc_textarea( $bio ) . '</textarea></td>';
    echo '</tr>';
    echo '</table>';
}

// Save the meta box values when the post is saved
function twothirds_save_team_member_meta( $post_id ) {
    if ( ! isset( $_POST['twothirds_team_member_meta_nonce'] ) || ! wp_verify_nonce( $_POST['twothirds_team_member_meta_nonce'], 'twothirds_save_team_member_meta' ) ) {
        return;
    }

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    if ( ! current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    if ( isset( $_POST['member_role'] ) ) {
        update_post_meta( $post_id, 'member_role', sanitize_text_field( $_POST['member_role'] ) );
    }
    if ( isset( $_POST['member_initials'] ) ) {
        update_post_meta( $post_id, 'member_initials', sanitize_text_field( $_POST['member_initials'] ) );
    }
    if ( isset( $_POST['member_bio'] ) ) {
        update_post_meta( $post_id, 'member_bio', sanitize_textarea_field( $_POST['member_bio'] ) );
    }
}
add_action( 'save_post', 'twothirds_save_team_member_meta' );

/**
 * Automatically insert default team members if they don't exist
 */
function twothirds_insert_default_team_members() {
    $default_members = array(
        array(
            'name'     => 'Ahmed Sajid',
            'role'     => 'Founder & Director',
            'bio'      => 'Professional Social Worker with years of field experience in coastal community organizing.',
            'initials' => 'AS'
        ),
        array(
            'name'     => 'Lijin Lowrence',
            'role'     => 'Director',
            'bio'      => 'Global technology professional based in the USA, managing international partnerships.',
            'initials' => 'LL'
        ),
        array(
            'name'     => 'Jaseemul Farhan',
            'role'     => 'Co-founder',
            'bio'      => 'PhD Scholar at Jamia Millia Islamia, leading research and advocacy projects.',
            'initials' => 'JF'
        ),
        array(
            'name'     => 'Khaleel Hamadan',
            'role'     => 'Member',
            'bio'      => 'Architect based in Turkey, advising on eco-friendly community infrastructure projects.',
            'initials' => 'KH'
        )
    );

    foreach ( $default_members as $member ) {
        // Query to check if a team member with this title already exists
        $query_args = array(
            'post_type'   => 'team_member',
            'title'       => $member['name'],
            'post_status' => 'any', // Checks draft, published, etc.
            'posts_per_page' => 1
        );
        $query = new WP_Query( $query_args );
        
        if ( ! $query->have_posts() ) {
            // Insert the post
            $post_id = wp_insert_post( array(
                'post_title'  => $member['name'],
                'post_status' => 'publish',
                'post_type'   => 'team_member'
            ) );
            
            if ( $post_id && ! is_wp_error( $post_id ) ) {
                update_post_meta( $post_id, 'member_role', $member['role'] );
                update_post_meta( $post_id, 'member_bio', $member['bio'] );
                update_post_meta( $post_id, 'member_initials', $member['initials'] );
            }
        }
        wp_reset_postdata();
    }
}
add_action( 'init', 'twothirds_insert_default_team_members', 30 );
?>
