tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                brand: {
                    50: '#f7fee7',
                    100: '#ecfccb',
                    400: '#a3e635',
                    500: '#84cc16',
                    600: '#65a30d',
                },
                dark: {
                    bg: '#0c0d0e',
                    card: '#141619',
                    border: '#24282f',
                    hover: '#1c1f24',
                    muted: '#94a3b8'
                }
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.remove('hidden');
            setTimeout(() => {
                mobileMenu.classList.remove('max-h-0', 'py-0');
                mobileMenu.classList.add('max-h-[500px]', 'py-3');
            }, 10);
            menuBtn.innerHTML = '<i data-lucide="x" class="w-6 h-6 text-brand-400"></i>';
        } else {
            mobileMenu.classList.remove('max-h-[500px]', 'py-3');
            mobileMenu.classList.add('max-h-0', 'py-0');
            setTimeout(() => {
                mobileMenu.classList.add('hidden');
            }, 300);
            menuBtn.innerHTML = '<i data-lucide="menu" class="w-6 h-6"></i>';
        }
        lucide.createIcons();
    }

    menuBtn.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024 && isMenuOpen) {
            toggleMenu();
        }
    });

});