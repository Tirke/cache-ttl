import Time from './time';
declare class Cache extends Time {
    private static cache;
    private constructor();
    static readonly count: number;
    static get<T>(key: string): T;
    static set(key: string, value: any, ttl?: number): void;
    static remove(key: string): void;
    static clear(): void;
    static toString(): string;
}
export default Cache;
