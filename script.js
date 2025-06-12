// تغییر تم تاریک/روشن و ذخیره در localStorage
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
});

// اعمال تم ذخیره شده در بارگذاری صفحه
window.addEventListener("DOMContentLoaded", () => {
if (localStorage.getItem("theme") === "dark") {
document.body.classList.add("dark");
}
});

// باز/بسته کردن بخش تعرفه کلیم بلاک با کلیک
function toggleClaim() {
const detail = document.querySelector(".claim-details");
detail.classList.toggle("open");
}
