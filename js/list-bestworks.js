document.addEventListener('DOMContentLoaded', function () {

    // List best-works

    let bestWorksWrapperOpenBtn = document.querySelector('.best-works__button-wrapper-btn');
    let bestWorksWrapperCloseBtn = document.querySelector('.best-works__button-wrapper-close-btn');

    let bestWorksItemsList = document.querySelector('.best-works__items-list');
    let bestWorksButtonWrapperClose = document.querySelector('.best-works__button-wrapper-close');
    let bestWorksButtonWrapper = document.querySelector('.best-works__button-wrapper');

    // btn.addEventListener('click', () => {
    //     el.style.display === 'none' ? el.style.display = 'block' : el.style.display = 'none';
    // });

    bestWorksWrapperOpenBtn.addEventListener('click', () => {
        bestWorksItemsList.style.display = "block";
        bestWorksButtonWrapperClose.style.display = "block";
        bestWorksButtonWrapper.style.display = "none";


        console.log("работает");
    });

    bestWorksWrapperCloseBtn.addEventListener('click', () => {
        bestWorksItemsList.style.display = "none";
        bestWorksButtonWrapperClose.style.display = "none";
        bestWorksButtonWrapper.style.display = "block";
    });


});