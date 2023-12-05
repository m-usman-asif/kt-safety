$('#main-nav').stellarNav({
    theme:'dark',
    breakpoint: 1024,
    position: 'left',
    menuLabel: '',
    closeLabel: ''
});

$('.cartIcon').click(function(){
	$('header #cart-sidebar').toggleClass('active');
});

$(".closeCart").click(function(){
	$('#cart-sidebar').removeClass('active');
    // alert("closeCart")
});


//PRODUCT QUANTITY SELECT INPUT
$(document).ready(function(){
    $('.count').prop('disabled', false);
    $(document).on('click','.plus',function(){
        // console.log('abcdefg'); return false;
       $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) + 1 );
   });
    $(document).on('click','.minus',function(){
      $(this).siblings('.count').val(parseInt($(this).siblings('.count').val()) - 1 );
      if ($(this).siblings('.count').val() == 0) {
        $(this).siblings('.count').val(1);
        }
    });
});





$('.bannerSlider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.catgSlider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    center:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        385:{
            items:1,
            stagePadding: 50,
        },
        480:{
            items:1,
            stagePadding: 100,
        },
        767:{
            items:2
        },
        850:{
            items:3
        },
        1200: {
            items:4
        },
        1600: {
            items:5
        }
    }
})

$('.dealSlider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



// store page product carousel
$(document).ready(function() {

    $('.productCarousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            576:{
                items:2
            },
            1024: {
                items:2
            },
            1025:{
                items:3
            }
        }
    });

    // refresh owl carousel when tabs change
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        e.target // newly activated tab
        e.relatedTarget // previous active tab
        $(".owl-carousel").trigger('refresh.owl.carousel');
    });

});




// Product Detail Slider 

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 3; 
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: false,
        autoplay: true, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, 
            responsiveRefreshRate: 100,
            responsive:{
                0:{
                    items:2
                },
                480:{
                    items:3
                },
                768:{
                    items:4
                },
                992:{
                    items:3
                }
            }
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
       
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
      
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});



// isotope js script
$(document).ready(function () {
    $('.main-iso').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });
  
    $('.iso-nav ul li').click(function () {
        //ACTIVE CLASS
        $('.iso-nav ul li').removeClass('active');
        $(this).addClass('active');
  
        var selector = $(this).attr('data-filter');
            $('.main-iso').isotope({
                filter: selector
        });
        return false;
    })
})
  

// Video script

// const video = document.getElementById("video");
// const circlePlayButton = document.getElementById("circle-play-b");

// function togglePlay() {
// 	if (video.paused || video.ended) {
// 		video.play();
// 	} else {
// 		video.pause();
// 	}
// }

// circlePlayButton.addEventListener("click", togglePlay);
// video.addEventListener("playing", function () {
// 	circlePlayButton.style.opacity = 0;
// });
// video.addEventListener("pause", function () {
// 	circlePlayButton.style.opacity = 1;
// });


// Deal Timer Script



// let endDateElm = "28 Dec 2022 12:00 am";
// let countDownItem = Array.from(document.querySelectorAll('.count_down'))

// function countDown() {
//     let endDate = new Date(endDateElm);
//     let newDate = new Date();
//     let dateDiff = (endDate - newDate) / 1000
//     if (dateDiff > 0) {
//         let day = Math.floor(dateDiff / 3600 / 24)
//         let hour = Math.floor(dateDiff / 3600) % 24
//         let min = Math.floor(dateDiff / 60) % 60
//         let sec = Math.floor(dateDiff % 60)
//         countDownItem[0].textContent = day
//         countDownItem[1].textContent = hour
//         countDownItem[2].textContent = min
//         countDownItem[3].textContent = sec
//     } else {
//         clearInterval(stop)
//     }
// }
// let stop = setInterval(() => {
//     countDown();
// }, 1000);





