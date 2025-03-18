document.addEventListener("DOMContentLoaded", () => {
    const book = document.getElementById("book");

    // Изменение размера шрифта
    document.querySelectorAll(".book__control_font-size .font-size").forEach(fontSize => {
        fontSize.addEventListener("click", (event) => {
            event.preventDefault();

            // Удаляем активный класс у всех элементов
            document.querySelectorAll(".book__control_font-size .font-size").forEach(el => el.classList.remove("font-size_active"));
            fontSize.classList.add("font-size_active");

            // Удаляем предыдущие классы размера
            book.classList.remove("book_fs-small", "book_fs-big");

            // Добавляем новый класс размера
            if (fontSize.dataset.size === "small") {
                book.classList.add("book_fs-small");
            } else if (fontSize.dataset.size === "big") {
                book.classList.add("book_fs-big");
            }
        });
    });

    // Изменение цвета текста
    document.querySelectorAll(".book__control_color .color").forEach(color => {
        color.addEventListener("click", (event) => {
            event.preventDefault();

            // Удаляем активный класс у всех элементов
            document.querySelectorAll(".book__control_color .color").forEach(el => el.classList.remove("color_active"));
            color.classList.add("color_active");

            // Удаляем предыдущие классы цвета текста
            book.classList.remove("book_color-black", "book_color-gray", "book_color-whitesmoke");

            // Добавляем новый класс цвета текста
            book.classList.add(`book_color-${color.dataset.textColor}`);
        });
    });

    // Изменение цвета фона
    document.querySelectorAll(".book__control_background .color").forEach(bg => {
        bg.addEventListener("click", (event) => {
            event.preventDefault();

            // Удаляем активный класс у всех элементов
            document.querySelectorAll(".book__control_background .color").forEach(el => el.classList.remove("color_active"));
            bg.classList.add("color_active");

            // Удаляем предыдущие классы фона
            book.classList.remove("book_bg-black", "book_bg-gray", "book_bg-white");

            // Добавляем новый класс фона
            book.classList.add(`book_bg-${bg.dataset.bgColor}`);
        });
    });
});
