document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('mobile-menu-btn');
    const sidebar = document.getElementById('sidebar');
    const mask = document.getElementById('sidebar-mask');

    function toggleMenu() {
        sidebar.classList.toggle('open');
        mask.classList.toggle('open');
    }

    if (btn) {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMenu();
        });
    }

    if (mask) {
        mask.addEventListener('click', function() {
            toggleMenu();
        });
    }
});