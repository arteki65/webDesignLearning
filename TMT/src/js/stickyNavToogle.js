export default () => {
    $('#about-us').waypoint((direction) => {
        if(direction === 'down') {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '43px'
    });
};