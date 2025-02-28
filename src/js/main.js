// Set background image
document.getElementById('hero-background').style.backgroundImage =
  'url("https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")';

// Create animated dots
const dotsContainer = document.getElementById('dots-container');
const numberOfDots = 15;

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement('div');
  dot.className = 'absolute w-3 h-3 bg-blue-400 rounded-full opacity-70';
  
  // Random position
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  dot.style.left = `${left}%`;
  dot.style.top = `${top}%`;
  
  // Animation with random delay
  dot.style.animation = `pulse 3s infinite ${Math.random() * 3}s`;
  
  dotsContainer.appendChild(dot);
}

// Dropdown functionality
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll('[id$="-dropdown"]');
  
  // Close all other dropdowns first
  allDropdowns.forEach(menu => {
    if (menu.id !== id && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
    }
  });
  
  // Toggle the clicked dropdown
  dropdown.classList.toggle('hidden');
}

// Close dropdowns when clicking outside
document.addEventListener('click', function (event) {
  const isDropdownButton = event.target.closest('button') && 
                          (event.target.closest('button').onclick + '').includes('toggleDropdown');
  
  if (!isDropdownButton) {
    const allDropdowns = document.querySelectorAll('[id$="-dropdown"]');
    allDropdowns.forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  }
});

// Mobile menu functionality
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const isOpen = !mobileMenu.classList.contains('translate-x-full');
  
  if (isOpen) {
    // Close the menu
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = '';
  } else {
    // Open the menu
    mobileMenu.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
  }
}

function toggleMobileSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle('hidden');
}

// Handle scroll to change navbar background
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('nav');
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'bg-opacity-90');
    navbar.classList.remove('bg-transparent');
  } else {
    navbar.classList.add('bg-transparent');
    navbar.classList.remove('bg-white', 'bg-opacity-90');
  }
});

// Initialize navbar as transparent on page load
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('nav');
  navbar.classList.remove('bg-white', 'bg-opacity-90');
  navbar.classList.add('bg-transparent');
});