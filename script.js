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

// Tambahkan kode berikut di akhir file script.js

// Form validation for registration
function registerForActivity(activityId) {
    const activityName = document.querySelector(`[onclick="registerForActivity(${activityId})"]`).closest('.activity-content').querySelector('h3').textContent;
    
    const modalHTML = `
        <div id="registrationModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 10001;">
            <div style="background: white; padding: 30px; border-radius: var(--border-radius); max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                    <h3 style="margin: 0;">Pendaftaran Kegiatan</h3>
                    <button onclick="closeModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: var(--text-light);">&times;</button>
                </div>
                <p><strong>Kegiatan:</strong> ${activityName}</p>
                <form id="activityRegistrationForm">
                    <div class="form-group">
                        <label for="regName">Nama Lengkap</label>
                        <input type="text" id="regName" class="form-control" placeholder="Masukkan nama lengkap" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="regEmail">Email</label>
                        <input type="email" id="regEmail" class="form-control" placeholder="Masukkan alamat email" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="regPhone">No. Telepon/WhatsApp</label>
                        <input type="tel" id="regPhone" class="form-control" placeholder="Masukkan nomor telepon" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="regGudep">Gugus Depan</label>
                        <input type="text" id="regGudep" class="form-control" placeholder="Contoh: 01.001-01.002" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="regMessage">Pesan/Keterangan</label>
                        <textarea id="regMessage" class="form-control" rows="3" placeholder="Tulis pesan atau keterangan tambahan"></textarea>
                    </div>
                    
                    <div style="display: flex; gap: 10px;">
                        <button type="submit" class="btn">Daftar Sekarang</button>
                        <button type="button" class="btn btn-secondary" onclick="closeModal()">Batal</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Handle form submission
    document.getElementById('activityRegistrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Pendaftaran berhasil! Anda akan menerima konfirmasi via email/WhatsApp dalam waktu 1x24 jam.');
        closeModal();
    });
}

function closeModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.remove();
    }
}

// Newsletter subscription
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail');
    if (email && email.value) {
        alert('Terima kasih telah berlangganan newsletter kami!');
        email.value = '';
    }
}

// Initialize any tooltips
function initTooltips() {
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            // Tooltip functionality is handled by CSS
        });
    });
}

// Countdown to next major event
function initEventCountdown() {
    // Example: Countdown to next Hari Pramuka (August 14)
    const nextPramukaDay = new Date(new Date().getFullYear(), 7, 14); // August is month 7 (0-indexed)
    if (nextPramukaDay < new Date()) {
        nextPramukaDay.setFullYear(nextPramukaDay.getFullYear() + 1);
    }
    
    const countdownElement = document.getElementById('eventCountdown');
    if (countdownElement) {
        updateCountdown(nextPramukaDay, countdownElement);
        setInterval(() => updateCountdown(nextPramukaDay, countdownElement), 1000);
    }
}

function updateCountdown(targetDate, element) {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    element.innerHTML = `
        <div style="display: flex; gap: 10px; justify-content: center;">
            <div style="text-align: center;">
                <div style="background: var(--primary-color); color: white; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 1.5rem;">${days}</div>
                <div style="font-size: 0.8rem; margin-top: 5px;">Hari</div>
            </div>
            <div style="text-align: center;">
                <div style="background: var(--primary-color); color: white; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 1.5rem;">${hours}</div>
                <div style="font-size: 0.8rem; margin-top: 5px;">Jam</div>
            </div>
            <div style="text-align: center;">
                <div style="background: var(--primary-color); color: white; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 1.5rem;">${minutes}</div>
                <div style="font-size: 0.8rem; margin-top: 5px;">Menit</div>
            </div>
            <div style="text-align: center;">
                <div style="background: var(--primary-color); color: white; padding: 10px; border-radius: 5px; font-weight: bold; font-size: 1.5rem;">${seconds}</div>
                <div style="font-size: 0.8rem; margin-top: 5px;">Detik</div>
            </div>
        </div>
    `;
}

// Initialize additional functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initTooltips();
    initEventCountdown();
    
    // Add active class to current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});