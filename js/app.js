$( document ).ready(function() {
    console.log("Hello there.");
    $('html').removeClass('no-js');
    document.getElementById('smallscreen-menu-checkbox').checked = false;

    // handle hamburger menu icon transformation
    const hbIcon = document.getElementById('smallscreen-menu-icon'),
        checkbox = document.getElementById('smallscreen-menu-checkbox');
    // add class when the checkbox is checked
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            // add class for open menu
            $('#smallscreen-menu-icon').addClass('menu-open');
            // adjust height of nav menu
            $('#site-nav').height( $('body').height() );
        } else {
            // remove class for open menu
            $('#smallscreen-menu-icon').removeClass('menu-open');
            $('#site-nav').height( 'auto' );
        }
        //checkbox.checked = false;
    });

});