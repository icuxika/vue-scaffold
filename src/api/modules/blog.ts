import {AxiosResponse} from "axios";
import AxiosInstance from "../axios"
import {ApiData, Page, PageQuery} from "../index"

interface Blog {
    id: number;
    userId: number;
    createTime: string;
    updateTime: string;
    blogContent: BlogContent;
}

interface BlogContent {
    title: String;
    content: String;
}

type CreateService = (path: string) => {
    getBlogPage: (pageQuery: PageQuery) => Promise<AxiosResponse<ApiData<Page<Blog>>>>;
}

const createService: CreateService = (path: string) => {
    return {
        getBlogPage(pageQuery: PageQuery) {
            return AxiosInstance.get<ApiData<Page<Blog>>>(path, {params: pageQuery})
        }
    }
}

const blogService = createService("blog");

export {
    blogService
}
