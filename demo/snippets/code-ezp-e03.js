//initiate the plugin and pass the id of the div containing gallery images
$('#zoom_03').ezPlus({
    gallery: 'gallery_01', cursor: 'pointer', galleryActiveClass: 'active',
    imageCrossfade: true, loadingIcon: 'https://www.elevateweb.co.uk/spinner.gif'
});

//pass the images to Fancybox
$('#zoom_03').bind('click', function (e) {
    var ez = $('#zoom_03').data('ezPlus');
    $.fancyboxPlus(ez.getGalleryList());
    return false;
});
