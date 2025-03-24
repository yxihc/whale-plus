<script setup lang="ts">
import { ref } from 'vue';

const dialogFormVisible = ref(true);
</script>

<template>
  <el-dialog v-model="dialogFormVisible">
    divasdasd
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped></style>
