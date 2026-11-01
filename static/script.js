// script.js
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true, offset: 50 });

    const cursorGlow = document.createElement('div');
    cursorGlow.id = 'cursor-glow';
    document.body.appendChild(cursorGlow);

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });

    if(document.querySelector('.hero-title')) {
        gsap.from(".hero-badge", { opacity: 0, y: -20, duration: 0.8, delay: 0.2 });
        gsap.from(".hero-title", { opacity: 0, y: 30, duration: 1, delay: 0.4 });
        gsap.from(".hero-desc", { opacity: 0, y: 30, duration: 1, delay: 0.6 });
        gsap.from(".hero-btns", { opacity: 0, y: 30, duration: 1, delay: 0.8 });
    }

    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-cardbg/80', 'backdrop-blur-xl', 'border-b', 'border-white/10');
            navbar.classList.remove('bg-transparent', 'border-white/5', 'bg-black/50');
        } else {
            navbar.classList.remove('bg-cardbg/80', 'backdrop-blur-xl', 'border-white/10');
            navbar.classList.add('bg-transparent', 'border-white/5', 'bg-black/50');
        }
    });

    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; 
            const y = e.clientY - rect.top;  
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5; 
            const rotateY = ((x - centerX) / centerX) * 5;
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        });
    });
});
