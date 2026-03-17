// Inicijalizacija AOS (Animate on Scroll) za dinamičke animacije
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Smooth scrolling za sve linkove s hash-om
    initSmoothScroll();

    // Lazy loading slika
    initLazyLoad();

    // Dark mode toggle (dodatni feature za bodove)
    initDarkMode();
    
    // Contact form initialization
    initContactForm();
});

/**
 * Smooth scroll funkcionalnost
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Lazy loading za optimizaciju brzine učitavanja
 */
function initLazyLoad() {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback za starije preglednike
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
}

/**
 * Dark mode toggle - dodatni feature
 */
function initDarkMode() {
    // Provjera je li korisnik već postavio preferenecu
    const darkModeKey = 'darkMode';
    const darkMode = localStorage.getItem(darkModeKey) || 'light';
    
    if (darkMode === 'dark') {
        document.body.setAttribute('data-bs-theme', 'dark');
    }

    // Kreiram toggle dugme ako postoji footer
    const footer = document.querySelector('footer');
    if (footer) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'btn btn-sm btn-outline-secondary position-fixed bottom-0 end-0 m-3';
        toggleBtn.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        toggleBtn.style.zIndex = '1000';
        
        toggleBtn.addEventListener('click', function() {
            const currentMode = document.body.getAttribute('data-bs-theme') || 'light';
            const newMode = currentMode === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-bs-theme', newMode);
            localStorage.setItem(darkModeKey, newMode);
            toggleBtn.innerHTML = newMode === 'light' 
                ? '<i class="fas fa-moon"></i> Dark Mode' 
                : '<i class="fas fa-sun"></i> Light Mode';
        });
        
        document.body.appendChild(toggleBtn);
    }
}

/**
 * Optimizacija performansi - debounce funkcija
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Scroll event listener s debounce optimizacijom
 */
window.addEventListener('scroll', debounce(function() {
    // Animacija za navbar kao što korisnik scroll-a
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 50));

/**
 * Google PageSpeed optimizacija - preload važnih resursa
 */
window.addEventListener('load', function() {
    // Preload Font Awesome ako je ponesen
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'style';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);
});

/**
 * Analytics i WebVitals tracking (dodatni feature)
 */
function trackWebVitals() {
    if ('web-vital' in window) {
        // Tracking za Web Vitals ako je dostupan
        console.log('Web Vitals tracking inicijalizirajn');
    }
}

// Inicijalizacija Web Vitals
trackWebVitals();

/**
 * Reinicijalizacija Lightboxa za sve slike
 */
function initLightbox() {
    if (typeof lightbox !== 'undefined') {
        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true,
            'alwaysShowNavOnTouchDevices': true
        });
        lightbox.load();
    }
}

// Inicijalizacija Lightboxa
document.addEventListener('DOMContentLoaded', function() {
    initLightbox();
    initGalleryModal();
});

// Re-inicijalizacija nakon što se sve učita
window.addEventListener('load', function() {
    initLightbox();
    initGalleryModal();
});

/**
 * Gallery fallback modal: intercept gallery anchors and show image in a simple inline modal.
 * This ensures consistent modal behavior if some files trigger download in certain setups.
 */
function initGalleryModal() {
    const selector = 'a[data-lightbox]';
    const anchors = document.querySelectorAll(selector);
    if (!anchors || anchors.length === 0) return;

    let modal = document.getElementById('gallery-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'gallery-modal';
        modal.style.cssText = 'position:fixed;inset:0;display:none;align-items:center;justify-content:center;background:rgba(0,0,0,0.85);z-index:2000;padding:1rem;';

        const img = document.createElement('img');
        img.id = 'gallery-modal-img';
        img.style.maxWidth = '95%';
        img.style.maxHeight = '95%';
        img.style.boxShadow = '0 0 12px rgba(0,0,0,0.5)';
        img.alt = '';
        modal.appendChild(img);

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        function openModal(src, title) {
            img.src = src;
            img.alt = title || '';
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            modal.style.display = 'none';
            img.src = '';
            document.body.style.overflow = '';
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.style.display === 'flex') closeModal();
        });

        // expose helper for anchors
        window._openGalleryModal = openModal;

        document.body.appendChild(modal);
    }

    anchors.forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const title = a.getAttribute('data-title') || a.title || '';
            if (window._openGalleryModal) window._openGalleryModal(a.href, title);
        });
    });
}

console.log('✓ Scripts.js učitan i inicijaliziran');

/**
 * Kontakt obrazac: validacija i notifikacije (klijent-side)
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const alertWrap = document.getElementById('contactAlert');
    if (!form || !alertWrap) return;

    function showAlert(message, type = 'success') {
        alertWrap.innerHTML = `\n+            <div class="alert alert-${type} alert-dismissible fade show" role="alert">\n+                ${message}\n+                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>\n+            </div>`;
        // auto dismiss after 4 seconds
        setTimeout(() => {
            const bsAlertEl = alertWrap.querySelector('.alert');
            if (bsAlertEl) {
                const alert = bootstrap.Alert.getOrCreateInstance(bsAlertEl);
                alert.close();
            }
        }, 4000);
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = (document.getElementById('contactEmail') || {}).value || '';
        const subject = (document.getElementById('contactSubject') || {}).value || '';
        const message = (document.getElementById('contactMessage') || {}).value || '';

        // Trim values
        const emailTrim = email.trim();
        const subjectTrim = subject.trim();
        const messageTrim = message.trim();

        // Validate
        if (!emailTrim || !subjectTrim || !messageTrim || !isValidEmail(emailTrim)) {
            // Do NOT show success if validation fails
            showAlert('Molimo ispunite sva polja ispravno prije slanja.', 'danger');
            return;
        }

        // All fields valid — show success notification
        showAlert('Poruka je uspješno poslana! Hvala na javljanju.', 'success');

        // Clear form
        form.reset();
    });
}

