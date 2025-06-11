// تغییر تم تاریک/روشن و ذخیره در localStorage
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateMeteorColors();
});

// اعمال تم ذخیره شده در بارگذاری صفحه
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
  createMeteors();
  updateMeteorColors();
  animateMeteors();
});

// باز/بسته کردن بخش تعرفه کلیم بلاک با کلیک
function toggleClaim() {
  const detail = document.querySelector(".claim-details");
  detail.classList.toggle("open");
}

// ----------- شهاب‌سنگ‌ها در پس‌زمینه -----------

const meteorCount = 20;
const meteors = [];

function createMeteors() {
  const container = document.querySelector(".container");
  for (let i = 0; i < meteorCount; i++) {
    const meteor = document.createElement("div");
    meteor.classList.add("meteor");
    meteor.style.position = "fixed";
    meteor.style.width = "2px";
    meteor.style.height = "60px";
    meteor.style.borderRadius = "1px";
    meteor.style.opacity = "0.8";
    meteor.style.pointerEvents = "none";
    meteor.style.zIndex = "0"; // پشت همه المان‌ها
    meteor.style.transform = `rotate(45deg)`; // زاویه شهاب‌سنگ
    
    // موقعیت اولیه
    meteor.style.left = Math.random() * window.innerWidth + "px";
    meteor.style.top = Math.random() * window.innerHeight + "px";
    
    container.appendChild(meteor);
    
    meteors.push({
      element: meteor,
      x: parseFloat(meteor.style.left),
      y: parseFloat(meteor.style.top),
      speedX: 1 + Math.random() * 2, // سرعت حرکت افقی
      speedY: 2 + Math.random() * 3, // سرعت حرکت عمودی
    });
  }
}

function updateMeteorColors() {
  const isDark = document.body.classList.contains("dark");
  meteors.forEach(({ element }) => {
    element.style.background = isDark ? "rgba(255, 255, 255, 0.7)" : "rgba(100, 100, 100, 0.7)";
  });
}

function animateMeteors() {
  meteors.forEach(meteor => {
    meteor.x += meteor.speedX;
    meteor.y += meteor.speedY;

    if (meteor.x > window.innerWidth + 60 || meteor.y > window.innerHeight + 60) {
      meteor.x = -60;
      meteor.y = Math.random() * window.innerHeight / 2; // از نیمه بالایی صفحه شروع کن
    }
    meteor.element.style.left = meteor.x + "px";
    meteor.element.style.top = meteor.y + "px";
  });

  requestAnimationFrame(animateMeteors);
    }
