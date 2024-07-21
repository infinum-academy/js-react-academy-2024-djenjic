import { IShow } from '@/typings/show';
import { fetcher } from '@/fetchers/fetcher';

interface IShowListResponse {
	shows: Array<IShow>;
}

interface IShowResponse {
	Show: IShow;
}

export function getAllShows() {
	return fetcher<IShowListResponse>('/api/shows');
}

export function getTopShows() {
	return fetcher<IShowListResponse>(`/api/shows/top-rated`);
}

export function getShow(id: string) {
	return fetcher<IShowResponse>(`/api/shows/${id}`);
}