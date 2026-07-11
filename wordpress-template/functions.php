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

/**
 * Register Events Custom Post Type
 */
function twothirds_register_event_cpt() {
    $labels = array(
        'name'               => _x( 'Events', 'post type general name' ),
        'singular_name'      => _x( 'Event', 'post type singular name' ),
        'menu_name'          => _x( 'Events', 'admin menu' ),
        'name_admin_bar'     => _x( 'Event', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New', 'event' ),
        'add_new_item'       => __( 'Add New Event' ),
        'new_item'           => __( 'New Event' ),
        'edit_item'          => __( 'Edit Event' ),
        'view_item'          => __( 'View Event' ),
        'all_items'          => __( 'All Events' ),
        'search_items'       => __( 'Search Events' ),
        'not_found'          => __( 'No events found.' ),
        'not_found_in_trash' => __( 'No events found in Trash.' )
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'event' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 27,
        'menu_icon'          => 'dashicons-calendar-alt',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' )
    );

    register_post_type( 'event', $args );
}
add_action( 'init', 'twothirds_register_event_cpt' );

/**
 * Add Meta Boxes for Event Details
 */
function twothirds_event_meta_boxes() {
    add_meta_box(
        'event_details',
        __( 'Event Details' ),
        'twothirds_event_meta_box_callback',
        'event',
        'normal',
        'high'
    );
}
add_action( 'add_meta_boxes', 'twothirds_event_meta_boxes' );

// Callback function to render the meta box form in WP dashboard
function twothirds_event_meta_box_callback( $post ) {
    wp_nonce_field( 'twothirds_save_event_meta', 'twothirds_event_meta_nonce' );

    $date = get_post_meta( $post->ID, 'event_date', true );
    $time = get_post_meta( $post->ID, 'event_time', true );
    $location = get_post_meta( $post->ID, 'event_location', true );
    $link = get_post_meta( $post->ID, 'event_link', true );

    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="event_date">' . __( 'Event Date' ) . '</label></th>';
    echo '<td><input type="text" id="event_date" name="event_date" value="' . esc_attr( $date ) . '" class="regular-text" placeholder="e.g. July 24, 2026" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="event_time">' . __( 'Event Time / Duration' ) . '</label></th>';
    echo '<td><input type="text" id="event_time" name="event_time" value="' . esc_attr( $time ) . '" class="regular-text" placeholder="e.g. 07:30 AM - 11:30 AM" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="event_location">' . __( 'Location / Venue' ) . '</label></th>';
    echo '<td><input type="text" id="event_location" name="event_location" value="' . esc_attr( $location ) . '" class="regular-text" placeholder="e.g. Perumathura Estuary, Trivandrum" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="event_link">' . __( 'Registration / Details Link' ) . '</label></th>';
    echo '<td><input type="url" id="event_link" name="event_link" value="' . esc_url( $link ) . '" class="regular-text" placeholder="e.g. https://forms.gle/..." /></td>';
    echo '</tr>';
    echo '</table>';
}

// Save the meta box values when the post is saved
function twothirds_save_event_meta( $post_id ) {
    if ( ! isset( $_POST['twothirds_event_meta_nonce'] ) || ! wp_verify_nonce( $_POST['twothirds_event_meta_nonce'], 'twothirds_save_event_meta' ) ) {
        return;
    }

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    if ( ! current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    if ( isset( $_POST['event_date'] ) ) {
        update_post_meta( $post_id, 'event_date', sanitize_text_field( $_POST['event_date'] ) );
    }
    if ( isset( $_POST['event_time'] ) ) {
        update_post_meta( $post_id, 'event_time', sanitize_text_field( $_POST['event_time'] ) );
    }
    if ( isset( $_POST['event_location'] ) ) {
        update_post_meta( $post_id, 'event_location', sanitize_text_field( $_POST['event_location'] ) );
    }
    if ( isset( $_POST['event_link'] ) ) {
        update_post_meta( $post_id, 'event_link', esc_url_raw( $_POST['event_link'] ) );
    }
}
add_action( 'save_post', 'twothirds_save_event_meta' );

/**
 * Register Slack Webhook Settings Field in Settings -> General
 */
function twothirds_register_slack_settings() {
    register_setting( 'general', 'twothirds_slack_webhook_url', array(
        'type' => 'string',
        'sanitize_callback' => 'esc_url_raw',
        'default' => ''
    ) );
    
    add_settings_field(
        'twothirds_slack_webhook_url',
        'Slack Webhook URL for Events',
        'twothirds_slack_webhook_field_callback',
        'general',
        'default'
    );
}
add_action( 'admin_init', 'twothirds_register_slack_settings' );

function twothirds_slack_webhook_field_callback() {
    $url = get_option( 'twothirds_slack_webhook_url', '' );
    echo '<input type="url" name="twothirds_slack_webhook_url" value="' . esc_attr( $url ) . '" class="regular-text" placeholder="https://hooks.slack.com/services/..." />';
    echo '<p class="description">Newly published events in WordPress will automatically be announced to this Slack channel.</p>';
}

/**
 * Send Slack Announcement on Event Publish
 */
function twothirds_announce_event_to_slack( $new_status, $old_status, $post ) {
    if ( 'event' !== $post->post_type ) {
        return;
    }
    
    if ( 'publish' === $new_status && 'publish' !== $old_status ) {
        $date = get_post_meta( $post->ID, 'event_date', true );
        $time = get_post_meta( $post->ID, 'event_time', true );
        $location = get_post_meta( $post->ID, 'event_location', true );
        $link = get_post_meta( $post->ID, 'event_link', true );
        if ( empty( $link ) ) {
            $link = get_permalink( $post->ID );
        }
        
        $slack_webhook_url = get_option( 'twothirds_slack_webhook_url', '' );
        
        if ( ! empty( $slack_webhook_url ) && filter_var( $slack_webhook_url, FILTER_VALIDATE_URL ) ) {
            $title = $post->post_title;
            $excerpt = wp_strip_all_tags( $post->post_content );
            if ( strlen( $excerpt ) > 150 ) {
                $excerpt = substr( $excerpt, 0, 147 ) . '...';
            }
            
            $payload = array(
                'blocks' => array(
                    array(
                        'type' => 'header',
                        'text' => array(
                            'type' => 'plain_text',
                            'text' => '📢 New Two-Thirds Event Published!',
                            'emoji' => true
                        )
                    ),
                    array(
                        'type' => 'section',
                        'text' => array(
                            'type' => 'mrkdwn',
                            'text' => "*Title:* {$title}\n*Date & Time:* " . ( $date ? $date : 'TBD' ) . " | " . ( $time ? $time : 'TBD' ) . "\n*Location:* " . ( $location ? $location : 'TBD' )
                        )
                    ),
                    array(
                        'type' => 'section',
                        'text' => array(
                            'type' => 'mrkdwn',
                            'text' => $excerpt ? $excerpt : '_No description provided._'
                        )
                    ),
                    array(
                        'type' => 'actions',
                        'elements' => array(
                            array(
                                'type' => 'button',
                                'text' => array(
                                    'type' => 'plain_text',
                                    'text' => 'View / RSVP',
                                    'emoji' => true
                                ),
                                'url' => $link,
                                'action_id' => 'button-action'
                            )
                        )
                    )
                )
            );
            
            wp_remote_post( $slack_webhook_url, array(
                'headers'     => array( 'Content-Type' => 'application/json' ),
                'body'        => wp_json_encode( $payload ),
                'method'      => 'POST',
                'data_format' => 'body'
            ) );
        }
    }
}
add_action( 'transition_post_status', 'twothirds_announce_event_to_slack', 10, 3 );

/**
 * Automatically insert default events on activation if they don't exist
 */
function twothirds_insert_default_events() {
    $default_events = array(
        array(
            'title'        => 'Coastal Mangrove Planting & Conservation',
            'date'         => 'July 24, 2026',
            'time'         => '07:30 AM - 11:30 AM',
            'location'     => 'Perumathura Estuary, Trivandrum',
            'description'  => 'Join hands with local traditional fisherfolk to plant mangrove saplings along the estuary, helping rebuild coastal defense lines and support local marine nurseries.',
            'link'         => ''
        ),
        array(
            'title'        => 'Penma Solar Dry-Fish Value Addition Workshop',
            'date'         => 'August 12, 2026',
            'time'         => '10:00 AM - 02:00 PM',
            'location'     => 'Women Cooperative Center, Ward 5',
            'description'  => 'A shepherded training and demonstration workshop led by the Penma SHG on solar drying tech, packaging standards, and direct cooperative market links.',
            'link'         => ''
        ),
        array(
            'title'        => 'Educare Center Evening Tutor Interactive Session',
            'date'         => 'September 05, 2026',
            'time'         => '04:30 PM - 06:30 PM',
            'location'     => 'Supplementary Study Center, Perumathura',
            'description'  => 'Interactive session bringing together teachers, parent representatives, and volunteers to align curricula with school boards and celebrate reading accomplishments.',
            'link'         => ''
        )
    );

    foreach ( $default_events as $event ) {
        $query_args = array(
            'post_type'   => 'event',
            'title'       => $event['title'],
            'post_status' => 'any',
            'posts_per_page' => 1
        );
        $query = new WP_Query( $query_args );
        
        if ( ! $query->have_posts() ) {
            $post_id = wp_insert_post( array(
                'post_title'   => $event['title'],
                'post_content' => $event['description'],
                'post_status'  => 'publish',
                'post_type'    => 'event'
            ) );
            
            if ( $post_id && ! is_wp_error( $post_id ) ) {
                update_post_meta( $post_id, 'event_date', $event['date'] );
                update_post_meta( $post_id, 'event_time', $event['time'] );
                update_post_meta( $post_id, 'event_location', $event['location'] );
                update_post_meta( $post_id, 'event_link', $event['link'] );
            }
        }
        wp_reset_postdata();
    }
}
add_action( 'init', 'twothirds_insert_default_events', 30 );
?>
