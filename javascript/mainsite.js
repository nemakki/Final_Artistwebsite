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
        document.getElementById('sidebar').style.height = 'auto';
        this.collapse = false;
    } else {
        console.log('closing sidebar');
        document.getElementById('sidebar').style.width = '5vw';
        document.getElementById('sidebar').style.height = '5vw';
        this.collapse = true;
 }
}