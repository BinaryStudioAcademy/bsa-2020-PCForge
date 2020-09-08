export interface IWithMeta<T> {
    data: T[];
    meta: {
        globalCount: number;
        countAfterFiltering: number;
    }
}