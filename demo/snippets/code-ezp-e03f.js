$(document).ready(function () {
    //initiate the plugin and pass the id of the div containing gallery images
    $("#zoom_03f").ezPlus({
        constrainType: "height",
        constrainSize: 274,
        zoomType: "lens",
        containLensZoom: true,
        gallery: 'gallery_01f',
        cursor: 'pointer',
        galleryActiveClass: "active"
    });

    //pass the images to Fancybox
    $("#zoom_03f").bind("click", function (e) {
        var ez = $('#zoom_03f').data('ezPlus');
        ez.closeAll();
        $.fancyboxPlus(ez.getGalleryList());

        return false;
    });

});
