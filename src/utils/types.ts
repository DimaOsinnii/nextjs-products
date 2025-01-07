export type SearchParams = Promise<{ [key: string]: string | undefined }>;
export interface ListResponse<T = unknown> {
  total: number;
  data: T[];
}
