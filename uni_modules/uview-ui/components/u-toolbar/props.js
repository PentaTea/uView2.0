import { $u } from '../../index';export default {
    props: {
        // 是否展示工具条
        show: {
            type: Boolean,
            default: $u.props.toolbar.show
        },
        // 取消按钮的文字
        cancelText: {
            type: String,
            default: $u.props.toolbar.cancelText
        },
        // 确认按钮的文字
        confirmText: {
            type: String,
            default: $u.props.toolbar.confirmText
        },
        // 取消按钮的颜色
        cancelColor: {
            type: String,
            default: $u.props.toolbar.cancelColor
        },
        // 确认按钮的颜色
        confirmColor: {
            type: String,
            default: $u.props.toolbar.confirmColor
        },
        // 标题文字
        title: {
            type: String,
            default: $u.props.toolbar.title
        }
    }
}
