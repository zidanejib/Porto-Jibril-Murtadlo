document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBio');
    const bio = document.getElementById('bio');
    if (toggleBtn && bio) {
        toggleBtn.addEventListener('click', function () {
            if (bio.style.display === 'none' || !bio.style.display) {
                bio.style.display = 'block';
                toggleBtn.textContent = 'Sembunyikan Bio';
            } else {
                bio.style.display = 'none';
                toggleBtn.textContent = 'Tampilkan Bio';
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');
    if (contactForm && formAlert) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            formAlert.textContent = 'Terima kasih — pesan berhasil dikirim!';
            formAlert.classList.remove('d-none');
            contactForm.reset();
            setTimeout(() => formAlert.classList.add('d-none'), 3000);
        });
    }

    const themeToggle = document.getElementById('themeToggle');
    function applyTheme(t) {
        if (t === 'dark') document.body.classList.add('dark-theme');
        else document.body.classList.remove('dark-theme');
    }
    const saved = localStorage.getItem('ws-theme') || 'light';
    applyTheme(saved);
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const next = document.body.classList.contains('dark-theme') ? 'light' : 'dark';
            applyTheme(next);
            localStorage.setItem('ws-theme', next);
        });
    }
});