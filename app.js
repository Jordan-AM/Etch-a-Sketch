// Objects declaration
class Resolution {
  constructor(width, height) {
    this.x = width;
    this.y = height;
  }
}

// Object creation
const lowRes = new Resolution(8, 8);
const mediumRes = new Resolution(16, 16);
const highRes = new Resolution(32, 32);
const maxRes = new Resolution(64, 64);