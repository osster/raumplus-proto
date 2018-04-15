//= scripts/stickyHeader.js
//= scripts/smoothScrolling.js
//= scripts/topSlider.js
//= scripts/slidesetSlider.js
//= scripts/catalogSlider.js
//= scripts/overlayNav.js
//= scripts/themeSwitcher.js


$(document).ready(function() {
    $('#responsive').lightSlider({
        item:4,
        loop:false,
        slideMove:2,
        easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
        speed:600,
        responsive : [
            {
                breakpoint:800,
                settings: {
                    item:3,
                    slideMove:1,
                    slideMargin:6,
                }
            },
            {
                breakpoint:480,
                settings: {
                    item:2,
                    slideMove:1
                }
            }
        ],
        onSliderLoad: function() {
            $('.lightSlider').removeClass('cS-hidden');

            console.log('cS-hidden rem mdf+=');
        }
    });
});
