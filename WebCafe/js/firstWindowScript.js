//code of typescript is below

const words = 'a tag line, where you can write a key point of your idea.'

let charTurn = 0

const output = document.getElementById('outText')


printWord()

function printWord() {
    if (charTurn <= words.length) {
        let str = words.substr(0, charTurn)
        output.innerHTML = str
        charTurn += 1
        setTimeout(printWord, 150)
    } else {
        setTimeout(deleteWord, 10)
    }
}

function deleteWord() {
    if (charTurn >= 0) {
        let str = words.substr(0, charTurn)
        output.innerHTML = str
        charTurn -= 1
        setTimeout(deleteWord, 10)
    } else {
        setTimeout(printWord, 150)

    }
}

//code of typescript ends here


//code of modal window is below

const modal = document.querySelector('.modal')

function closeModal() {
    modal.classList.add('none');
    document.body.style.overflow = "auto";
}

//code of modal window ends here

//code of burgerMenu begins here

let cntForBurgerMenu = 0

const burgerMenu = document.querySelector('.mobile-navs-options')

function OpenMobileNavs() {
    if (cntForBurgerMenu === 0) {
        burgerMenu.style.display = 'block';
        cntForBurgerMenu = 1
    } else {
        burgerMenu.style.display = 'none';
        cntForBurgerMenu = 0
    }

}

//code of burgerMenu ends here


// code of slideshow for the gallery begins here

const modalPhotos = document.querySelector('.main-modal-photos-img')

function closeModalPhotos() {
    document.querySelector('.modal-photos').style.display = 'none';
}

let photoIndex = 1

function OpenGalleryPhoto(n) {
    const photoAddresses = [
        "WebCafe/images/widgets/gallery1.jpg",
        "WebCafe/images/widgets/gallery2.jpg",
        "WebCafe/images/widgets/gallery3.jpg",
        "WebCafe/images/widgets/gallery4.jpg"
    ]


    if (n >= photoAddresses.length) {
        n = 1
        photoIndex = 1
    } else if (n <= 0) {
        n = photoAddresses.length
        photoIndex = photoAddresses.length
    }


    document.querySelector('.modal-photos').style.display = 'flex';
    document.querySelector(".main-modal-photos-img").src = photoAddresses[n - 1]
}


function nextImg(n) {
    photoIndex += n
    OpenGalleryPhoto(photoIndex)
}

// code of slideshow for the gallery ends here

//questions code begins here

const questionOpening1 = document.querySelector('.questions-description1')
const questionOpening2 = document.querySelector('.questions-description2')
const questionOpening3 = document.querySelector('.questions-description3')
const questionOpening4 = document.querySelector('.questions-description4')

let questionsCNT1 = 0
let questionsCNT2 = 0
let questionsCNT3 = 0
let questionsCNT4 = 0

function CloseQuestionsDescription(e) {

}

function OpenQuestionsDescription(e) {
    if (e === 1 && questionsCNT1 === 0) {
        questionOpening1.style.display = 'block';
        questionsCNT1 = 1
    } else if (e === 1 && questionsCNT1 === 1) {
        questionOpening1.style.display = 'none';
        questionsCNT1 = 0
    } else if (e === 2 && questionsCNT2 === 0) {
        questionOpening2.style.display = 'block';
        questionsCNT2 = 1
    } else if (e === 2 && questionsCNT2 === 1) {
        questionOpening2.style.display = 'none';
        questionsCNT2 = 0
    } else if (e === 3 && questionsCNT3 === 0) {
        questionOpening3.style.display = 'block';
        questionsCNT3 = 1
    } else if (e === 3 && questionsCNT3 === 1) {
        questionOpening3.style.display = 'none';
        questionsCNT3 = 0
    } else if (e === 4 && questionsCNT4 === 0) {
        questionOpening4.style.display = 'block';
        questionsCNT4 = 1
    } else if (e === 4 && questionsCNT4 === 1) {
        questionOpening4.style.display = 'none';
        questionsCNT4 = 0
    }

}


//here begins the code of timeline photos show 
let timeLine = document.querySelector(".timeline-lower-second")

function showTimeLinePhotos(e) {
    if (e === 1) {
        timeLine.src = "WebCafe/images/widgets/gallery4.jpg"
    } else if (e === 2) {
        timeLine.src = "WebCafe/images/widgets/gallery3.jpg"
    } else if (e === 3) {
        timeLine.src = "WebCafe/images/widgets/gallery1.jpg"
    }
}


//change girls photo and description

function changeGirlsImage(e) {
    if (e === 3) {
        document.querySelector('.belive-people-girl').src = 'WebCafe/images/widgets/belive-people-girl3.png'
        document.querySelector('.belive-other-people-text2').innerHTML = 'Kate Murray'
        document.querySelector('.belive-other-people-text4').innerHTML = 'Amazing stakes with the special sauce that they would have never give up, even at the point of a gun. Also, thanks to great service. Good job!'
    } else if (e === 2) {
        document.querySelector('.belive-people-girl').src = 'WebCafe/images/widgets/belive-people-girl2.png'
        document.querySelector('.belive-other-people-text2').innerHTML = 'Samanta Johnson'
        document.querySelector('.belive-other-people-text4').innerHTML = 'The prices are as good as the menu! Each time I spend less money, than anywhere else and get a fresh, tasty, homemade dinner!'
    } else if (e === 1) {
        document.querySelector('.belive-people-girl').src = 'WebCafe/images/widgets/belive-people-girl1.png'
        document.querySelector('.belive-other-people-text2').innerHTML = 'Amanda Smith'
        document.querySelector('.belive-other-people-text4').innerHTML = "I've been eating their business lunches for the past 7 years. Not even once have I had any unpleasant experience. And the dishes always taste fresh and good!"
    }
}

//timers code 

let countDownDate = new Date("May 5, 2021 16:37:52").getTime();

// Run myfunc every second
var myfunc = setInterval(function() {

var now = new Date().getTime();
var timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = days 
document.getElementById("hours").innerHTML = hours  
document.getElementById("minutes").innerHTML = minutes  
document.getElementById("seconds").innerHTML = seconds 
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("minutes").innerHTML = ""
    document.getElementById("seconds").innerHTML = ""
    document.getElementById("end").innerHTML = "TIME UP!!";
}
}, 1000);
