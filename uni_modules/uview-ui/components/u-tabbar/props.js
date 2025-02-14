import { $u } from '../../index';export default {
    computed: { value() { return this.modelValue } },
    props: {
        // 当前匹配项的name
        modelValue: {
            type: [String, Number, null],
            default: $u.props.tabbar.value
        },
        // 是否为iPhoneX留出底部安全距离
        safeAreaInsetBottom: {
            type: Boolean,
            default: $u.props.tabbar.safeAreaInsetBottom
        },
        // 是否显示上方边框
        border: {
            type: Boolean,
            default: $u.props.tabbar.border
        },
        // 元素层级z-index
        zIndex: {
            type: [String, Number],
            default: $u.props.tabbar.zIndex
        },
        // 选中标签的颜色
        activeColor: {
            type: String,
            default: $u.props.tabbar.activeColor
        },
        // 未选中标签的颜色
        inactiveColor: {
            type: String,
            default: $u.props.tabbar.inactiveColor
        },
        // 是否固定在底部
        fixed: {
            type: Boolean,
            default: $u.props.tabbar.fixed
        },
        // fixed定位固定在底部时，是否生成一个等高元素防止塌陷
        placeholder: {
            type: Boolean,
            default: $u.props.tabbar.placeholder
        }
    }
}
