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

/**
 * Rename default "Posts" CPT to "Field Notes"
 */
function twothirds_rename_posts_to_field_notes() {
    global $menu;
    global $submenu;
    $menu[5][0] = 'Field Notes'; // Rename "Posts" to "Field Notes" in sidebar
    if ( isset( $submenu['edit.php'] ) ) {
        $submenu['edit.php'][5][0]  = 'All Field Notes';
        $submenu['edit.php'][10][0] = 'Add New';
    }
}
add_action( 'admin_menu', 'twothirds_rename_posts_to_field_notes' );

function twothirds_change_post_object_labels() {
    global $wp_post_types;
    if ( isset( $wp_post_types['post'] ) ) {
        $labels = &$wp_post_types['post']->labels;
        $labels->name               = 'Field Notes';
        $labels->singular_name      = 'Field Note';
        $labels->add_new            = 'Add New';
        $labels->add_new_item       = 'Add New Field Note';
        $labels->edit_item          = 'Edit Field Note';
        $labels->new_item           = 'New Field Note';
        $labels->view_item          = 'View Field Note';
        $labels->search_items       = 'Search Field Notes';
        $labels->not_found          = 'No field notes found';
        $labels->not_found_in_trash = 'No field notes found in Trash';
        $labels->all_items          = 'All Field Notes';
        $labels->menu_name          = 'Field Notes';
        $labels->name_admin_bar     = 'Field Note';
    }
}
add_action( 'init', 'twothirds_change_post_object_labels' );

/**
 * Set Permalink structure prefix to /field-notes/%postname%/
 */
function twothirds_set_blog_permalink_structure() {
    if ( get_option( 'permalink_structure' ) !== '/field-notes/%postname%/' ) {
        update_option( 'permalink_structure', '/field-notes/%postname%/' );
    }
    flush_rewrite_rules();
}
add_action( 'after_switch_theme', 'twothirds_set_blog_permalink_structure' );

/**
 * Register Impact Stories Custom Post Type
 */
function twothirds_register_impact_stories_cpt() {
    $labels = array(
        'name'               => _x( 'Impact Stories', 'post type general name' ),
        'singular_name'      => _x( 'Impact Story', 'post type singular name' ),
        'menu_name'          => _x( 'Impact Stories', 'admin menu' ),
        'name_admin_bar'     => _x( 'Impact Story', 'add new on admin bar' ),
        'add_new'            => _x( 'Add New', 'impact_story' ),
        'add_new_item'       => __( 'Add New Impact Story' ),
        'new_item'           => __( 'New Impact Story' ),
        'edit_item'          => __( 'Edit Impact Story' ),
        'view_item'          => __( 'View Impact Story' ),
        'all_items'          => __( 'All Impact Stories' ),
        'search_items'       => __( 'Search Impact Stories' ),
        'not_found'          => __( 'No impact stories found.' ),
        'not_found_in_trash' => __( 'No impact stories found in Trash.' )
    );

    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => false,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'impact-story' ),
        'capability_type'    => 'post',
        'has_archive'        => false,
        'hierarchical'       => false,
        'menu_position'      => 28,
        'menu_icon'          => 'dashicons-format-quote',
        'supports'           => array( 'title', 'editor', 'thumbnail', 'custom-fields' )
    );

    register_post_type( 'impact_story', $args );
}
add_action( 'init', 'twothirds_register_impact_stories_cpt' );

/**
 * Add Meta Box for Impact Story Details (Testimonials, designation, initials)
 */
function twothirds_post_details_meta_boxes() {
    add_meta_box(
        'post_details',
        __( 'Impact Story Details / Metadata' ),
        'twothirds_post_details_meta_box_callback',
        'impact_story', // Target impact stories instead of post
        'normal',
        'high'
    );
}
add_action( 'add_meta_boxes', 'twothirds_post_details_meta_boxes' );

function twothirds_post_details_meta_box_callback( $post ) {
    wp_nonce_field( 'twothirds_save_post_details_meta', 'twothirds_post_details_meta_nonce' );

    $quote = get_post_meta( $post->ID, 'impact_quote', true );
    $role = get_post_meta( $post->ID, 'author_role', true );
    $initials = get_post_meta( $post->ID, 'avatar_initials', true );

    echo '<table class="form-table">';
    echo '<tr>';
    echo '<th><label for="impact_quote">' . __( 'Highlight Quote' ) . '</label></th>';
    echo '<td><textarea id="impact_quote" name="impact_quote" rows="3" style="width: 100%;" placeholder="e.g. Understanding the shore means listening to those who live by its tides.">' . esc_textarea( $quote ) . '</textarea>';
    echo '<p class="description">Will display as a highlighted quote block or preview text in cards.</p></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="author_role">' . __( 'Author Role / Designation' ) . '</label></th>';
    echo '<td><input type="text" id="author_role" name="author_role" value="' . esc_attr( $role ) . '" class="regular-text" placeholder="e.g. Gram Fellow" /></td>';
    echo '</tr>';
    echo '<tr>';
    echo '<th><label for="avatar_initials">' . __( 'Author Initials' ) . '</label></th>';
    echo '<td><input type="text" id="avatar_initials" name="avatar_initials" value="' . esc_attr( $initials ) . '" class="small-text" maxlength="3" placeholder="e.g. AS" />';
    echo '<p class="description">Initials badge shown on hover or header profiles.</p></td>';
    echo '</tr>';
    echo '</table>';
}

function twothirds_save_post_details_meta( $post_id ) {
    if ( ! isset( $_POST['twothirds_post_details_meta_nonce'] ) || ! wp_verify_nonce( $_POST['twothirds_post_details_meta_nonce'], 'twothirds_save_post_details_meta' ) ) {
        return;
    }

    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
        return;
    }

    if ( ! current_user_can( 'edit_post', $post_id ) ) {
        return;
    }

    if ( isset( $_POST['impact_quote'] ) ) {
        update_post_meta( $post_id, 'impact_quote', sanitize_textarea_field( $_POST['impact_quote'] ) );
    }
    if ( isset( $_POST['author_role'] ) ) {
        update_post_meta( $post_id, 'author_role', sanitize_text_field( $_POST['author_role'] ) );
    }
    if ( isset( $_POST['avatar_initials'] ) ) {
        update_post_meta( $post_id, 'avatar_initials', sanitize_text_field( $_POST['avatar_initials'] ) );
    }
}
add_action( 'save_post', 'twothirds_save_post_details_meta' );

/**
 * Helper to safely get or create a category (available on both admin and front-end requests)
 */
function twothirds_get_or_create_category( $name ) {
    $term = get_term_by( 'name', $name, 'category' );
    if ( $term ) {
        return $term->term_id;
    }
    
    $inserted = wp_insert_term( $name, 'category' );
    if ( ! is_wp_error( $inserted ) && isset( $inserted['term_id'] ) ) {
        return $inserted['term_id'];
    }
    
    return 0;
}

