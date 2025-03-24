<template>
  <div class="app-container">
    <div class="left-menu">
      <el-card class="menu-card">
        <el-menu
          default-active="1"
          background-color="#fafafa"
          @select="goToRoute"
          :collapse="false"
          :default-active="'/home'"
          :collapse-transition="false"
          class="el-menu-vertical-demo"
        >
          <template v-for="(item, index) in hierarchicalRoutes">
            <el-menu-item :index="item.path" v-if="item.path">
              <el-icon>
                <location />
              </el-icon>
              <template #title>{{ item.title }}</template>
            </el-menu-item>
            <el-sub-menu v-else :index="item.title">
              <template #title>
                <el-icon>
                  <location />
                </el-icon>
                <span>{{ item.title }}</span>
              </template>
              <el-menu-item
                :index="childItem.path"
                v-for="(childItem, childIndex) in item.children"
                :key="childIndex"
              >
                <el-icon>
                  <location />
                </el-icon>
                {{ childItem.title }}
              </el-menu-item>
            </el-sub-menu>
          </template>
        </el-menu>
      </el-card>
    </div>
    <div class="right-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();

// 获取所有非隐藏的路由 (假设你想过滤掉某些路由)
const flatRoutes = computed(() => {
  return router.getRoutes().filter((r) => !r.meta || !r.meta.hidden);
});

// 构建层级结构
const buildHierarchy = (routes) => {
  const hierarchy = {};

  routes.forEach((route) => {
    const pathParts = route.path.split('/').filter((part) => part); // 去除空字符串
    let currentLevel = hierarchy;

    pathParts.forEach((part, index) => {
      if (!currentLevel[part]) {
        currentLevel[part] =
          index === pathParts.length - 1
            ? { title: route.meta?.title || part, path: route.path }
            : { title: part, children: {} };
      }

      if (index !== pathParts.length - 1) {
        currentLevel = currentLevel[part].children;
      }
    });
  });

  return hierarchy;
};

const hierarchicalRoutes = computed(() => {
  const hierarchy = buildHierarchy(flatRoutes.value);

  // 将对象转换为数组以便于渲染
  function objectToArray(obj) {
    return Object.keys(obj).map((key) => ({
      ...obj[key],
      children: obj[key].children
        ? objectToArray(obj[key].children)
        : undefined,
    }));
  }

  return objectToArray(hierarchy);
});

function goToRoute(path) {
  router.push(path);
  // const list = e.split('-')
  // const item = hierarchicalRoutes.value[list[0]].children[list[1]];
  // console.log(item)
}
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100vh;

  .left-menu {
    height: 100%;
    min-width: 200px;

    :deep(.el-card) {
      border-radius: 10px !important; /* 修改圆角 */
    }

    :deep(.el-card__body) {
      padding: 0;
    }

    .menu-card {
      height: calc(100% - 20px);
      margin-top: 10px;
      margin-left: 10px;
      background-color: #fafafa;
    }
  }
}
</style>
