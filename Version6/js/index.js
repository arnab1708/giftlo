$(document).ready(function () {
    $(".contactdiv").show();
    $('.envelope').click(function () {
        $(".envelope").addClass("triggerenvelope");
        $(".envelope").html('<div class="paper"></div>');
        setTimeout(
            function () {
                $(".paper").addClass("fadeUp");
                $(".envelope").unbind("click");
            }, 2200
        );
        $(".paper").html('<div class="cardImgAmount">$1,500</div><div class="cardImgText">Buy Tickets to Bali, and enjoy the beaches.</div>');
        setTimeout(
            function () {
                $('#clickGift').hide();
                $('#redeemGift').show();
            }, 5500
        );
    });
    $('#clickGift').click(function () {
        $(".envelope").addClass("triggerenvelope");
        $(".envelope").html('<div class="paper"></div>');
        setTimeout(
            function () {
                $(".paper").addClass("fadeUp");
                $(".envelope").unbind("click");
            }, 2200
        );
        $(".paper").html('<div class="cardImgAmount">$1,500</div><div class="cardImgText">Buy Tickets to Bali, and enjoy the beaches.</div>');
        setTimeout(
            function () {
                $('#clickGift').hide();
                $('#redeemGift').show();
            }, 5500
        );
    });
});