import _ from 'lodash';
import './style.css';
import Logo from './tmt_logo_small.png';

function component() {

    var element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    
    // Add the image to our existing div
    var logo = new Image();
    logo.src = Logo;
    
    element.appendChild(logo);

    return element;
}

document.body.appendChild(component());