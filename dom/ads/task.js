document.addEventListener("DOMContentLoaded", () => {
    const rotators = document.querySelectorAll(".rotator");

    rotators.forEach(rotator => {
        const cases = Array.from(rotator.children);
        let activeIndex = cases.findIndex(el => el.classList.contains("rotator__case_active"));

        function rotate() {
            const currentCase = cases[activeIndex];
            currentCase.classList.remove("rotator__case_active");

            activeIndex = (activeIndex + 1) % cases.length; // Зацикливаем переключение
            const nextCase = cases[activeIndex];
        

            nextCase.classList.add("rotator__case_active");
            nextCase.style.color = nextCase.dataset.color || "black"; // Установка цвета текста
            setTimeout(rotate, nextCase.dataset.speed || 1000); // Установка задержки
        }

        setTimeout(rotate, cases[activeIndex].dataset.speed || 1000);
    });
});
