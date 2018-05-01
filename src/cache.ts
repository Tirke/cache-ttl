import Time from './time';

class Cache extends Time {
  private static cache: { [key: string]: any; } = {};

  private constructor() {
    super();
  }

  static get count(): number {
    return Object.keys(this.cache).length;
  }

  static get<T>(key: string): T {
    return this.cache[key];
  }

  static set(key: string, value: any, ttl?: number) {
    this.unwatch(key);
    this.cache[key] = value;

    if (ttl >= 0) {
      this.watch(key, ttl, key => this.remove(key));
    }
  }

  static remove(key: string) {
    this.unwatch(key);
    delete this.cache[key];
  }

  static clear() {
    this.unwatchAll();
    this.cache = {};
  }

  static toString(): string {
    return `Cached ${this.count} items (${this.countWatchers} will expire).`;
  }
}

export default Cache;
