// 缓存项接口，包含数据和过期时间
export interface CacheItem<T> {
  value: T;
  noExpire: boolean;
  // 过期时间的时间戳
  expiration: number;
}
