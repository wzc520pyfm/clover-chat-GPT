<!-- eslint-disable vue/no-v-model-argument -->
<!-- Please remove this file from your project -->
<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <a-spin :spinning="isLoading" size="large" tip="思考中...">
      <h1 style="text-align: center;">向AI提问</h1>
      <div style="position: fixed; bottom: 50px; left: 0;right: 0; text-align: center;">
        <a-input-group compact>
          <a-input v-model:value="question"
            style="width: calc(100% - 200px); box-shadow: rgb(0 0 0 / 10%) 0px 2px 12px 0px;" />
          <a-button type="primary" @click="sendMessage">发送</a-button>
        </a-input-group>
      </div>
      <no-ssr>
        <mavon-editor v-model="res" :toolbars="{}" :editable="true" :subfield="false" default-open="preview"
          :toolbars-flag="false" class="markdown-body" style="width: 100%; height: 60vmin;">
        </mavon-editor>
      </no-ssr>
      <div style="margin: 15px 15px;">请等待, 访问源位于国外, 数据传输需传输一定时间</div>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Configuration, OpenAIApi } from "openai";

const isLoading = ref(false)
const question = ref('')
const res = ref('等待询问')
const configuration = new Configuration({
  organization: "org-mvGmOG9Wjd3szwU5aeeUt9NO",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

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
