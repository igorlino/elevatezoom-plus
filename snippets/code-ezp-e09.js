$('#zoom_09').ezPlus({
    gallery: 'gallery_09',
    galleryActiveClass: 'active'
});


$('#select').change(function (e) {
    var smallImage, largeImage;
    var currentValue = $('#select').val();
    if (currentValue === 1) {
        smallImage = 'images/small/image1.jpg';
        largeImage = 'images/large/image1.jpg';
    }
    if (currentValue === 2) {
        smallImage = 'images/small/image2.jpg';
        largeImage = 'images/large/image2.jpg';
    }
    if (currentValue === 3) {
        smallImage = 'images/small/image3.jpg';
        largeImage = 'images/large/image3.jpg';
    }
    if (currentValue === 4) {
        smallImage = 'images/small/image4.jpg';
        largeImage = 'images/large/image4.jpg';
    }
    // Example of using Active Gallery
    $('#gallery_09 a').removeClass('active').eq(currentValue - 1).addClass('active');


    var ez = $('#zoom_09').data('ezPlus');

    ez.swaptheimage(smallImage, largeImage);

});
