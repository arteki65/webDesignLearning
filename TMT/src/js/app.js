// vendors
import 'normalize.css';
import './../css/grid.css';

// fonts
import './../css/fonts/lato.css';

// styles
import './../css/style.less';
import './../css/header.less';
import './../css/components.less';
import './../css/nav.less';

// js vendors
const $ = require('jquery');
require('waypoints/lib/jquery.waypoints.min.js');

// js
import stickyNavToogle from './stickyNavToogle';
import smoothScrolling from './smoothScrolling';

$(document).ready(() => {
    smoothScrolling(500);
    
    stickyNavToogle();
});