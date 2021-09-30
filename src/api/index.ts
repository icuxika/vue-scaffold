interface ApiData<T> {
    code: number;
    data: T;
    msg: string;
}

interface Page<T> {
    records: T[];
    total: number;
    size: number;
    current: number;
}

interface PageQuery {
    currentPage: number;
    pageSize: number;
}

interface QueryPage<T> {
    total: number;
    currentPage: number;
    pageSize: number;
    data: T[];
}

export {
    ApiData,
    Page,
    PageQuery,
    QueryPage
}
