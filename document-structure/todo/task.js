document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("tasks__form");
    const taskInput = document.getElementById("task__input");
    const taskList = document.getElementById("tasks__list");

    // Загружаем сохраненные задачи из localStorage
    loadTasks();

    // Добавление задачи при клике на кнопку или нажатии Enter
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        addTask(taskInput.value.trim());
        taskInput.value = "";
    });

    // Делегирование событий: обработчик удаления задачи
    taskList.addEventListener("click", (event) => {
        if (event.target.classList.contains("task__remove")) {
            event.target.closest(".task").remove();
            saveTasks(); // Сохраняем изменения
        }
    });

    // Функция добавления задачи
    function addTask(text) {
        if (!text) return; // Если поле пустое, ничего не делать

        const taskHTML = `
            <div class="task">
                <div class="task__title">${text}</div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;

        taskList.insertAdjacentHTML("beforeend", taskHTML);
        saveTasks(); // Сохраняем изменения
    }

    // Функция сохранения задач в localStorage
    function saveTasks() {
        const tasks = Array.from(taskList.querySelectorAll(".task__title")).map(task => task.textContent);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Функция загрузки задач из localStorage
    function loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        savedTasks.forEach(task => addTask(task));
    }
});
