// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Обработка формы контактов
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Спасибо! Ваше сообщение отправлено.');
        this.reset();
    });
}

// Обработка формы подписки
const subscribeButton = document.querySelector('.subscribe-form button');
if (subscribeButton) {
    subscribeButton.addEventListener('click', function(e) {
        e.preventDefault();
        const emailInput = document.querySelector('.subscribe-form input');
        if(emailInput.value && emailInput.value.includes('@')) {
            alert('Спасибо за подписку!');
            emailInput.value = '';
        } else {
            alert('Введите корректный email.');
            emailInput.focus();
        }
    });
}

// Обновление года в футере
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.querySelector('.copyright');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
    }
});