<!-- eslint-disable vue/no-v-model-argument -->
<template>
  <div class="bg-gray-100">
    <a-spin :spinning="isLoading" size="large" tip="思考中...">
      <div class="fixed bottom-50px left-0 right-0 text-center">
        <a-input-group compact>
          <a-input v-model:value="question" placeholder="可以问AI任何问题"
            style="width: calc(100% - 200px); box-shadow: rgb(0 0 0 / 10%) 0px 2px 12px 0px;" />
          <a-button type="primary" @click="sendMessage">发送</a-button>
        </a-input-group>
      </div>
      <no-ssr>
        <mavon-editor v-model="res" :toolbars="{}" :editable="true" :subfield="false" default-open="preview"
          :toolbars-flag="false" class="markdown-body w-100% h-60vh">
        </mavon-editor>
      </no-ssr>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useOpenAI } from '@/composables/openai';

const { openai } = useOpenAI()

const isLoading = ref(false)
const question = ref('')
const res = ref('等待询问')

const sendMessage = async () => {
  isLoading.value = true
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: question.value,
    temperature: 0.5,
    max_tokens: 2048,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });
  res.value = response.data.choices[0].text?.slice(2) as string
  isLoading.value = false
}
</script>
