//スクロール時のフェードインを有効化するスクリプト
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
});
console.log("スクロール時のフェードインを有効化するスクリプトが読み込まれました。");