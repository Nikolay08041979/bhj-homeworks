function isVisible(el) {
    const { top, bottom } = el.getBoundingClientRect();
    return top < window.innerHeight && bottom > 0;
}

function checkVisibility() {
    document.querySelectorAll(".reveal").forEach((el) => {
        if (isVisible(el)) {
            el.classList.add("reveal_active");
        } else {
            el.classList.remove("reveal_active");
        }
    });
}

window.addEventListener("scroll", checkVisibility);
window.addEventListener("load", checkVisibility);
