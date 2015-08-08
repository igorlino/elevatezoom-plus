$(function () {

    initEZPlus();

    //Triggered when window width is changed.
    $( window ).on( "resize", function() {
        var windowWidth = $( window ).width(), // get window width
            imgWidth = $( "#responsive_img").width(); // get image width
        //Init elevateZoom
        initEZPlus();
        //display status
        $( "#status" ).html("Status: Window resized!.");
        //display image and window width
        $( "#imgWidth" ).html("Image width: " + imgWidth + "px" + "<br />" + "Window width: " + windowWidth + "px");
    });

    function initEZPlus() {
        $("#responsive_img").ezPlus({
            responsive : true,
            scrollZoom : false,
            showLens: true,

            tint: true,
            tintColour: '#0F0',
            tintOpacity: 0.5,
            respond: [
                {
                    range: '600-799',
                    tintColour: '#F00',
                    zoomWindowHeight: 100,
                    zoomWindowWidth: 100
                },
                {
                    range: '800-1199',
                    tintColour: '#00F',
                    zoomWindowHeight: 200,
                    zoomWindowWidth: 200
                },
                {
                    range: '100-599',
                    enabled: false,
                    showLens: false
                }
            ]
        });
    }
});
