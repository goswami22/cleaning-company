$(document).ready(function(){
    $(window).scroll(function(){

        // navigaation scroll effect 
        if($(this).scrollTop()){
            $('.navbar').addClass('bg-traparant-scroll');
        }
        else
        {
            $('.navbar').removeClass('bg-traparant-scroll')
        }
    });

     // plan hover effect
    //  $('.plan-box').hover(function(){
    //     if($(this).css('background-color','red')){
    //         $
    //     }

    //  })
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})