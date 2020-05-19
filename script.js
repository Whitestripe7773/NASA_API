/**
 * Function to get the picture of the day, using NASA's API
 */
function getPictureOfTheDay(){
    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=cahfmjH52VpP3NcB736fPQzIw0PYS8sGSd4N0Idv", showdata = function(data){

        var generate = document.getElementById("generate-here");
        var htmlGenerated = '<div class="iframe-container"><iframe class="video" frameborder="0" allowfullscreen></iframe></div>';

        // Getting the title of the picture
        var title = data.title;
        // Getting the picture/Video
        var picvid = data.url;
        //Getting the explanation from the JSON object as String
        var explanation = data.explanation;
        // Getting the date from the JSON object as String
        var date = data.date;

        $(".title").text(title);     
        if (picvid.includes("youtube")){
            generate.innerHTML = htmlGenerated;
            $(".video").attr("src", picvid); 
        }
        else{
            $(".picture").attr("src", picvid); 
        }
        $(".explanation").text(explanation);
        $(".date").text(date);
    });
}