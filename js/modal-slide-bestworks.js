$(document).ready(function () {
    const bestworksCardImg = $(".bestworks-card-img");
    const modalSlideBestworks = $(".modal-slide-bestworks");
    const modalClouseButton = $(".modal-clouse-button");
    let currentBestworkImg = "01";
    const bestworksImgBoard = $("#bestworks-img-board");
    const modalBestworksImgPrev = $(".modal-bestworks-img-prev");
    const modalBestworksImgNext = $(".modal-bestworks-img-next");

    $(".modal-slide-bestworks__text-total").text('8');

    // открыть окно
    bestworksCardImg.on("click", function () {
        modalSlideBestworks.toggleClass('is-open-modal-bestworks-img');
        $('body').toggleClass('no_scroll');
        $('header').toggleClass('header_none');
        currentBestworkImg = $(this).attr("data-bestworks-img");

        if (currentBestworkImg == "01") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-1').attr('src'));
            $(".modal-slide-bestworks__text-current").text('1');
        }
        else if (currentBestworkImg == "02") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-2').attr('src'));
            $(".modal-slide-bestworks__text-current").text('2');
        }
        else if (currentBestworkImg == "03") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-3').attr('src'));
            $(".modal-slide-bestworks__text-current").text('3');
        }
        else if (currentBestworkImg == "04") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-4').attr('src'));
            $(".modal-slide-bestworks__text-current").text('4');
        }
        else if (currentBestworkImg == "05") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-5').attr('src'));
            $(".modal-slide-bestworks__text-current").text('5');
        }
        else if (currentBestworkImg == "06") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-6').attr('src'));
            $(".modal-slide-bestworks__text-current").text('6');
        }
        else if (currentBestworkImg == "07") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-7').attr('src'));
            $(".modal-slide-bestworks__text-current").text('7');
        }
        else if (currentBestworkImg == "08") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-8').attr('src'));
            $(".modal-slide-bestworks__text-current").text('8');
        }
    });

    // переключение назад
    modalBestworksImgPrev.on("click", function () {
        if (currentBestworkImg == "01") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-8').attr('src'));
            currentBestworkImg = "08";
            $(".modal-slide-bestworks__text-current").text('8');
        }
        else if (currentBestworkImg == "08") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-7').attr('src'));
            currentBestworkImg = "07";
            $(".modal-slide-bestworks__text-current").text('7');
        }
        else if (currentBestworkImg == "07") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-6').attr('src'));
            currentBestworkImg = "06";
            $(".modal-slide-bestworks__text-current").text('6');
        }
        else if (currentBestworkImg == "06") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-5').attr('src'));
            currentBestworkImg = "05";
            $(".modal-slide-bestworks__text-current").text('5');
        }
        else if (currentBestworkImg == "05") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-4').attr('src'));
            currentBestworkImg = "04";
            $(".modal-slide-bestworks__text-current").text('4');
        }
        else if (currentBestworkImg == "04") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-3').attr('src'));
            currentBestworkImg = "03";
            $(".modal-slide-bestworks__text-current").text('3');
        }
        else if (currentBestworkImg == "03") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-2').attr('src'));
            currentBestworkImg = "02";
            $(".modal-slide-bestworks__text-current").text('2');
        }
        else if (currentBestworkImg == "02") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-1').attr('src'));
            currentBestworkImg = "01";
            $(".modal-slide-bestworks__text-current").text('1');
        }
    });

    // переключение вперед
    modalBestworksImgNext.on("click", function () {
        if (currentBestworkImg == "01") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-2').attr('src'));
            currentBestworkImg = "02";
            $(".modal-slide-bestworks__text-current").text('2');
        }
        else if (currentBestworkImg == "02") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-3').attr('src'));
            currentBestworkImg = "03";
            $(".modal-slide-bestworks__text-current").text('3');
        }
        else if (currentBestworkImg == "03") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-4').attr('src'));
            currentBestworkImg = "04";
            $(".modal-slide-bestworks__text-current").text('4');
        }
        else if (currentBestworkImg == "04") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-5').attr('src'));
            currentBestworkImg = "05";
            $(".modal-slide-bestworks__text-current").text('5');
        }
        else if (currentBestworkImg == "05") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-6').attr('src'));
            currentBestworkImg = "06";
            $(".modal-slide-bestworks__text-current").text('6');
        }
        else if (currentBestworkImg == "06") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-7').attr('src'));
            currentBestworkImg = "07";
            $(".modal-slide-bestworks__text-current").text('7');
        }
        else if (currentBestworkImg == "07") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-8').attr('src'));
            currentBestworkImg = "08";
            $(".modal-slide-bestworks__text-current").text('8');
        }
        else if (currentBestworkImg == "08") {
            bestworksImgBoard.attr('src', $('#bestworks-card-img-1').attr('src'));
            currentBestworkImg = "01";
            $(".modal-slide-bestworks__text-current").text('1');
        }
    });

    // закрыть окно
    modalClouseButton.on("click", function () {
        modalSlideBestworks.toggleClass('is-open-modal-bestworks-img');
        $('body').toggleClass('no_scroll');
        $('header').toggleClass('header_none');
    });
});
