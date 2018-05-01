import Cache from './cache';

describe('cache util', () => {
  test('should save item', () => {
    Cache.set('hello', 'world');

    expect(Cache.get<string>('hello')).toBe('world');
    expect(Cache.count).toBe(1);
  });

  test('should save any object', () => {
    const now = new Date();
    Cache.set('hello', now);

    expect(Cache.get<Date>('hello')).toBe(now);
  });

  test('should count unique keys', () => {
    Cache.set('hello', 'world');
    Cache.set('hello', 'world');
    Cache.set('hi', 'world');
    Cache.set('hey', 'world');

    expect(Cache.count).toBe(3);
  });

  test('should remove item', () => {
    Cache.set('hello', 'world');
    Cache.remove('hello');

    expect(Cache.get<string>('hello')).toBeUndefined();
  });

  test('should clear all cache', () => {
    Cache.set('hello', 'world');
    Cache.set('hi', 'world');
    Cache.clear();

    expect(Cache.length).toBe(0);
  });
});
