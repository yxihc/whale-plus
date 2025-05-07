interface ChunkCallbackData {
  text?: string;
  reasoning_content?: string;
}

export interface HttpClient {
  request<T = unknown>(config: HttpRequestConfig): Promise<HttpResponse<T>>;

  stream?(config: HttpRequestConfig, handler: StreamHandler): () => void;
}

export interface StreamHandler {
  onMessage: (chunk: string) => void;
  onComplete: () => void;
  onError: (error: Error) => void;
}

export interface HttpRequestConfig {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: unknown;
  signal?: AbortSignal;
}

export interface HttpResponse<T = unknown> {
  status: number;
  data: T;
  headers: Record<string, string>;
}
