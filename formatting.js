// Make columns extend only to the top of the footer, so they appear beside it
function adjustColumnsToFooter() {
    var leftCol = document.querySelector('.left-fixed-column');
    var rightCol = document.querySelector('.right-fixed-column');
    var nav = document.querySelector('nav');
    var footer = document.getElementById('footer');
    if (!leftCol || !rightCol || !nav || !footer) return;
    var navRect = nav.getBoundingClientRect();
    var navBottom = navRect.bottom + window.scrollY;
    var footerRect = footer.getBoundingClientRect();
    var footerTop = footerRect.top + window.scrollY;
    var colHeight = footerTop - navBottom;
    if (colHeight < 0) colHeight = 0;
    leftCol.style.height = colHeight + 'px';
    rightCol.style.height = colHeight + 'px';
}

window.addEventListener('scroll', adjustColumnsToFooter);
window.addEventListener('resize', adjustColumnsToFooter);
window.addEventListener('DOMContentLoaded', adjustColumnsToFooter);

// Dynamically stretch columns to the bottom of the page (not just viewport)

function stretchColumnsToBottom() {
    var leftCol = document.querySelector('.left-fixed-column');
    // var rightCol = document.querySelector('.right-fixed-column');
    var nav = document.querySelector('nav');
    if (!leftCol || !nav) return;
    var navRect = nav.getBoundingClientRect();
    var navBottom = navRect.bottom + window.scrollY;
    var pageHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
    );

    var colHeight = pageHeight - navBottom;
    if (colHeight < 0) colHeight = 0;
    leftCol.style.height = colHeight + 'px';
    // rightCol.style.height = colHeight + 'px';
}

window.addEventListener('scroll', stretchColumnsToBottom);
window.addEventListener('resize', stretchColumnsToBottom);
window.addEventListener('DOMContentLoaded', stretchColumnsToBottom);
// Mobile nav drawer toggle


// Adjust column heights to stop above the footer
window.addEventListener('scroll', adjustColumnHeights);
window.addEventListener('resize', adjustColumnHeights);
window.addEventListener('DOMContentLoaded', adjustColumnHeights);


// Adjust column heights to stop before the footer
function adjustColumnHeights() {
    var footer = document.getElementById('footer');
    var leftCol = document.querySelector('.left-fixed-column');
    // var rightCol = document.querySelector('.right-fixed-column');
    var nav = document.querySelector('nav');
    if (!footer || !leftCol || !nav) return;
    var navHeight = nav.offsetHeight;
    var footerRect = footer.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    var footerHeight = footer.offsetHeight;
    var docHeight = document.body.scrollHeight;
    var scrollY = window.scrollY || window.pageYOffset;
    var footerTop = footer.offsetTop;
    var colHeight;
    // If the footer is visible in the viewport, columns should stop above it
    var colMax = Math.min(windowHeight, footerTop - scrollY);
    colHeight = Math.max(0, colMax - navHeight);
    // If the footer is not visible, columns go to bottom of viewport
    if (footerTop > scrollY + windowHeight) {
        colHeight = windowHeight - navHeight;
    }
    leftCol.style.height = colHeight + 'px';
    // rightCol.style.height = colHeight + 'px';
}

window.addEventListener('scroll', adjustColumnHeights);
window.addEventListener('resize', adjustColumnHeights);
window.addEventListener('DOMContentLoaded', adjustColumnHeights);

document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('openNavBtn');
    var closeBtn = document.getElementById('closeNavBtn');
    var drawer = document.getElementById('sideDrawer');
    if (openBtn && closeBtn && drawer) {
        openBtn.addEventListener('click', function () {
            drawer.classList.add('open');
        });
        closeBtn.addEventListener('click', function () {
            drawer.classList.remove('open');
        });
    }
});