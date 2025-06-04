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

// حذف فعال شدن کلیم‌ها با کلیک، فقط واکنش ماوس روی آنها هست
document.querySelectorAll(".claim-item").forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.borderColor = ""; // پاک کردن برای انیمیشن CSS
    item.style.animation = "rgbBorder 1s linear infinite"; // فعال کردن انیمیشن با سرعت 3 برابر (1s)
  });
  item.addEventListener("mouseleave", () => {
    item.style.animation = "none"; // متوقف کردن انیمیشن سریع بلافاصله
    item.style.borderColor = "transparent"; // پاک کردن فریم
  });
});

// اضافه کردن "رنک " قبل نام رنک‌ها
document.querySelectorAll('.rank .rank-title').forEach(title => {
  title.textContent = "رنک " + title.textContent;
});