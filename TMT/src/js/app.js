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