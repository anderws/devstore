export default interface Http{
    on(method: string, url: string, calback: Function): void;
    listen(port: number): void;
}