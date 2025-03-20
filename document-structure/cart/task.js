document.addEventListener("DOMContentLoaded", () => {
    const cartProductsContainer = document.querySelector(".cart__products");
    const products = document.querySelectorAll(".product");

    // Загрузка корзины из localStorage
    loadCart();

    products.forEach(product => {
        const quantityValue = product.querySelector(".product__quantity-value");
        const decreaseButton = product.querySelector(".product__quantity-control_dec");
        const increaseButton = product.querySelector(".product__quantity-control_inc");
        const addToCartButton = product.querySelector(".product__add");

        // Уменьшение количества
        decreaseButton.addEventListener("click", () => {
            let count = parseInt(quantityValue.textContent);
            if (count > 1) {
                quantityValue.textContent = count - 1;
            }
        });

        // Увеличение количества
        increaseButton.addEventListener("click", () => {
            let count = parseInt(quantityValue.textContent);
            quantityValue.textContent = count + 1;
        });

        // Добавление в корзину
        addToCartButton.addEventListener("click", () => {
            const productId = product.dataset.id;
            const productImage = product.querySelector(".product__image").src;
            const quantity = parseInt(quantityValue.textContent);

            addToCart(productId, productImage, quantity);
        });
    });

    // Функция добавления товара в корзину
    function addToCart(id, image, count) {
        let cartProduct = cartProductsContainer.querySelector(`.cart__product[data-id="${id}"]`);

        if (cartProduct) {
            // Если товар уже в корзине, увеличиваем количество
            const cartCount = cartProduct.querySelector(".cart__product-count");
            cartCount.textContent = parseInt(cartCount.textContent) + count;
        } else {
            // Создаем новый товар в корзине
            const cartProductHTML = `
                <div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${image}">
                    <div class="cart__product-count">${count}</div>
                </div>
            `;
            cartProductsContainer.insertAdjacentHTML("beforeend", cartProductHTML);
        }

        saveCart(); // Сохраняем корзину в localStorage
    }

    // Функция сохранения корзины
    function saveCart() {
        const cartItems = Array.from(cartProductsContainer.children).map(item => ({
            id: item.dataset.id,
            image: item.querySelector(".cart__product-image").src,
            count: item.querySelector(".cart__product-count").textContent
        }));
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // Функция загрузки корзины
    function loadCart() {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        savedCart.forEach(item => {
            addToCart(item.id, item.image, parseInt(item.count));
        });
    }
});
