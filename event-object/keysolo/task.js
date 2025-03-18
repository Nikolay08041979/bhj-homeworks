class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.inputField = container.querySelector('#inputField');

    this.reset();
    this.registerEvents();
  }

  reset() {
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.setNewWord();
  }

  registerEvents() {
    this.inputField.addEventListener("input", (event) => {
      const typedChar = event.target.value.trim().toLowerCase(); // Введенный символ
      const currentChar = this.currentSymbol.textContent.toLowerCase(); // Ожидаемый символ

      if (typedChar === currentChar) {
        this.success();
      } else {
        this.fail();
      }

      this.inputField.value = ""; // Очищаем поле ввода
    });
  }

  success() {
    this.currentSymbol.classList.add("symbol_correct"); // Подсвечиваем правильный символ
    this.currentSymbol = this.currentSymbol.nextElementSibling; // Переходим к следующему символу

    if (this.currentSymbol !== null) {
      return;
    }

    this.winsElement.textContent = parseInt(this.winsElement.textContent) + 1; // Увеличиваем счетчик побед

    if (parseInt(this.winsElement.textContent) === 10) {
      alert('Победа!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  fail() {
    this.lossElement.textContent = parseInt(this.lossElement.textContent) + 1; // Увеличиваем счетчик ошибок

    if (parseInt(this.lossElement.textContent) === 5) {
      alert('Вы проиграли!');
      this.reset();
    } else {
      this.setNewWord();
    }
  }

  setNewWord() {
    const word = this.getWord();
    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob', 'awesome', 'netology', 'hello', 'kitty',
        'rock', 'youtube', 'popcorn', 'cinema', 'love', 'javascript'
      ];
    return words[Math.floor(Math.random() * words.length)];
  }

  renderWord(word) {
    this.wordElement.innerHTML = [...word]
      .map((s, i) =>
        `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'));
