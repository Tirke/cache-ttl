declare class Cache {
    private static cache;
    private constructor();
    static readonly count: number;
    static get<T>(key: string): T;
    static set(key: string, value: any): void;
    static remove(key: string): void;
    static clear(): void;
}
export default Cache;
