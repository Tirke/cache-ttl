export class Cache {
  private static cache: { [key: string]: any; } = {};

  private constructor() { }

  static get count(): number {
    return Object.keys(this.cache).length;
  }

  static get<T>(key: string): T {
    return this.cache[key];
  }

  static set(key: string, value: any) {
    this.cache[key] = value;
  }

  static remove(key: string) {
    delete this.cache[key];
  }

  static clear() {
    this.cache = {};
  }
}
