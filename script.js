/**
 * Function to get the picture of the day, using NASA's API
 */
function getPictureOfTheDay(){
    $.getJSON("https://api.nasa.gov/planetary/apod?api_key=cahfmjH52VpP3NcB736fPQzIw0PYS8sGSd4N0Idv", showdata = function(data){

        // Getting the title of the picture
        var title = data.title;
        // Getting the picture
        var video = data.url;
        //Getting the explanation from the JSON object as String
        var explanation = data.explanation;
        // Getting the date from the JSON object as String
        var date = data.date;

        $(".title").text(title);     
        $(".video").attr("src", video); 
        $(".explanation").text(explanation);
        $(".date").text(date);
    });
    }