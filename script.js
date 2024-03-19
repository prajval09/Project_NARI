window.addEventListener('scroll', function() {
    var headerImg = document.getElementById('headerImg');
    if (window.scrollY > 3) { // Change 50 to whatever scroll position you want
        headerImg.classList.add('shrink');
    } else {
        headerImg.classList.remove('shrink');
    }
});
