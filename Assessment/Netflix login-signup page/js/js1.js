function btn(){
    var b1 = document.getElementById("first-acc");
    var b2 = document.getElementById("second-acc");
    var b3 = document.getElementById("third-acc");
    var b4 = document.getElementById("fourth-acc");
    var b5 = document.getElementById("fifth-acc");
    var b6 = document.getElementById("sixth-acc");

    if( b1.checked == true){
        document.getElementById("span1").style.transform = "rotate(90deg)" 
    } else {
        document.getElementById("span1").style.transform = "rotate(45deg)"
    }


    if( b2.checked == true){
        document.getElementById("span2").style.transform = "rotate(90deg)" 
    } else {
        document.getElementById("span2").style.transform = "rotate(45deg)"
    }


    if( b3.checked == true){
        document.getElementById("span3").style.transform = "rotate(90deg)" 
    } else {
        document.getElementById("span3").style.transform = "rotate(45deg)"
    }


    if( b4.checked == true){
        document.getElementById("span4").style.transform = "rotate(90deg)" 
    } else {
        document.getElementById("span4").style.transform = "rotate(45deg)"
    }


    if( b5.checked == true){
        document.getElementById("span5").style.transform = "rotate(90deg)" 
    } else {
        document.getElementById("span5").style.transform = "rotate(45deg)"
    }


    if( b6.checked == true){
        document.getElementById("span6").style.transform = "rotate(90deg)" 
    } else {
        document.getElementById("span6").style.transform = "rotate(45deg)"
    }
    
}