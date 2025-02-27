$(document).ready(function () {
    $('.project-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  });

  // Ambil semua link dalam menu
const menuLinks = document.querySelectorAll('.nav-links a');

// Tambahkan event listener ke setiap link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Hapus class 'active' dari semua link
    menuLinks.forEach(item => item.classList.remove('active'));

    // Tambahkan class 'active' ke link yang diklik
    link.classList.add('active');
  });
});

// Prevent default scroll-to behavior
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah lonjakan ke elemen
    const targetId = this.getAttribute('href').substring(1); // Ambil id tujuan tanpa #
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Scroll ke elemen secara halus
    }
  });
});


// JavaScript to toggle the 'scrolled' class on navbar
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) { // Jika scroll lebih dari 10px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


function scrollToProjects() {
  document.getElementById('project').scrollIntoView({
    behavior: 'smooth', // Gulir dengan animasi halus
    block: 'start' // Mulai dari awal section
  });
};

document.addEventListener("DOMContentLoaded", function () {
  const bars = document.querySelectorAll(".bar");
  bars.forEach(bar => {
      let width = bar.getAttribute("data-percent");
      bar.style.width = width;
  });
});




  