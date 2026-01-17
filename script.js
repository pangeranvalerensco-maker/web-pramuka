// Navigation Toggle for Mobile
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Set active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Handle form submissions
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Terima kasih! Pesan Anda telah berhasil dikirim. Kami akan membalas dalam waktu 1x24 jam.');
            contactForm.reset();
        });
    }
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login berhasil! Anda akan diarahkan ke dashboard admin.');
            // In a real implementation, you would redirect to admin dashboard
            // window.location.href = 'admin/dashboard.html';
        });
    }
    
    // Simple gallery lightbox (basic implementation)
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').getAttribute('src');
            openLightbox(imgSrc);
        });
    });
});

// Lightbox function
function openLightbox(imgSrc) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = imgSrc;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        border-radius: 5px;
        box-shadow: 0 5px 25px rgba(0,0,0,0.5);
    `;
    
    lightbox.appendChild(img);
    document.body.appendChild(lightbox);
    
    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}

// News filtering (for future implementation)
function filterNews(category) {
    console.log(`Filtering news by category: ${category}`);
    // Implementation for filtering news items
    // This would require AJAX or pre-loaded data in a real application
}

// Activity registration (for future implementation)
function registerForActivity(activityId) {
    console.log(`Registering for activity: ${activityId}`);
    // Implementation for activity registration
    // This would require backend integration
}

// Load more content (for future implementation)
function loadMoreContent(contentType) {
    console.log(`Loading more ${contentType}...`);
    // Implementation for infinite scroll or load more button
}

// Initialize any sliders/carousels (for future implementation)
function initSliders() {
    // Implementation for any sliders or carousels
    // Could use libraries like Swiper.js or create custom
}

// Form validation helper
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    return isValid;
}

// API functions for future development
async function fetchNews(page = 1) {
    // Example API call for fetching news
    try {
        // const response = await fetch(`/api/news?page=${page}`);
        // const data = await response.json();
        // return data;
        console.log(`Fetching news page ${page}`);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

async function fetchActivities() {
    // Example API call for fetching activities
    try {
        // const response = await fetch('/api/activities');
        // const data = await response.json();
        // return data;
        console.log('Fetching activities');
    } catch (error) {
        console.error('Error fetching activities:', error);
    }
}