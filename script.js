// تغییر تم تاریک/روشن و ذخیره در لوکال استوریج
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

// باز و بسته کردن جزئیات رنک با تغییر فریم نارنجی روی رنک کلیک شده
function toggleDetails(el) {
  const isOpen = el.classList.contains("open");
  // پاک کردن حالت باز همه رنک‌ها و فریم نارنجی آنها
  document.querySelectorAll(".rank").forEach(rank => {
    rank.classList.remove("open");
    rank.style.borderColor = "transparent";
  });
  // اگر قبلاً باز نبود، بازش کن و فریم نارنجی بده
  if (!isOpen) {
    el.classList.add("open");
    el.style.borderColor = "var(--accent)";
  }
}

// باز و بسته کردن بخش تعرفه کلیم بلاک
function toggleClaim() {
  const detail = document.querySelector(".claim-details");
  detail.classList.toggle("open");
}

// غیرفعال کردن کلیک روی آیتم‌های کلیم بلاک و ریست کردن انیمیشن رنگ فریم هنگام خروج موس
document.querySelectorAll('.claim-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    // فقط هاور CSS فعال است
  });
  item.addEventListener('mouseleave', () => {
    item.style.animation = 'none';
    setTimeout(() => {
      item.style.animation = '';
    }, 10);
  });
});