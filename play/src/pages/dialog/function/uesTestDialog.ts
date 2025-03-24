import { createVNode, render } from 'vue';

import TestDialog from './test-dialog.vue';
function getContainer() {
  // 创建容器
  const container = document.createElement('div')
  return container
}
export const uesTestDialog = () => {
  const show = (options?: any) => {
    console.log('show', options);
    // 创建容器
    const container = getContainer()
    // 创建虚拟节点
    const vnode = createVNode(TestDialog)
    // 渲染到DOM
    render(vnode, container)
    // 将容器添加到body
    document.getElementById('testxxx')?.appendChild(container)
    // document.body.appendChild(container)
  };
  const hide = () => {
    console.log('hide');
  };
  return {
    show,
    hide,
  };
};
