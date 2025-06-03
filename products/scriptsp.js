
  // Toggle mobile menu
  document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('nav-links');
    nav.classList.toggle('show');
  });

  // Toggle Products dropdown on mobile
  const dropdown = document.querySelector('.dropdown-toggle');
  dropdown.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = this.parentElement;
    parent.classList.toggle('open');
  });
