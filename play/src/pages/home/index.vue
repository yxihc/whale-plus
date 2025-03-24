<template>
  <div class="app-container">
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-panel-left"
      >
        <rect width="18" height="18" x="3" y="3" rx="2"></rect>
        <path d="M9 3v18"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
</script>

<style scoped lang="scss">
.app-container {
  display: flex;
  height: 100vh;

  .left-menu {
    height: 100%;

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
