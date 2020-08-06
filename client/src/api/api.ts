class Api {
  test: string;

  constructor() {
    this.test = 'TestString';
  }

  async get() {
    return this.test;
  }

  async post() {
    return this.test;
  }

  async put() {
    return this.test;
  }

  async delete() {
    return this.test;
  }
}

export default new Api();
