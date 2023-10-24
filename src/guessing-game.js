class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.left = min;
        this.right = max;
    }

    guess() {
      return Math.round((this.right + this.left) / 2);
    }

    lower() {
        return this.right = Math.round((this.right + this.left) / 2);
    }

    greater() {
        return this.left = Math.round((this.right + this.left) / 2);
    }
}

module.exports = GuessingGame;
