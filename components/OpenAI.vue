<template>
  <div class="min-h-screen  bg-gray-100">
    <h2 class="text-center mt-3px">{{ componentVue.title }}</h2>
    <div class="absolute top-0 mx-10px">
      <a href="https://github.com/wzc520pyfm/clover-chat-GPT" target="_blank">
        <a-button type="link" size="large" icon="github"></a-button>
      </a>
    </div>
    <div class="absolute top-0 right-5px flex-x-end m-10px gap-5px">
      <span class="vertical-middle">作画</span>
      <a-switch default-checked @change="onChange" />
      <span class="vertical-middle">对话</span>
    </div>
    <keep-alive>
      <component :is="componentVue.component" />
    </keep-alive>
    <div class="my-15px text-center">请等待, 访问源位于国外, 数据传输需传输一定时间</div>
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
