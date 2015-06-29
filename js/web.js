jQuery(document).ready(function () {

    var $ctb = $('.table tbody'),
        $cta = $ctb.find('td .arrow'),
        $ctr = $cta.parents('tr');
    //
    ////	object toggelen
    //$cta.click(function () {
    //    return false;
    //});
    //$ctr.find('td:lt(2)').hover(
    //    function () {
    //        $(this).parent().addClass('hover');
    //    },
    //    function () {
    //        $(this).parent().removeClass('hover');
    //    }
    //).click(function () {
    //        $('span.params', this).toggle();
    //        $(this).parent().toggleClass('closed').find('td:eq(1) small span').each(function () {
    //            if (this.style.display === 'none')    $(this).show();
    //            else                                $(this).hide();
    //        });
    //        var obj = $('.' + $(this).parent().next().attr('id'));
    //        if (obj[0].style.display === 'none')    obj.show();
    //        else                                    obj.hide();
    //        return false;
    //    }).css('cursor', 'pointer').end().find('td:lt(1)').click();
    //
    ////	achtergrond even/oneven
    $ctb.each(function () {
        var ctrn = 0;
        $('.table tbody tr:odd').addClass('odd');
        $('.table tbody tr:even').addClass('even');

    });

    //	code + italic
    $ctb.find('tr').each(function () {
        if ($('td', this).length === 5) $(this).find('td:eq(2)').wrapInner('<code />').end().find('td:eq(3)').addClass('italic');
        if ($('td', this).length === 4) $(this).find('td:eq(2)').addClass('italic');
        if ($('td', this).length === 3) $(this).find('td:eq(1)').addClass('italic');
    });

    /*
     *   Zebra-stripping table
     */

    //$('table.options tr:even').addClass('even');
});


$(document).ready(function () {

    // Using custom configuration
    $('#img_01').ezPlus({
        zoomWindowFadeIn: 500,
        zoomLensFadeIn: 500,
        gallery: 'gal1',
        imageCrossfade: true,
        zoomWindowWidth: 411,
        zoomWindowHeight: 274,
        zoomWindowOffsetX: 10,
        scrollZoom: true,
        cursor: 'pointer'
    });


    $('#img_01').bind('click', function (e) {
        var ez = $('#img_01').data('ezPlus');
        $.fancyboxPlus(ez.getGalleryList());
        return false;
    });
    $('#img_02').ezPlus({
        gallery: 'gal2',
        tint: true,
        cursor: 'crosshair',
        windowHeight: 600
    });
    $('#img_03').ezPlus({
        zoomType: 'lens',
        lensShape: 'round',
        lensSize: 200
    });


    $('#img_02').bind('click', function (e) {
        var ez = $('#img_02').data('ezPlus');
        $.fancyboxPlus(ez.getGalleryList());
        return false;
    });


});

$(document).ready(function () {
    $(function () {
        var slide_duration = 1000;
        $('.view_source').click(function () {
            t = $(this).attr('rel');
            h = $('.' + t + '');
            h.slideToggle(slide_duration);
            if ($(this).html() === 'SHOW THE CODE') {
                $(this).html('HIDE THE CODE');
                h.show();
            }
            else {
                $(this).html('SHOW THE CODE');
            }
            //slideToggle(slide_duration);
            //	s.find('div.script:not('+h+')').slideUp(slide_duration);

            return false;
        });
    });
});


