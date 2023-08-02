///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TASK 1

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  let ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;
  hours = hours.toString().padStart(2, "0");

  const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

  document.getElementById("clock").textContent = timeString;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CLASSWORK

const slides = document.querySelectorAll(".slide");
let activeIndex = 0;

// use forEach method on slides array
function renderSlides() {
  slides.forEach((slide, index) => {
    if (activeIndex === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}
renderSlides();

// create function logic for changing slides
function showNext() {
  if (activeIndex === slides.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }

  renderSlides();
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TASK 2.1

let sliderIntervalId = null;

function startAutoSlider() {
  sliderIntervalId = setInterval(showNext, 5000);
}

startAutoSlider();

// TASK 2.2 2.3

function clearAutoSlider() {
  clearInterval(sliderIntervalId);
}

// clearAutoSlider();

slides.addEventListener("mouseenter", clearAutoSlider);
slides.addEventListener("mouseleave", startAutoSlider);
