<script setup lang="ts">
import { ref } from 'vue';
import { uesTestDialog } from './uesTestDialog.ts';

const dialogFormVisible = ref(false);

const testDialog = uesTestDialog();

function showDialog() {
  // dialogFormVisible.value = true;
  testDialog.show({
    title: '测试弹窗',
    content: '测试弹窗内容',
  });
}
</script>

<template>
  <button @click="dialogFormVisible = true">打开弹窗</button>
  <button @click="showDialog">打开弹窗函数式</button>
  <div id="testxxx"></div>
<!--  <el-dialog v-model="dialogFormVisible">-->
<!--    divasdasd-->
<!--    <template #footer>-->
<!--      <div class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="dialogFormVisible = false">-->
<!--          Confirm-->
<!--        </el-button>-->
<!--      </div>-->
<!--    </template>-->
<!--  </el-dialog>-->
</template>

<style scoped></style>
