// تغییر تم روشن / تاریک
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
});

// باز و بسته کردن رنک‌ها
function toggleDetails(el) {
  const isOpen = el.classList.contains("open");

  document.querySelectorAll(".rank").forEach(rank => {
    rank.classList.remove("open");
    rank.style.borderColor = "transparent";
  });

  if (!isOpen) {
    el.classList.add("open");
    el.style.borderColor = "var(--accent)";
  }
}

// باز و بسته کردن بخش کلیم
function toggleClaim() {
  const detail = document.querySelector(".claim-details");
  detail.classList.toggle("open");
}

// غیرفعال‌سازی انیمیشن RGB و تنظیم فریم نارنجی هنگام هاور
document.querySelectorAll('.claim-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    item.style.borderColor = 'var(--accent)';
  });

  item.addEventListener('mouseleave', () => {
    item.style.borderColor = 'transparent';
  });
});