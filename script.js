
// Preloader Logic
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // Add a small delay for effect
    setTimeout(() => {
      preloader.classList.add('hide-preloader');
      document.body.classList.remove('overflow-hidden');
      
      // Completely remove from DOM after transition
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }, 800);
  }
});

document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorRing = document.querySelector('.cursor-ring');
    
    if (cursorDot && cursorRing) {
        window.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Fast follow for dot
            cursorDot.style.transform = `translate3d(${posX - 4}px, ${posY - 4}px, 0)`;
            
            // Slow follow for ring
            setTimeout(() => {
                cursorRing.style.transform = `translate3d(${posX - 20}px, ${posY - 20}px, 0)`;
            }, 50);
        });

        // Hover effect for links and buttons
        const interactables = document.querySelectorAll('a, button');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorRing.style.backgroundColor = 'rgba(217, 107, 66, 0.2)';
                cursorRing.style.transform = 'scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursorRing.style.backgroundColor = 'transparent';
                cursorRing.style.transform = 'scale(1)';
            });
        });
    }

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.floating-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.style.backgroundColor = 'rgba(17, 19, 21, 0.95)';
                navbar.style.backdropFilter = 'blur(8px)';
            } else {
                navbar.style.backgroundColor = 'transparent';
                navbar.style.backdropFilter = 'none';
            }
        });
    }

    // 3. Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // 4. Marquee Animation (Fallback if Framer Motion was stripped)
    const marqueeContent = document.querySelector('.marquee-content');
    if (marqueeContent) {
        let position = 0;
        function animateMarquee() {
            position -= 1;
            if (position <= -50) { // arbitrary reset point based on content duplication
                position = 0; 
            }
            // marqueeContent.style.transform = `translateX(${position}%)`;
            // requestAnimationFrame(animateMarquee);
        }
        // animateMarquee();
    }
});
