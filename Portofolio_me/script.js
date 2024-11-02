// Theme Toggle
function toggleTheme() {
    document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    const icon = document.querySelector('.theme-toggle i');
    icon.className = document.body.dataset.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Create Fairies
function createFairy() {
    const fairy = document.createElement('div');
    fairy.className = 'fairy';
    fairy.style.left = Math.random() * window.innerWidth + 'px';
    fairy.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(fairy);

    setTimeout(() => {
        fairy.remove();
    }, 3000);
}

setInterval(createFairy, 500);

// Create Sparkles
function createSparkle(e) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = e.pageX + 'px';
    sparkle.style.top = e.pageY + 'px';
    document.body.appendChild(sparkle);

    sparkle.style.animation = 'sparkle 1s forwards';

    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.1) {
        createSparkle(e);
    }
});

// Magical Particles Effect
function createMagicalParticles() {
    const particle = document.createElement('div');
    particle.className = 'magical-particle';
    
    // Random starting position
    particle.style.left = Math.random() * window.innerWidth + 'px';
    particle.style.top = window.innerHeight + 'px';
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    // Random color
    const colors = ['#ff69b4', '#4d94ff', '#ff9ecd', '#87cefa'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 10000);
}

setInterval(createMagicalParticles, 200);

// Interactive Hover Effects
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        createSparkleExplosion(card);
    });
});

function createSparkleExplosion(element) {
    for(let i = 0; i < 10; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        const rect = element.getBoundingClientRect();
        sparkle.style.left = rect.left + Math.random() * rect.width + 'px';
        sparkle.style.top = rect.top + Math.random() * rect.height + 'px';
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
}

// Smooth Scroll with Magic Trail
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        // Create magic trail
        const trail = document.createElement('div');
        trail.className = 'magic-trail';
        document.body.appendChild(trail);
        
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
});

// Tambahan untuk efek sparkle pada gambar
function addImageSparkles() {
    document.querySelectorAll('.project-image, .gallery-image').forEach(img => {
        img.addEventListener('mouseover', () => {
            for(let i = 0; i < 5; i++) {
                const sparkle = document.createElement('div');
                sparkle.className = 'image-sparkle';
                sparkle.style.left = Math.random() * 100 + '%';
                sparkle.style.top = Math.random() * 100 + '%';
                img.parentElement.appendChild(sparkle);

                setTimeout(() => sparkle.remove(), 2000);
            }
        });
    });
}

// Panggil fungsi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', addImageSparkles);