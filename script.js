/*$(document).ready(function(){
    $(window).scroll(function () {
        var scroll = $(".navbar-fixed-top");
        if (scroll > $nav.height()) {
            $("nav").css("background" , "blue");
        }
        else{
            $("nav").css("background" , "#333");  	
        }
        //$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });      
})*/

let PortfolioToggle = false;


function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    if (scroll < 80) {
        navbar.classList.remove('BgColour');
    } else {
        navbar.classList.add('BgColour');
    }
}

window.addEventListener('scroll', scrollValue);

const containers = document.querySelector(".containers");
const containersVideo = document.querySelector(".containersVideo");

function togglePortfolio() {
    console.log(PortfolioToggle)
    PortfolioToggle = !PortfolioToggle;
    if (PortfolioToggle) {
        containers.classList.remove("active-grid")
        containersVideo.classList += " active-grid"
    }

    else {
        containersVideo.classList.remove("active-grid")
        containers.classList += " active-grid"
    }
}


