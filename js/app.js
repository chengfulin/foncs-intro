(function () {
    setupHomeSection();
    setupAboutSection();
})();

function setupHomeSection() {

    var moreBtn = document.querySelector('#button_more');
    var downBtn = document.querySelector('#home_down_link');
}

function onClickHomeMoreBtn() {
    return function () {
        var aboutSectionContent = document.querySelector('#about_content');
        animate(aboutSectionContent, 'w3-animate-bottom');
    };
}

function onClickHomeDownBtn() {
    return function () {
        var aboutSectionContent = document.querySelector('#about_content');
        animate(aboutSectionContent, 'w3-animate-bottom');
    };
}

function setupAboutSection() {
    var downBtn = document.querySelector('#features_1_down_link');
    downBtn && downBtn.addEventListener('click', onClickFeatures1DownBtn());
}

function onClickFeatures1DownBtn() {
    return function () {
        var features1Content = document.querySelector('#features_1_content');
        var features1Imgs = document.querySelector('#features_1_content_imgs');
        features1Imgs && features1Imgs.classList.remove('w3-animate-right');               
        features1Imgs && features1Imgs.classList.add('outscreen');

        animate(features1Content, 'w3-animate-bottom');

        setTimeout(function () {
            animate(features1Imgs, 'w3-animate-right');
            features1Imgs && features1Imgs.classList.remove('outscreen');       
        }, 400);
    };
}

function animate(elem, className) {
    if (!elem) return;
    elem.classList.add(className);
    setTimeout(function () {
        elem.classList.remove(className);
    }, 400);
}
