<template>
	<view
		class="u-slider"
		:style="[$u.addStyle(customStyle)]"
	>
		<slider
			:min="min"
			:max="max"
			:step="step"
			:value="value"
			:activeColor="activeColor"
			:inactiveColor="inactiveColor"
			:blockSize="$u.getPx(blockSize)"
			:blockColor="blockColor"
			:showValue="showValue"
			:disabled="disabled"
			@changing="changingHandler"
			@change="changeHandler"
		></slider>
	</view>
</template>

<script>
	import props from './props.js'
	import { $u } from '../../index';export default {
		name: 'u--slider',
		mixins: [$u.mpMixin, $u.mixin, props],
		methods: {
			// 拖动过程中触发
			changingHandler(e) {
				const {
					value
				} = e.detail
				// 更新v-model的值
				this.$emit('update:modelValue', value)
				// 触发事件
				this.$emit('changing', value)
			},
			// 滑动结束时触发
			changeHandler(e) {
				const {
					value
				} = e.detail
				// 更新v-model的值
				this.$emit('update:modelValue', value)
				// 触发事件
				this.$emit('change', value)
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
</style>
