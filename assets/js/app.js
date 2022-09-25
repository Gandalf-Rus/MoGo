$(function() {

    const header = $("#header")
    const introH = $("#intro").innerHeight();
    let scrollOffSet = $(globalThis).scrollTop();


    /* Fixed Header */
    const checkScorll = (scrollOffSet) => {
        if(scrollOffSet >= introH) {
            header.addClass("fixed")
        } 
        else {
            header.removeClass("fixed")
        }
    }

    checkScorll(scrollOffSet);

    $(globalThis).on("scroll", function() {

        scrollOffSet = $(this).scrollTop();
        checkScorll(scrollOffSet);

    });


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this),
              blockId = $(this).data("scroll"),
              blockOffSet = $(blockId).offset().top - 20;

        $("nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate ({
            scrollTop: blockOffSet
        }, 500);
    });


    /* Menu nav toggle */
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav_toggle").toggleClass("active");

    });


    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        const $this = $(this),
              blockId = $(this).data("collapse");
        
        $this.toggleClass("active");
    });


    /* Slider */
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

});