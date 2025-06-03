
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');
  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdown = document.querySelector('.dropdown');

  // Toggle main menu
  menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
  });

  // Toggle dropdown in mobile
  dropdownToggle.addEventListener('click', (e) => {
    // Prevent link from jumping
    e.preventDefault();
    dropdown.classList.toggle('open');
  });
