document.addEventListener('DOMContentLoaded', function () {
    const accItems = document.querySelectorAll('.accordeon-item');
    accItems.forEach((item, idx) => {
        const btn = item.querySelector('.accordeon-header');
        const body = item.querySelector('.accordeon-body');
        btn.addEventListener('click', function () {
            accItems.forEach((el, i) => {
                const elBody = el.querySelector('.accordeon-body');
                if (el !== item) {
                    el.classList.remove('active');
                    el.querySelector('.accordeon-icon').innerHTML = '+';
                    elBody.style.maxHeight = null;
                }
            });
            const isActive = item.classList.contains('active');
            if (!isActive) {
                item.classList.add('active');
                btn.querySelector('.accordeon-icon').innerHTML = '&#10005;';
                body.style.maxHeight = body.scrollHeight + 'px';
            } else {
                item.classList.remove('active');
                btn.querySelector('.accordeon-icon').innerHTML = '+';
                body.style.maxHeight = null;
            }
        });
    });
    // Инициализация: только первый открыт, остальные закрыты
    accItems.forEach((item, idx) => {
        const icon = item.querySelector('.accordeon-icon');
        const body = item.querySelector('.accordeon-body');
        if (idx === 0) {
            item.classList.add('active');
            icon.innerHTML = '&#10005;';
            body.style.maxHeight = body.scrollHeight + 'px';
        } else {
            item.classList.remove('active');
            icon.innerHTML = '+';
            body.style.maxHeight = null;
        }
    });

    // Popup functionality
    const popup = document.getElementById('tariffPopup');
    const closeBtn = popup.querySelector('.popup-close');
    const tariffBtns = document.querySelectorAll('.tariff-btn');

    // Open popup when clicking any tariff button
    tariffBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            popup.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when popup is open
        });
    });

    // Close popup when clicking close button
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    });

    // Close popup when clicking outside
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close popup when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            popup.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
