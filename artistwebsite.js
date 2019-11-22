var body = document.querySelector("body");
var pageLinkList = ["https://google.com", "dougrosman.com", "crouton.net"];
var investigated = false;
var cyclePages = false;

    // var pageLinkList = [
    //     [65, "google.com"],
    //     [70, "dougrosman.com"],
    //     ["crouton.net"];


body.addEventListener("keydown", function(e) {


        // load the page based on the URL
        // ?

        let myURL = pageLinkList[e.keyCode-90];

    // if nothing has been investigated, isInvestigated is false;
    if(cyclePages && e.keyCode === 90){

        window.location.href=myURL;

    }

    if(!investigated && e.keyCode === 90){

        cyclePages = true;
        investigated = !investigated;
        console.log("i have just been investigated");

    }

    
  

    console.log("");
        // if(isInvestigated && e.keyCode == 65)
        // {
        //     window.location.href = myURL;
        // }
        
        // if(isInvestigated == false)
        // {
        //     // pop a window out
        //     isInvestigated = !isInvestigated;
        //     console.log("i've just been investigated!");
        // }

        /////

});







// function keyCode(event) {
//     var x = event.keyCode;
//     if (x == 65) {
//       window.location.href="https://github.com/nemakki/gametest";
//     }
//   }

//   $(document).keydown(function(e){
//     if (e.keyCode==65)
//         $("body").append("<p>ctrl+z detected!</p>");
//     });