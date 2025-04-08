let swiper = new Swiper(".mySwiper", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

let swiperProduct = new Swiper(".productSwiper", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

const tabSections = document.querySelectorAll('.section_es'); // All tab sections

tabSections.forEach(section => {
  const tabBtns = section.querySelectorAll('.tab__btn');
  const tabItems = section.querySelectorAll('.tab__item');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active classes
      tabBtns.forEach(b => b.classList.remove('active-tab'));
      tabItems.forEach(item => item.classList.remove('active-tab-content'));

      // Add active classes to clicked tab
      btn.classList.add('active-tab');
      const target = btn.getAttribute('data-tab');
      section.querySelector(`.tab__item[data-content="${target}"]`).classList.add('active-tab-content');
    });
  });
});

// Function to update the countdown
function updateCountdown() {
  const countdownElements = document.querySelectorAll('.countdown');

  countdownElements.forEach(countdown => {
    // Parse the data-countdown attribute
    let countdownData = JSON.parse(countdown.getAttribute('data-countdown'));

    // Update the countdown values
    countdown.querySelector('.days').textContent = countdownData.days;
    countdown.querySelector('.hours').textContent = countdownData.hours;
    countdown.querySelector('.minutes').textContent = countdownData.minutes;
    countdown.querySelector('.seconds').textContent = countdownData.seconds;

    // Decrease the countdown time
    if (countdownData.seconds > 0) {
      countdownData.seconds--;
    } else if (countdownData.minutes > 0) {
      countdownData.minutes--;
      countdownData.seconds = 59;
    } else if (countdownData.hours > 0) {
      countdownData.hours--;
      countdownData.minutes = 59;
      countdownData.seconds = 59;
    } else if (countdownData.days > 0) {
      countdownData.days--;
      countdownData.hours = 23;
      countdownData.minutes = 59;
      countdownData.seconds = 59;
    }

    // Update the data-countdown attribute to reflect the changes
    countdown.setAttribute('data-countdown', JSON.stringify(countdownData));
  });
}

// Call updateCountdown every second
setInterval(updateCountdown, 1000);

// Initial countdown update (if you want to update immediately on page load)
updateCountdown();