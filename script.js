/* ===================================
   Investment Landing Page V4
   Ultra Premium
=================================== */


/* ===================================
   5 DAY COUNTDOWN
=================================== */

const countdownTarget = Date.now() + (5 * 24 * 60 * 60 * 1000);

function updateCountdown() {

    const now = Date.now();

    const distance = countdownTarget - now;

    if (distance <= 0) {

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24))
        / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60))
        / (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60))
        / 1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);



/* ===================================
   AUTO REDIRECT
=================================== */

let redirectSeconds = 200;

const redirectText =
document.getElementById("redirect-count");

const telegramButton =
document.getElementById("telegramButton");

const redirectTimer = setInterval(() => {

    redirectSeconds--;

    if (redirectText) {

        redirectText.textContent = redirectSeconds;

    }

    if (redirectSeconds <= 0) {

        clearInterval(redirectTimer);

        if (telegramButton) {

            window.location.href =
            telegramButton.href;

        }

    }

},1000);



/* ===================================
   SCROLL TO TOP
=================================== */

const scrollButton =
document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollButton.style.display="flex";

    }else{

        scrollButton.style.display="none";

    }

});

scrollButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



/* ===================================
   LOADER
=================================== */

window.addEventListener("load",()=>{

    const loader =
    document.getElementById("loader");

    setTimeout(()=>{

        loader.style.opacity="0";

        loader.style.visibility="hidden";

    },1200);

});

// part 3b

/* ===================================
   FAQ ACCORDION
=================================== */

const faqButtons = document.querySelectorAll(".faq-question");

faqButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const answer = button.nextElementSibling;
        const icon = button.querySelector("span");

        document.querySelectorAll(".faq-answer").forEach((item) => {

            if (item !== answer) {

                item.style.display = "none";

            }

        });

        document.querySelectorAll(".faq-question span").forEach((plus) => {

            if (plus !== icon) {

                plus.textContent = "+";

            }

        });

        if (answer.style.display === "block") {

            answer.style.display = "none";
            icon.textContent = "+";

        } else {

            answer.style.display = "block";
            icon.textContent = "−";

        }

    });

});


/* ===================================
   SCROLL FADE ANIMATION
=================================== */

const fadeElements = document.querySelectorAll(

".plan-card,.benefit-card,.stat-box,.testimonial-card,.trust-card,.newsletter-card,.faq-item,.time-box"

);

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

fadeElements.forEach((element)=>{

element.classList.add("fade-up");

observer.observe(element);

});


/* ===================================
   LIVE NOTIFICATION
=================================== */

const notification = document.getElementById(

"liveNotification"

);

if(notification){

setTimeout(()=>{

notification.style.opacity="0";

notification.style.transform="translateX(-120%)";

},10000);

}


/* ===================================
   ANIMATED STATS COUNTER
=================================== */

const stats = document.querySelectorAll(".stat-box h2");

stats.forEach((counter)=>{

const originalText = counter.innerText;

const number = parseInt(originalText);

if(isNaN(number)) return;

let current = 0;

const speed = Math.max(10, Math.floor(number/80));

const update = ()=>{

current += speed;

if(current >= number){

counter.innerText = originalText;

}else{

counter.innerText = current + "+";

requestAnimationFrame(update);

}

};

update();

});


/* ===================================
   BUTTON RIPPLE EFFECT
=================================== */

const buttons = document.querySelectorAll(

".btn-primary,.btn-secondary,.cta-button,.newsletter-button"

);

buttons.forEach((btn)=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-4px) scale(1.03)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0) scale(1)";

});

});


/* ===================================
   HEADER SHADOW ON SCROLL
=================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 10px 30px rgba(0,0,0,.30)";

}else{

header.style.boxShadow="none";

}

});


/* ===================================
   END OF PART 3B
=================================== */

// part 3c

/* ===================================
   FLOATING BACKGROUND ANIMATION
=================================== */

const floatingShapes = document.querySelectorAll(".shape");

floatingShapes.forEach((shape, index) => {

    shape.style.animationDelay = `${index * 2}s`;

    shape.style.animationDuration = `${18 + (index * 3)}s`;

});


/* ===================================
   SMOOTH SECTION REVEAL
=================================== */

const sections = document.querySelectorAll("section");

const sectionObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            sectionObserver.unobserve(entry.target);

        }

    });

}, {

    threshold: 0.15

});

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all .8s ease";

    sectionObserver.observe(section);

});


/* ===================================
   ACTIVE NAV LINK
=================================== */

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/* ===================================
   TELEGRAM BUTTON PULSE
=================================== */

setInterval(() => {

    const btn = document.getElementById("telegramButton");

    if (!btn) return;

    btn.style.transform = "scale(1.05)";

    setTimeout(() => {

        btn.style.transform = "scale(1)";

    }, 500);

}, 4000);


/* ===================================
   RANDOM LIVE MESSAGE
=================================== */

const messages = [

"🔥 New visitor joined the Telegram community",

"🚀 People are exploring investment plans",

"⭐ Community updates are available",

"📢 New information has been shared"

];

const liveBox = document.getElementById("liveNotification");

if (liveBox) {

    const text = liveBox.querySelector("span:last-child");

    setInterval(() => {

        const random = Math.floor(Math.random() * messages.length);

        text.textContent = messages[random];

    }, 8000);

}


/* ===================================
   DISABLE CTA DURING REDIRECT
=================================== */

const bottomBtn = document.getElementById("telegramButtonBottom");

if (bottomBtn) {

    bottomBtn.addEventListener("click", () => {

        bottomBtn.style.pointerEvents = "none";

        bottomBtn.innerHTML = "Opening Telegram...";

    });

}


/* ===================================
   PERFORMANCE
=================================== */

window.addEventListener("pageshow", () => {

    console.log("Investment Landing Page V4 Loaded Successfully");

});


/* ===================================
   END OF SCRIPT
=================================== */

console.log("🚀 Ultra Premium Landing Page Ready");