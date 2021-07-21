var i =0;
var images = [];
var time = 5000;

images[0] = '2842680.jpg'
images[1] = '4949146.jpg'
images[2] = '2526393.jpg'
images[3] = '835_programmer.jpg'
images[4] = 'Untitled-1.png'

function toggleMenu() {
    var menuToggle = document.querySelector('.toggle');
    var navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}

function changeImg() {
document.slide.src = images[i];

    if(i< images.length - 1) {
        i++;
    } else {
        i = 0;
        }

        setTimeout("changeImg()", time);
    }
        window.onload = changeImg