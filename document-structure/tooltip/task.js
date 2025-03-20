document.addEventListener("DOMContentLoaded", () => {
    const tooltips = document.querySelectorAll(".has-tooltip");
    let activeTooltip = null;

    tooltips.forEach(tooltip => {
        tooltip.addEventListener("click", (event) => {
            event.preventDefault();

            const title = tooltip.getAttribute("title");
            let position = tooltip.getAttribute("data-position") || "bottom";

            // Удаляем предыдущую активную подсказку
            if (activeTooltip) {
                activeTooltip.remove();
                if (activeTooltip.dataset.owner === tooltip) {
                    activeTooltip = null;
                    return;
                }
            }

            // Создаем новую подсказку
            const tooltipElement = document.createElement("div");
            tooltipElement.classList.add("tooltip", "tooltip_active");
            tooltipElement.textContent = title;
            tooltipElement.dataset.owner = tooltip;

            document.body.appendChild(tooltipElement);

            // Рассчитываем положение
            const coords = tooltip.getBoundingClientRect();
            let left, top;

            switch (position) {
                case "top":
                    left = coords.left + window.scrollX;
                    top = coords.top + window.scrollY - tooltipElement.offsetHeight - 5;
                    break;
                case "bottom":
                    left = coords.left + window.scrollX;
                    top = coords.bottom + window.scrollY + 5;
                    break;
                case "left":
                    left = coords.left + window.scrollX - tooltipElement.offsetWidth - 5;
                    top = coords.top + window.scrollY;
                    break;
                case "right":
                    left = coords.right + window.scrollX + 5;
                    top = coords.top + window.scrollY;
                    break;
                default:
                    left = coords.left + window.scrollX;
                    top = coords.bottom + window.scrollY + 5;
            }

            tooltipElement.style.left = `${left}px`;
            tooltipElement.style.top = `${top}px`;

            activeTooltip = tooltipElement;
        });
    });

    // Закрытие при клике вне подсказки
    document.addEventListener("click", (event) => {
        if (activeTooltip && !event.target.classList.contains("has-tooltip")) {
            activeTooltip.remove();
            activeTooltip = null;
        }
    });
});
