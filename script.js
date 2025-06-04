// تم تاریک/روشن
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

// باز/بسته کردن رنک‌ها
function toggleDetails(el) {
  const isOpen = el.classList.contains("open");
  document.querySelectorAll(".rank").forEach(rank => rank.classList.remove("open"));
  if (!isOpen) el.classList.add("open");
}

// باز/بسته کردن بخش کلیم
function toggleClaim() {
  const detail = document.querySelector(".claim-details");
  detail.classList.toggle("open");
}

// حذف فعال‌سازی کلیم با کلیک (تابع را خالی می‌گذاریم یا حذف کنید)
function toggleClaimItem(el) {
  // این تابع عمداً خالی است تا کلیک روی آیتم‌های کلیم بلاک رنگ آنها را تغییر ندهد.
}