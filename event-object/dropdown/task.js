document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        const value = dropdown.querySelector(".dropdown__value");
        const list = dropdown.querySelector(".dropdown__list");
        const items = dropdown.querySelectorAll(".dropdown__link");

        // Открытие/закрытие списка
        value.addEventListener("click", () => {
            list.classList.toggle("dropdown__list_active");
        });

        // Выбор элемента списка
        items.forEach(item => {
            item.addEventListener("click", (event) => {
                event.preventDefault(); // Блокируем переход по ссылке
                value.textContent = item.textContent; // Меняем текст кнопки
                list.classList.remove("dropdown__list_active"); // Закрываем список
            });
        });

        // Закрытие списка при клике вне его области
        document.addEventListener("click", (event) => {
            if (!dropdown.contains(event.target)) {
                list.classList.remove("dropdown__list_active");
            }
        });
    });
});
