// import { whaleRequest } from 'whale-request'

import { whaleRequest } from '@whale-plus/request';
export function regUser(url: string) {
  // 使用了二次修改的函数
  return whaleRequest.get({
    url,
    useCache: true,
  });
}
