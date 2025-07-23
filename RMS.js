// Function for Contact Pop-Up and Pop-Out
function PopupandRemoveContact() {
    const contHiddenElem = document.querySelector('.js-contacttype');

    if (contHiddenElem.classList.contains('contactdontshow')) {
        contHiddenElem.classList.remove('contactdontshow');
        contHiddenElem.classList.add('contacttype');
    } else if (contHiddenElem.classList.contains('contacttype')) {
        contHiddenElem.classList.remove('contacttype');
        contHiddenElem.classList.add('contactdontshow');
        
    } 
}