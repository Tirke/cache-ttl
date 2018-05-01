declare abstract class Time {
    private static timers;
    protected static watch(key: string, ttl: number, expired: (key: string) => void): void;
    protected static unwatch(key: string): void;
    protected static unwatchAll(): void;
    protected static readonly countWatchers: number;
}
export default Time;
