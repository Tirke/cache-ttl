abstract class Time {
  private static timers: { [key: string]: NodeJS.Timer; } = {};

  protected static watch(key: string, ttl: number, expired: (key: string) => void) {
    this.timers[key] = setTimeout(() => {
      this.unwatch(key);
      expired(key);
    }, ttl * 1000);
  }

  protected static unwatch(key: string) {
    clearTimeout(this.timers[key]);
    delete this.timers[key];
  }

  protected static unwatchAll() {
    const keys = Object.keys(this.timers);

    for (const key of keys) {
      this.unwatch(key);
    }
  }

  protected static get countWatchers(): number {
    return Object.keys(this.timers).length;
  }
}

export default Time;
