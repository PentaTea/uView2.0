# __UNOFFICIAL__ uView2 vue3-support version

- index.js
  - 删除filter相关代码
  - `prototype`修改为`config.globalProperties`
- 生命周期
  - beforeDestroy => beforeUnmount
  - destroyed => unmounted
- v-model适配
  - `('input` => `('update:modelValue`
  - `props.js`中`value: {` => `modelValue: {`
  - `props.js`中正则搜索`(^)(?=\s*prop[\s\S\r]*modelValue)` => `    computed: { value() { return this.modelValue } },\n`
- esm适配
  - 下载esm版本dayjs并替换
  - 预构建clipboard并替换