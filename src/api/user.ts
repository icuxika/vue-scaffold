import Axios from "./axios"
import {AxiosResponse} from "axios";

type User = {
    id?: string | number;
    nickname?: string;
    avatar?: string;
}

interface HasId {
    id: string | number;
}

type UserWithId = HasId & User;

interface ApiData<T> {
    code: number;
    data: T;
    msg: string;
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

type CreateService = (path: string) => {
    save: (attrs: Omit<Partial<User>, 'id'>) => Promise<AxiosResponse<ApiData<User>>>;
    get: (id: User['id']) => Promise<AxiosResponse<ApiData<User>>>;
    page: (pageQuery: PageQuery) => Promise<AxiosResponse<ApiData<QueryPage<User>>>>;
    updateById: (attrs: UserWithId) => Promise<AxiosResponse<ApiData<User>>>;
    removeById: (id: User['id']) => Promise<AxiosResponse<ApiData<never>>>;
}

const createService: CreateService = (path: string) => {
    return {
        save(attrs: Omit<Partial<User>, 'id'>) {
            return Axios.post<ApiData<User>>(path, {data: attrs})
        },
        get(id: User['id']) {
            return Axios.get<ApiData<User>>(path + "/" + id, {params: {id: id}})
        },
        page(pageQuery: PageQuery) {
            return Axios.get<ApiData<QueryPage<User>>>(path + "/getUserList", {params: pageQuery})
        },
        updateById(attrs: UserWithId) {
            return Axios.put<ApiData<User>>(path, {data: attrs})
        },
        removeById(id: User['id']) {
            return Axios.delete<ApiData<never>>(path + "/" + id)
        }
    }
}

const userService = createService("management/user");
export {
    userService
}
