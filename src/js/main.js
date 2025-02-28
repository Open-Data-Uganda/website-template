document.getElementById('hero-background').style.backgroundImage =
  'url("https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")';

const dotsContainer = document.getElementById('dots-container');
const numberOfDots = 15;

for (let i = 0; i < numberOfDots; i++) {
  const dot = document.createElement('div');
  dot.className = 'absolute w-3 h-3 bg-blue-400 rounded-full opacity-70';
  
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  dot.style.left = `${left}%`;
  dot.style.top = `${top}%`;
  
  dot.style.animation = `pulse 3s infinite ${Math.random() * 3}s`;
  
  dotsContainer.appendChild(dot);
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  const allDropdowns = document.querySelectorAll('[id$="-dropdown"]');
  
  allDropdowns.forEach(menu => {
    if (menu.id !== id && !menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
    }
  });
  
  dropdown.classList.toggle('hidden');
}

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

function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const isOpen = !mobileMenu.classList.contains('translate-x-full');
  
  if (isOpen) {
    mobileMenu.classList.add('translate-x-full');
    document.body.style.overflow = '';
  } else {
    mobileMenu.classList.remove('translate-x-full');
    document.body.style.overflow = 'hidden';
  }
}

function toggleMobileSubmenu(id) {
  const submenu = document.getElementById(id);
  submenu.classList.toggle('hidden');
}

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  const navbarLogo = document.getElementById('navbar-logo');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileMenuIcon = document.querySelector('.fa-bars');
  
  if (window.scrollY > 50) {
    navbar.classList.add('bg-white', 'shadow');
    navbar.classList.remove('bg-transparent');
    navbarLogo.classList.remove('text-white');
    navbarLogo.classList.add('text-gray-800');
    
    navLinks.forEach(link => {
      link.classList.remove('text-white');
      link.classList.add('text-gray-800');
    });
    
    if (mobileMenuIcon) {
      mobileMenuIcon.classList.remove('text-white');
      mobileMenuIcon.classList.add('text-black');
    }
  } else {
    navbar.classList.remove('bg-white', 'shadow');
    navbar.classList.add('bg-transparent');
    navbarLogo.classList.add('text-white');
    navbarLogo.classList.remove('text-gray-800');
    
    navLinks.forEach(link => {
      link.classList.add('text-white');
      link.classList.remove('text-gray-800');
    });
    
    if (mobileMenuIcon) {
      mobileMenuIcon.classList.remove('text-black');
      mobileMenuIcon.classList.add('text-white');
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuIcon = document.querySelector('.fa-bars');
  
  if (window.scrollY > 50) {
    const navbar = document.getElementById('navbar');
    navbar.classList.add('bg-blue-900', 'shadow-md', 'py-2', 'border-b', 'border-gray-400');
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.classList.add('text-white');
    });
    
    if (mobileMenuIcon) {
      mobileMenuIcon.classList.add('text-black');
      mobileMenuIcon.classList.remove('text-white');
    }
  } else {
    if (mobileMenuIcon) {
      mobileMenuIcon.classList.add('text-white');
      mobileMenuIcon.classList.remove('text-black');
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const heroBackground = document.getElementById('hero-background');
  if (heroBackground) {
    heroBackground.style.backgroundImage = "url('https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')";
  }
  
  initDots();
});

function initDots() {
  const dotsContainer = document.getElementById('dots-container');
  if (!dotsContainer) return;
  
  dotsContainer.innerHTML = '';
  
  const colors = ['bg-black', 'bg-yellow-500', 'bg-red-600'];
  
  for (let i = 0; i < 50; i++) {
    const dot = document.createElement('div');
    
    const colorIndex = i % colors.length;
    const colorClass = colors[colorIndex];
    
    dot.className = `absolute rounded-full ${colorClass} transition-all duration-[3000ms]`;
    
    let top = Math.random() * 100;
    let left = Math.random() * 100;
    
    const size = 2 + Math.random() * 20;
    
    const baseDelay = (colorIndex * 0.5);
    const randomDelay = Math.random() * 1.5;
    const delay = baseDelay + randomDelay;
    
    dot.style.top = `${top}%`;
    dot.style.left = `${left}%`;
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.opacity = '0.3';
    dot.style.animation = `pulse 3s infinite ${delay}s`;
    
    dotsContainer.appendChild(dot);
    
    setInterval(() => {
      top = Math.random() * 100;
      left = Math.random() * 100;
      
      dot.style.top = `${top}%`;
      dot.style.left = `${left}%`;
    }, 3000 + Math.random() * 2000);
  }
}