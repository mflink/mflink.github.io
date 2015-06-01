$(document).ready(function () {
    $.fn.fullpage({
        'css3': true,
        'navigation': true,
        'fixedElements': '.navbar',
        'afterLoad': function(anchorLink, index){
            if(index == 1) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            }
        },

        'onLeave': function(index, direction){
            if ((index > 0 && direction == 'down')){
                //$('.navbar-fixed-top').eq(index -1).addClass('top-nav-collapse');
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        }
    });
});
