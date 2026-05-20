<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u663113707_blogs_impulse' );

/** Database username */
define( 'DB_USER', 'u663113707_imp_blogs' );

/** Database password */
define( 'DB_PASSWORD', 'eDse_.BD9HcdDi7' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '--]pp$upQ(I{8@eP8S?=]Y//J&0KXjK$Mcb7|i@f,4:g~CV)b%)OSD?du]]ve,(;' );
define( 'SECURE_AUTH_KEY',  'SjxQL:LElL[ |6pF1zQAU4==c*2Q=?.3LNsU()Qt*!BZ2z@yYmj_};>seL|P_TYx' );
define( 'LOGGED_IN_KEY',    '(;HKT0^hh&~4@0f{1u:Z_);raTb22F8Q|KVDF^[0I=3o$AMR$l^Q*sP7L~!UyyI$' );
define( 'NONCE_KEY',        ';GWRUw*cq~M)&TR8GMr*a-)(O;(XySY7vGG;(a*pU[{new=a.RbQ2o>^C}Njcr/t' );
define( 'AUTH_SALT',        'eVk`*sbzQE<L[gl|vJ=?G&`/{r3e9iOTL=hx.=%N8=68td.@0-~p[C+M[Erccl,T' );
define( 'SECURE_AUTH_SALT', '11*d]mHg~9jx4.rbSw1|s~4,~(n+GH6Gxs;TqH{IEHp*`~&%}^ji@YmB$+t{Wd$d' );
define( 'LOGGED_IN_SALT',   '@DX4J{|`Cbu-TCjuuqA1Gy#YV8b$_G#,>nu_n5<!.I(<v]<_?)do0h#J>Ncx^_/<' );
define( 'NONCE_SALT',       '&f-r?P*H] $*Q;M|i:m+Y+3p0v[j:`2O$ !(Z@ApC3P$dbXlb[eiT15&I_A+ibV,' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
