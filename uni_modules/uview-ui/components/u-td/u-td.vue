<template>
	<view class="u-td">
		
	</view>
</template>

<script>
	import props from './props.js';
	/** 
	 * Td 表格中的单元格
	 * @description 
	 * @tutorial url
	 * @property {String | Number} 
	 * @event {Function}
	 * @example
	 */
	import { $u } from '../../index';export default {
		name: 'u-td',
		mixins: [$u.mpMixin, $u.mixin,props],
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
	
</style>
