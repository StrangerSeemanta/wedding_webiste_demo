// Change The Function or Variable Names As You Want. Tweak Core Codes At Your Own Risk
function tiffany() {
    const couple = document.getElementById('tiffany')
    let num;
    let shifting = setInterval(() => {


        $('#tiffany').css('transform',
            `translateX(${getRndInteger(-40,40)}px) translateY(${getRndInteger(-50,50)}px)`);

    }, 1000);

    couple.onclick = function () {
        clearInterval(shifting)
        $('#tiffany').css('transform', `translateX(1000px) translateY(-3000px)`)
        setTimeout(function () {
            $('#tiffany').css('transform', `translateX(-2500px) translateY(1000px)`)

        }, 500)
        setTimeout(makeParallax, 1000)
    }
}
let cloudval = setInterval(cloud, 1000)
let pos = 0;

function cloud() {
    const cloud = document.getElementById('cloud');


    if (pos == 90) {
        cloud.style.opacity = 0;
        cloud.style.left = 0;
        pos = 0

    } else {
        pos++;
        cloud.style.left = pos + '%';
        cloud.style.opacity = 1;
    }
}
tiffany()

function lunaplane(){
    const lunaplane = document.getElementById('lunaplane');

    function movePlane(){
        lunaplane.style.transform = `translateY(${getRndInteger(-35,35)}px) translateX(${getRndInteger(-35,35)}px)`;
    }
    
    setInterval(() => {
        movePlane()
    }, 900);
}
lunaplane()


function bunnyBaloon(){
    const baloon = document.getElementById('bb');

    function moveBaloon(){
        baloon.style.transform = `translateY(${getRndInteger(-35,35)}px) `;
    }
    
    setInterval(() => {
        moveBaloon()
    }, 900);
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}



// Box parallax
class RevealBox {
    constructor(elementIDs) {
        this.targets = elementIDs.map(id => {
            const element = document.getElementById(id);
            element.dataset.originalWidth = element.offsetWidth + 'px';
            element.style.width = '0';
            return element;
        });
        this.throttledReveal = this.throttle(this.revealOnScroll.bind(this), 200);
        this.listen();
    }

    listen() {
        window.addEventListener('scroll', this.throttledReveal);
    }

    revealOnScroll() {
        this.targets.forEach(target => {
            if (window.scrollY >= target.offsetTop - 200) {
                target.style.width = target.dataset.originalWidth;
                Array.from(target.children).forEach((child)=>{
                    child.style.display = 'block'
                })
            } else {
                target.style.width = '0';
                Array.from(target.children).forEach((child)=>{
                    child.style.display = 'none'
                })
            }
        });
    }

    throttle(func, limit) {
        let inThrottle;
        return function() {
            if (!inThrottle) {
                func.apply(this, arguments);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

const elementIDs = ['wd-box','bb','reg-box', 'rsvp-box'];
const revealBoxes = new RevealBox(elementIDs);
