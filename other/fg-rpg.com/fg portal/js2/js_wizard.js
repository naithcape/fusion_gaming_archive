(function (window, $) {
    

    $(document).ready(function(){
        
        $(".menuToggler").click(function(){
            $(this).toggleClass("tgld");
            $(".menuOV").toggleClass("tgld");
            $(".menuWrapper").toggleClass("tgld");
            $("body").toggleClass("scrollLock");
        });
        
        $(document).scroll(function() {
            var y = $(this).scrollTop();
            if (y > 520) {
                $('.main-nav').addClass("scrolled");
            } else {
                $('.main-nav').removeClass("scrolled");
            }
        });
        
        var currentSlide = 1;
        setInterval(function(){
            currentSlide++;
            $(".slide").removeClass("tgld");
            $('.slide[data-slide="'+ currentSlide +'"]').addClass("tgld");
            $('.main-banner').attr("id","slide"+ currentSlide);
            if(currentSlide == 3){
                currentSlide = 0;
            }
        }, 10000);
        
        var ssiNum1 = $(".ssiNum1").attr("data-number");
        var i1 = math.floor(ssiNum1 / 2);
        var countInt1 = setInterval(function(){
            i1++;
            console.log(i1);
            $(".ssiNum1").text(i1);
            if(i1 >= ssiNum1){
                clearInterval(countInt1);
            }
        },10);
        
        var ssiNum2 = $(".ssiNum2").attr("data-number");
        var i2 = math.floor(ssiNum2 / 2);
        var countInt2 = setInterval(function(){
            i2++;
            console.log(i2);
            $(".ssiNum2").text(i2);
            if(i2 >= ssiNum2){
                clearInterval(countInt2);
            }
        },10);
        
        var ssiNum3 = $(".ssiNum3").attr("data-number");
        var i3 = math.floor(ssiNum3 / 2);
        var countInt3 = setInterval(function(){
            i3++;
            console.log(i3);
            $(".ssiNum3").text(i3);
            if(i3 >= ssiNum3){
                clearInterval(countInt3);
            }
        },10);

        var ssiNum4 = $(".ssiNum4").attr("data-number");
        var i4 = math.floor(ssiNum4 / 2);
        var countInt4 = setInterval(function(){
            i4++;
            console.log(i4);
            $(".ssiNum4").text(i4);
            if(i4 >= ssiNum4){
                clearInterval(countInt4);
            }
        },10);
        
    });

})(window, window.jQuery);