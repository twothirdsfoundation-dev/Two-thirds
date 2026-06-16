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
    
    <div id="root"></div>

    <?php wp_footer(); ?>
</body>
</html>
