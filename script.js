window.smoothScroll = function(target) {
    var scrollContainer = target;
    do {
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do {
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

/*document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.article');
    let startY, scrollUp;

    const startDragging = function(e) {
        // Mark the start position and the initial scroll position when mouse is pressed
        startY = e.pageY - slider.offsetUp;
        scrollUp = slider.scrollUp;
        // Add event listeners for moving and stopping only after dragging starts
        slider.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', stopDragging);
    };

    const onMouseMove = function(e) {
        if (e.buttons !== 1) { // Check if the primary button is pressed
            return stopDragging(); // Stop if the mouse button is released while moving
        }
        const y = e.pageY - slider.offsetUp;
        const walk = (y - startY);
        slider.scrollUp = scrollUp - walk;
    };

    const stopDragging = function() {
        // Remove the move and stop event listeners once dragging stops
        slider.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', stopDragging);
    };

    // Initial event to start dragging
    slider.addEventListener('mousedown', startDragging);
});
const img = document.querySelector('img')
img.ondragstart = () => {
  return false;
};*/



window.addEventListener("DOMContentLoaded", (event) => {
    const hamMenu = document.querySelector(".ham-menu");
    const offScreenMenu = document.querySelector(".off-screen-menu");
    const vidicon = document.getElementsByClassName("vidicon");
    
    let clicked = false;

    hamMenu.addEventListener("click", () => {
      hamMenu.classList.toggle("active");
      offScreenMenu.classList.toggle("active");
    
      if (clicked == true) {
        for(let i=0; i<vidicon.length; i++) {
            vidicon[i].src='../image/clapperboard.png';
            clicked = false;       
           }
      }

      else {

      for(let i=0; i<vidicon.length; i++) {
       vidicon[i].src='../image/Cross-mark.png';      
       clicked = true 
      }

      }


      console.log(vidicon.length)
    })});

    function toggleHamburgerVisibility() {
        var hamMenu = document.getElementsByClassName("ham-menu")[0];
        var videos = document.querySelectorAll('.video, .video1, .video2, .video3, .video4, .video5');
        hamMenu.style.visibility = "visible";
        videos.forEach(function(video) {
            video.style.display = "block";
        });
    }
    
    function Debunk() {
        window.scrollTo({top: 0, behavior: 'smooth'});
        toggleHamburgerVisibility();
        for (let i = 0; i <= 8; i++) {
            const id = (i === 0) ? "debunk" : "debunk" + i;
            console.log(id);
            document.getElementById(id).style.display = "block";
        }
    }
    
/*
function Transports() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "block"
    document.getElementById("articleEnvironnement").style.display= "none"
    document.getElementById("articleDeveloppement").style.display= "none"
    document.getElementById("articleInternational").style.display= "none"
    document.getElementById("articleJeunesse").style.display= "none"
    document.getElementById("articleSante").style.display= "none"
    document.getElementById("articleParalympiques").style.display= "none"
}

function Environnement() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "none"
    document.getElementById("articleEnvironnement").style.display= "block"
    document.getElementById("articleDeveloppement").style.display= "none"
    document.getElementById("articleInternational").style.display= "none"
    document.getElementById("articleJeunesse").style.display= "none"
    document.getElementById("articleSante").style.display= "none"
    document.getElementById("articleParalympiques").style.display= "none"
}

function Developpement() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "none"
    document.getElementById("articleEnvironnement").style.display= "none"
    document.getElementById("articleDeveloppement").style.display= "block"
    document.getElementById("articleInternational").style.display= "none"
    document.getElementById("articleJeunesse").style.display= "none"
    document.getElementById("articleSante").style.display= "none"
    document.getElementById("articleParalympiques").style.display= "none"
}

function International() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "none"
    document.getElementById("articleEnvironnement").style.display= "none"
    document.getElementById("articleDeveloppement").style.display= "none"
    document.getElementById("articleInternational").style.display= "block"
    document.getElementById("articleJeunesse").style.display= "none"
    document.getElementById("articleSante").style.display= "none"
    document.getElementById("articleParalympiques").style.display= "none"
}

function Jeunesse() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "none"
    document.getElementById("articleEnvironnement").style.display= "none"
    document.getElementById("articleDeveloppement").style.display= "none"
    document.getElementById("articleInternational").style.display= "none"
    document.getElementById("articleJeunesse").style.display= "block"
    document.getElementById("articleSante").style.display= "none"
    document.getElementById("articleParalympiques").style.display= "none"
}

function Sante() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "none"
    document.getElementById("articleEnvironnement").style.display= "none"
    document.getElementById("articleDeveloppement").style.display= "none"
    document.getElementById("articleInternational").style.display= "none"
    document.getElementById("articleJeunesse").style.display= "none"
    document.getElementById("articleSante").style.display= "block"
    document.getElementById("articleParalympiques").style.display= "none"
}

function Paralympiques() {
    document.getElementById("homescreen").style.display= "none"
    document.getElementById("articleTransports").style.display= "none"
    document.getElementById("articleEnvironnement").style.display= "none"
    document.getElementById("articleDeveloppement").style.display= "none"
    document.getElementById("articleInternational").style.display= "none"
    document.getElementById("articleJeunesse").style.display= "none"
    document.getElementById("articleSante").style.display= "none"
    document.getElementById("articleParalympiques").style.display= "block"
}*/
