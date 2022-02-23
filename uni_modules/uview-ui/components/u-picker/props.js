import { $u } from '../../index';export default {
    props: {
        // 是否展示picker弹窗
        show: {
            type: Boolean,
            default: $u.props.picker.show
        },
        // 是否展示顶部的操作栏
        showToolbar: {
            type: Boolean,
            default: $u.props.picker.showToolbar
        },
        // 顶部标题
        title: {
            type: String,
            default: $u.props.picker.title
        },
        // 对象数组，设置每一列的数据
        columns: {
            type: Array,
            default: $u.props.picker.columns
        },
        // 是否显示加载中状态
        loading: {
            type: Boolean,
            default: $u.props.picker.loading
        },
        // 各列中，单个选项的高度
        itemHeight: {
            type: [String, Number],
            default: $u.props.picker.itemHeight
        },
        // 取消按钮的文字
        cancelText: {
            type: String,
            default: $u.props.picker.cancelText
        },
        // 确认按钮的文字
        confirmText: {
            type: String,
            default: $u.props.picker.confirmText
        },
        // 取消按钮的颜色
        cancelColor: {
            type: String,
            default: $u.props.picker.cancelColor
        },
        // 确认按钮的颜色
        confirmColor: {
            type: String,
            default: $u.props.picker.confirmColor
        },
        // 选择器只有一列时，默认选中项的索引，从0开始
        singleIndex: {
            type: [String, Number],
            default: $u.props.picker.singleIndex
        },
        // 每列中可见选项的数量
        visibleItemCount: {
            type: [String, Number],
            default: $u.props.picker.visibleItemCount
        },
        // 选项对象中，需要展示的属性键名
        keyName: {
            type: String,
            default: $u.props.picker.keyName
        },
        // 是否允许点击遮罩关闭选择器
        closeOnClickOverlay: {
            type: Boolean,
            default: $u.props.picker.closeOnClickOverlay
        },
        // 各列的默认索引
        defaultIndex: {
            type: Array,
            default: $u.props.picker.defaultIndex
        },
		// 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
		immediateChange: {
			type: Boolean,
			default: $u.props.picker.immediateChange
		}
    }
}
