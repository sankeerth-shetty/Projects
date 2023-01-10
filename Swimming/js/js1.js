$(document).ready(function(){
    if($(window).width() < 992){
        $(".ib-t1").click(function(){
            $(".ib-t2").toggle(".ib-t2");
        });
        $(".ib-t2").hide();

        $(".ib-t3").click(function(){
            $(".ib-t4").toggle(".ib-t4");
        });
        $(".ib-t4").hide();

        $(".ib-t5").click(function(){
            $(".ib-t6").toggle(".ib-t6");
        });
        $(".ib-t6").hide();

        $(".ib-t7").click(function(){
            $(".ib-t8").toggle(".ib-t8");
        });
        $(".ib-t8").hide();
    }
    else{
        $(".ib-t1").ready(function(){
            $(".ib-t2").show(".ib-t2");
        });

        $(".ib-t3").ready(function(){
            $(".ib-t4").show(".ib-t4");
        });

        $(".ib-t5").ready(function(){
            $(".ib-t6").show(".ib-t6");
        });

        $(".ib-t7").ready(function(){
            $(".ib-t8").show(".ib-t8");
        });
    }
});

