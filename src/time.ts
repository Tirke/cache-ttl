abstract class Time {
  private static timers: { [key: string]: NodeJS.Timer; } = {};

  static watch(key: string, ttl: number, expired: (key: string) => void) {
    this.timers[key] = setTimeout(() => {
      this.unwatch(key);
      expired(key);
    }, ttl * 1000);
  }

  static unwatch(key: string) {
    clearTimeout(this.timers[key]);
    delete this.timers[key];
  }

  static unwatchAll() {
    const keys = Object.keys(this.timers);

    for (const key of keys) {
      this.unwatch(key);
    }
  }
}

export default Time;
