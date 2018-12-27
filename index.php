<?php
/**
 * The main template file.
 */

?>

<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

    <?php the_title(); ?>

<?php endwhile; ?>

<?php get_footer(); ?>
