/*Menu hide/show*/
$(document).ready(function () {
    $('.menu-tab').click(function () {
        $('.menu-hide').toggleClass('show');
        $('.menu-tab').toggleClass('active');
    });
    $('a').click(function () {
        $('.menu-hide').removeClass('show');
        $('.menu-tab').removeClass('active');
    });
});

///*Menu select item*/
$(document).ready(function () {
    $('.menulist').click(function () {
        var str = "/" + $(this).text();
        str = str + str;
        alert(str);
        $.ajax({
            url: str,
            type: 'GET',
            cache: false,
            success: function (result) {
                alert(str);
                $("#body").html(result);
            },
            error: function (result) {
                alert("Search Events Fail")
            }
        });
    });
});