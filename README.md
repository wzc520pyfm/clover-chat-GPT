# clover-chat-GPT

### Quick Start

1. 注册一个openai帐号,获取token(token获取页: https://beta.openai.com/account/api-keys)
2. 将你的token替换到`components/OpenaiExample.vue`的29行
   ```js
   const configuration = new Configuration({
      organization: "org-mvGmOG9Wjd3szwU5aeeUt9NO",
      apiKey: "your token",
    });
   ```

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
