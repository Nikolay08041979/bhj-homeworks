document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".tabs").forEach(tabContainer => {
        const tabs = Array.from(tabContainer.querySelectorAll(".tab"));
        const contents = Array.from(tabContainer.querySelectorAll(".tab__content"));

        tabs.forEach((tab, index) => {
            tab.addEventListener("click", () => {
                // Убираем активный класс у всех вкладок и контента
                tabs.forEach(t => t.classList.remove("tab_active"));
                contents.forEach(c => c.classList.remove("tab__content_active"));

                // Добавляем активный класс к выбранной вкладке и ее содержимому
                tab.classList.add("tab_active");
                contents[index].classList.add("tab__content_active");
            });
        });
    });
});
