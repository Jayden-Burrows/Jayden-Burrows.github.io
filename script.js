const themeToggle = document.getElementById('theme-toggle');
const menuTogglePaths = document.querySelectorAll("menu-toggle-path")
const drawerToggleBtns = document.querySelectorAll('.drawer-toggle-btn');
const navDrawerBackdrop = document.getElementById('nav-drawer-backdrop')

let isOpen = false;
let isLight = window.matchMedia('(prefers-color-scheme: light)').matches;

function toggleDrawer(e) {
    e.stopPropagation();
    if (isOpen) {
        navDrawerBackdrop.classList.toggle('isOpen'); 
        
    } else {
        navDrawerBackdrop.classList.toggle('isOpen'); 
    }
    console.log(isOpen)
    isOpen = !isOpen;
}

function toggleTheme() {
    if (document.documentElement.getAttribute('data-theme') == 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

navDrawerBackdrop.addEventListener('click', e => toggleDrawer(e))

drawerToggleBtns.forEach(v => v.addEventListener('click', e => toggleDrawer(e)))

themeToggle.addEventListener('change', () => {
    toggleTheme();
})