/**
 * Automatically insert default blog posts on activation if they don't exist
 function twothirds_insert_default_posts() {
    // Create category safely for Field Notes
    $field_diaries_cat = twothirds_get_or_create_category( 'Field Diaries' );

    // 1. Insert Lukman's Field Note (standard post type)
    $field_note = array(
        'title'        => "Perumathura Days: A Gram Fellow's Exploration of a Coastal Village in Kerala",
        'name'         => 'perumathura-days',
        'excerpt'      => "IIT Gandhinagar Gram Fellow Lukman explores the peninsula of Perumathura, delving into coastal resilience, community networks, and the fisherfolk's place in the Kerala model of development.",
        'category_id'  => $field_diaries_cat,
        'content'      => "The last three weeks of 2023 marked a profoundly memorable period in my life, providing a remarkable conclusion to the year. As a Gram Fellow from IIT Gandhinagar, I had the privilege of residing in the enchanting coastal village of Perumathura, nestled in the Thiruvananthapuram district of Kerala, located 340 km away from my hometown during the winter break. While initially disheartened about missing out on spending the vacation with my family while my friends did, my time in Perumathura was so fulfilling that it mitigated the longing for my home and village. As an M.A. Society and Culture research student, I am particularly grateful for the invaluable ethnographic experience gained during this stint, made possible through the generosity of the remarkable individuals in this coastal haven. This blog recounts my journey, capturing the essence of my experiences during these weeks in Perumathura."
    );

    $fn_query = new WP_Query( array(
        'name'        => $field_note['name'],
        'post_type'   => 'post',
        'post_status' => 'any',
        'posts_per_page' => 1
    ) );
    if ( ! $fn_query->have_posts() ) {
        wp_insert_post( array(
            'post_title'   => $field_note['title'],
            'post_name'    => $field_note['name'],
            'post_content' => $field_note['content'],
            'post_excerpt' => $field_note['excerpt'],
            'post_status'  => 'publish',
            'post_type'    => 'post',
            'post_category' => array( $field_note['category_id'] )
        ) );
    }
    wp_reset_postdata();

    // 2. Insert Impact Stories (CPT 'impact_story')
    $default_stories = array(
        array(
            'title'        => "A New Light in the Classroom: How Educare Changed My Daughter's Future",
            'name'         => 'fathimas-story',
            'excerpt'      => "Fathima Beevi, a coir worker from Perumathura, speaks about the evening tuition center that helped her daughter excel in reading and arithmetic, changing her school path.",
            'quote'        => "Before the evening study center started, my daughter struggled with reading. Now she is the first in her class, and she wants to become a teacher herself.",
            'author_role'  => "Mother & Coir Worker",
            'avatar_initials' => "FB",
            'content'      => "Living in a coastal hamlet like Perumathura, work options for women are mostly limited to coir spinning or household work. Daily wages are small, and after a long day at the coir unit, it was hard for me to sit down and teach my children. We did not have proper desks, books, or tutors who could help my daughter, Amina, with her school homework. She was falling behind in school, struggling to read simple words in Malayalam and English.\n\nWhen the Two-Thirds Community Foundation opened the local evening Educare study center in our village, Amina started going every evening. The center provided shepherded support, textbooks, study materials, and enthusiastic mentors who taught in a friendly way. The change was visible in a matter of months."
        ),
        array(
            'title'        => "Navigating Safely: How the Safety Net Project Saved My Husband at Sea",
            'name'         => 'kunjumons-story',
            'excerpt'      => "Traditional fisherman Kunjumon shares how the safety training and first-aid kits provided by the Safety Net Project helped his crew manage a mid-sea engine crisis.",
            'quote'        => "When our boat engine failed 5 miles out, the first-aid training and communication protocols we learned saved our lives. We knew exactly who to call.",
            'author_role'  => "Traditional Fisherman",
            'avatar_initials' => "KM",
            'content'      => "For traditional fishermen in Perumathura, going out to sea is a gamble we play every day. While modern trawlers have advanced navigation and backup systems, our small fiberglass boats rely entirely on outboard engines and local weather knowledge. When something goes wrong mid-sea, help is miles away and communication is extremely difficult.\n\nA few months ago, the Two-Thirds Safety Net Project held a marine safety workshop in our ward. They distributed emergency first-aid kits and trained us in emergency protocols: how to administer CPR, handle minor injuries, signal for help, and coordinate rescue using simple mobile communication links."
        ),
        array(
            'title'        => "From Housewife to Cooperative Leader: The Penma Empowerment Journey",
            'name'         => 'shajithas-story',
            'excerpt'      => "Shajitha explains the journey of Penma Self-Help Group, which enabled coastal women to build their own local dry-fish value-addition brand.",
            'quote'        => "We never had our own savings. Today, through our value-addition center, 25 of us are financially independent and managing our own dry-fish brand.",
            'author_role'  => "President, Penma SHG",
            'avatar_initials' => "SJ",
            'content'      => "For generations, the women of Perumathura have been dependent on whatever income their husbands brought from the sea. When the catch was poor, families struggled to buy daily groceries. Coir weaving, our traditional livelihood, was declining, leaving almost no jobs for women in the village.\n\nThrough the Two-Thirds Women Empowerment initiative, we formed the Penma Self-Help Group. We began with basic savings circles and then started our own value-addition center for dry-fish production. Instead of selling the fish fresh at low market prices, we processed, dried, packaged, and branded the product ourselves."
        )
    );

    foreach ( $default_stories as $story ) {
        $story_query = new WP_Query( array(
            'name'        => $story['name'],
            'post_type'   => 'impact_story',
            'post_status' => 'any',
            'posts_per_page' => 1
        ) );
        
        if ( ! $story_query->have_posts() ) {
            $post_id = wp_insert_post( array(
                'post_title'   => $story['title'],
                'post_name'    => $story['name'],
                'post_content' => $story['content'],
                'post_excerpt' => $story['excerpt'],
                'post_status'  => 'publish',
                'post_type'    => 'impact_story'
            ) );
            
            if ( $post_id && ! is_wp_error( $post_id ) ) {
                update_post_meta( $post_id, 'impact_quote', $story['quote'] );
                update_post_meta( $post_id, 'author_role', $story['author_role'] );
                update_post_meta( $post_id, 'avatar_initials', $story['avatar_initials'] );
            }
        }
        wp_reset_postdata();
    }
}
add_action( 'init', 'twothirds_insert_default_posts', 40 );
?>
