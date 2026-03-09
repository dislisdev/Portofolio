        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // Mobile Menu Logic
        const menuOpenBtn = document.getElementById('menuOpenBtn');
        const menuCloseBtn = document.getElementById('menuCloseBtn');
        const mobileMenu = document.getElementById('mobileMenu');

        function openMenu() {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Stop scrolling
        }

        function closeMenu() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Resume scrolling
        }

        menuOpenBtn.addEventListener('click', openMenu);
        menuCloseBtn.addEventListener('click', closeMenu);

        // Smooth scrolling for anchor links (fallback for older browsers)
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });