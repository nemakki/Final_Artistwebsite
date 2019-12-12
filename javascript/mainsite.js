/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.gototop').fadeIn();
    } else {
        $('.gototop').fadeOut();
    }
});
$(document).ready(function() {
    $(".gototop").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/


const toggleMode = document.querySelector('input[type= "checkbox"]');

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('color-mode', 'dark');
    }
    else {
        document.documentElement.setAttribute('color-mode', 'light');
    }    
}

toggleMode.addEventListener('change', switchMode, false);




// function mousein() {
//     console.log('dbhjdf');
//     }
//     function mouseout() {
//     console.log('sfjadsfn');
//     }


var collapse = true;

function toggleSidebar() {
    if (collapse) {
        console.log('opening sidebar');
        document.getElementById('sidebar').style.width = '15vw';
        document.getElementById('sidebar').style.height = '100vh';
        this.collapse = false;
    } else {
        console.log('closing sidebar');
        document.getElementById('sidebar').style.width = '5vw';
        document.getElementById('sidebar').style.height = '5vw';
        this.collapse = true;
 }
}

function show(shown, hidden) {
    document.getElementById(shown).style.display='block';
    document.getElementById(hidden).style.display='none';
    return false;
}




$(".header").click(function(){
    $(".header").addClass("animated");
    setTimeout(function(){ 
        window.location.href = "front.html";
    
    }, 1000);

})

$(".headerimg").click(function(){
    $(".headerimg").addClass("animated");
})

// document.querySelector(".header").onclick = function(){

//      setTimeout(function(){ 
//          $(".header").addClass("animated");
//          window.location.href = "front.html";
    
//      }, 1000);
// };


// function handler(e) {
//     e = e || window.event;

//     var pageX = e.pageX;
//     var pageY = e.pageY;

//     // IE 8
//     if (pageX === undefined) {
//         pageX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
//         pageY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
//     }

//     console.log(pageX, pageY);
// }
// if (document.attachEvent) document.attachEvent('onclick', handler);
// else document.addEventListener('click', handler);



//   function getMouseXY(e) {
//       var mouseX = e.clientX;
//       var mouseY = e.clientY;
//       console.log (mouseX, mouseY);
 
//     }  



// var $digitalDrawings = $('.digitalDrawings')
// function moveDigitalDrawings(e) {
// TweenLite.to($digitalDrawings, 0.3, {
//     css: {
//     left: e.pageX,
//     top: e.pageY
//     }
// });
// }

// $("body").on('mousemove', moveDigitalDrawings);

let root = document.documentElement;

// float x;
// float y;
// float easing = 0.05;

// void setup() {
//   size(640, 360); 
//   noStroke();  
// }

// void draw() { 
//   background(51);
  
//   float targetX = mouseX;
//   float dx = targetX - x;
//   x += dx * easing;
  
//   float targetY = mouseY;
//   float dy = targetY - y;
//   y += dy * easing;
  
//   ellipse(x, y, 66, 66);
// }
var x = 0.0;
var y = 0.0;
var myMouseX;
var myMouseY;


root.addEventListener("mousemove", e => {

    myMouseX = e.clientX;
    myMouseY = e.clientY;

    // root.style.setProperty('--mouse-x', e.clientX/16 + "rem");
    // root.style.setProperty('--mouse-y', e.clientY/16 + "rem");
  });


setInterval(e => {
    let easing = 0.1;


    let targetX = myMouseX;
    let dx = targetX - x;
    x+=dx*easing;
    
    let targetY = myMouseY;
    let dy = targetY - y;
    y+=dx*easing;

    root.style.setProperty('--mouse-x', x + "px");
   root.style.setProperty('--mouse-y', y + "px");
}, 20);



console.log()