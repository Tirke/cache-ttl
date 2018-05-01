declare abstract class Time {
    private static timers;
    static watch(key: string, ttl: number, expired: (key: string) => void): void;
    static unwatch(key: string): void;
    static unwatchAll(): void;
}
export default Time;
