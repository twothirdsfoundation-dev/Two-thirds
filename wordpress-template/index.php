<?php
/**
 * Main template file for Two-Thirds Community Foundation theme
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class('min-h-screen bg-[#FAF9F6] text-[#1A2D37] font-sans antialiased'); ?>>
    <?php wp_body_open(); ?>
    
    <script>
    window.wpPosts = [
        <?php
        $args = array('post_type' => 'post', 'posts_per_page' => -1, 'post_status' => 'publish');
        $query = new WP_Query($args);
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $post_data = array(
                    'id' => strval(get_the_ID()),
                    'slug' => basename(get_permalink()),
                    'title' => get_the_title(),
                    'excerpt' => get_the_excerpt(),
                    'content' => array(wp_strip_all_tags(get_the_content())),
                    'date' => get_the_date('M j, Y'),
                    'author' => get_the_author(),
                    'readTime' => '5 min read',
                    'image' => get_the_post_thumbnail_url(get_the_ID(), 'full') ?: '',
                    'category' => 'Field Diaries'
                );
                echo json_encode($post_data) . ',';
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    ];

    window.wpImpactStories = [
        <?php
        $args = array('post_type' => 'impact_story', 'posts_per_page' => -1, 'post_status' => 'publish');
        $query = new WP_Query($args);
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $quote = get_post_meta(get_the_ID(), 'impact_quote', true) ?: get_the_excerpt();
                $author_role = get_post_meta(get_the_ID(), 'author_role', true) ?: 'Community Member';
                $avatar_initials = get_post_meta(get_the_ID(), 'avatar_initials', true) ?: substr(get_the_title(), 0, 2);
                
                $story_data = array(
                    'id' => strval(get_the_ID()),
                    'slug' => basename(get_permalink()),
                    'title' => get_the_title(),
                    'excerpt' => get_the_excerpt(),
                    'content' => array(wp_strip_all_tags(get_the_content())),
                    'date' => get_the_date('M j, Y'),
                    'author' => get_the_title(),
                    'readTime' => '5 min read',
                    'image' => get_the_post_thumbnail_url(get_the_ID(), 'full') ?: '',
                    'category' => 'Impact Stories',
                    'quote' => $quote,
                    'authorRole' => $author_role,
                    'avatarInitials' => $avatar_initials
                );
                echo json_encode($story_data) . ',';
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    ];
    
    window.wpTeamMembers = [
        <?php
        $args = array('post_type' => 'team_member', 'posts_per_page' => -1);
        $query = new WP_Query($args);
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $role = get_post_meta(get_the_ID(), 'member_role', true) ?: 'Team Member';
                $bio = get_post_meta(get_the_ID(), 'member_bio', true) ?: '';
                $initials = get_post_meta(get_the_ID(), 'member_initials', true) ?: substr(get_the_title(), 0, 2);
                
                $member_data = array(
                    'name' => get_the_title(),
                    'role' => $role,
                    'bio' => $bio,
                    'initials' => $initials,
                    'image' => get_the_post_thumbnail_url(get_the_ID(), 'full') ?: ''
                );
                echo json_encode($member_data) . ',';
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    ];

    window.wpEvents = [
        <?php
        $args = array('post_type' => 'event', 'posts_per_page' => -1, 'post_status' => 'publish');
        $query = new WP_Query($args);
        if ($query->have_posts()) :
            while ($query->have_posts()) : $query->the_post();
                $date = get_post_meta(get_the_ID(), 'event_date', true) ?: '';
                $time = get_post_meta(get_the_ID(), 'event_time', true) ?: '';
                $location = get_post_meta(get_the_ID(), 'event_location', true) ?: '';
                $link = get_post_meta(get_the_ID(), 'event_link', true) ?: '';
                
                $event_data = array(
                    'id' => strval(get_the_ID()),
                    'title' => get_the_title(),
                    'description' => wp_strip_all_tags(get_the_content()),
                    'date' => $date,
                    'time' => $time,
                    'location' => $location,
                    'link' => $link ?: get_permalink(),
                    'image' => get_the_post_thumbnail_url(get_the_ID(), 'full') ?: ''
                );
                echo json_encode($event_data) . ',';
            endwhile;
            wp_reset_postdata();
        endif;
        ?>
    ];
    </script>

    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
