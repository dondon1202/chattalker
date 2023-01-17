//toggle
$(".all").click(function(){
    var x = $(this).siblings("p")
    //x=被點擊的兄弟階層p
        if( x.css("display") == "none"  ){
          x.slideDown(); 
          
        }else{
          x.slideUp();
        };
    });


    // $(".all").click(function(){
    //     $("img.plus").hide();
    //     $("img.minus").show();
    //     });


        var clicks = 2;
        let clickTimes = 0;
        // let clickAns = clickTimes==0;
        $('.all-1').click(function() {
            if (clickTimes === 0){
            // first click
                $("img.plus-1").hide();
                $("img.minus-1").show();
                $(".all-1 h6").addClass("question-title");
                clickTimes+=1;
            } else if(clickTimes === 1){
            // second click
                $("img.plus-1").show();
                $("img.minus-1").hide();
                $(".all-1 h6").removeClass("question-title");
                clickTimes-=1;
            }
            
        });
        $('.all-2').click(function() {
            if (clickTimes === 0){
            // first click
                $("img.plus-2").hide();
                $("img.minus-2").show();
                $(".all-2 h6").addClass("question-title");
                clickTimes+=1;
            } else if(clickTimes === 1){
            // second click
                $("img.plus-2").show();
                $("img.minus-2").hide();
                $(".all-2 h6").removeClass("question-title");
                clickTimes-=1;
            }
            
        });
        $('.all-3').click(function() {
            if (clickTimes === 0){
            // first click
                $("img.plus-3").hide();
                $("img.minus-3").show();
                $(".all-3 h6").addClass("question-title");
                clickTimes+=1;
            } else if(clickTimes === 1){
            // second click
                $("img.plus-3").show();
                $("img.minus-3").hide();
                $(".all-3 h6").removeClass("question-title");
                clickTimes-=1;
            }
            
        });


    