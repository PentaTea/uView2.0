<template>
	<picker-view-column>
		<view class="u-picker-column">

		</view>
	</picker-view-column>
</template>

<script>
	import props from './props.js';
	/**
	 * PickerColumn 
	 * @description 
	 * @tutorial url
	 * @property {String}
	 * @event {Function}
	 * @example
	 */
	import { $u } from '../../index';export default {
		name: 'u-picker-column',
		mixins: [$u.mpMixin, $u.mixin,props],
	}
</script>

<style lang="scss" scoped>
	@import "../../libs/css/components.scss";
</style>
