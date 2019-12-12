var body = document.querySelector("body");
// var pageLinkList = ["https://google.com", "dougrosman.com", "crouton.net"];
// var investigated = false;
// var cyclePages = false;

    // var pageLinkList = [
    //     [65, "google.com"],
    //     [70, "dougrosman.com"],
    //     ["crouton.net"];


// body.addEventListener("keydown", function(e) {


        // load the page based on the URL
        // ?

        // let myURL = pageLinkList[e.keyCode-90];

    // if nothing has been investigated, isInvestigated is false;

    // document.body.addEventListener("keydown", myFunction);
    // function myFunction(){
    // if( e.keyCode === 65){

    //     window.location.href="google.com";

    // }}

    // if(!investigated && e.keyCode === 90){

    //     cyclePages = true;
    //     investigated = !investigated;
    //     console.log("i have just been investigated");

    // }


    
  


        // if(e.keyCode === 65)
        // {
        //     window.location.href = "google.com";
        // }


        







//      $(document).on('keydown',function keyCode(event) {
//     var x = event.keyCode;
//     if (x == 65) {
//       window.location.href="https://google.com";
//     }
//   });

  $(document).keydown(function(e){
    if (e.keyCode==65)
        window.location.href="front.html";
    });

    $(document).keydown(function(e){
        if (e.keyCode==66)
            window.location.href="mainsite.html";
        });

        $(document).keydown(function(e){
            if (e.keyCode==67)
                window.location.href="artistwebsite.html";
            });
// document.addEventListener("keydown", function (event) {

//     var handled = false;
//     if (event.key !== undefined) {
//       // Handle the event with KeyboardEvent.key and set handled true.
//     } else if (event.keyCode !== undefined) {
//       // Handle the event with KeyboardEvent.keyCode and set handled true.
//     }
  
//     if (handled) {
//       // Suppress "double action" if event handled
//       event.preventDefault();
//     }
//   }, true);