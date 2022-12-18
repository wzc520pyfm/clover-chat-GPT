<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <h2 style="text-align: center; margin-top: 3px;">{{ componentVue.title }}</h2>
    <div style="position:absolute;top:0;margin: 0px 10px;">
      <a href="https://github.com/wzc520pyfm/clover-chat-GPT" target="_blank">
        <a-button type="link" size="large" icon="github"></a-button>
      </a>
    </div>
    <div style="position:absolute;top:0;right: 5px; display: flex;justify-content: flex-end;gap: 5px;margin: 10px;">
      <span style="vertical-align: middle;">作画</span>
      <a-switch default-checked @change="onChange" />
      <span style="vertical-align: middle;">对话</span>
    </div>
    <keep-alive>
      <component :is="componentVue.component" />
    </keep-alive>
    <div style="margin: 15px 15px; text-align: center;">请等待, 访问源位于国外, 数据传输需传输一定时间</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ChatVue from './OpenAI/Chat.vue';
import ImageGenerationVue from './OpenAI/ImageGeneration.vue';

const componentsArr = [
  {
    component: ChatVue,
    title: 'AI问答'
  },
  {
    component: ImageGenerationVue,
    title: 'AI作画'
  },
]
const componentVue = ref(componentsArr[0])

const onChange = (checked: Boolean) => {
  componentVue.value = checked ? componentsArr[0] : componentsArr[1]
}
</script>
