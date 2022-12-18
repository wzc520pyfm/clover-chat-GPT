<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class=" bg-gray-100">
    <a-spin :spinning="isLoading" size="large" tip="思考中..." class="h-70vh text-center">
      <img v-if="resUrl" :src="resUrl" class="w-70vmin h-70vmin mt-1vmin" />
      <div class="fixed bottom-50px left-0 right-0 text-center">
        <a-input-group compact>
          <a-input
v-model:value="description" placeholder="描述一幅画, 让AI来绘制"
            style="width: calc(100% - 200px); box-shadow: rgb(0 0 0 / 10%) 0px 2px 12px 0px;" />
          <a-button type="primary" @click="sendMessage">发送</a-button>
        </a-input-group>
      </div>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { message } from 'ant-design-vue';
import { useOpenAI } from '@/composables/openai';

const { openai } = useOpenAI()

const isLoading = ref(false)
const description = ref('')
const resUrl = ref('')

const sendMessage = async () => {
  try {
    isLoading.value = true
    const response = await openai.createImage({
      prompt: description.value,
      n: 1,
      size: '1024x1024'
    });
    resUrl.value = (response.data.data as any)[0].url
  } catch (err) {
    message.error('你的绘画请求被AI拒绝了!')
  } finally {
    isLoading.value = false
  }
}
</script>
