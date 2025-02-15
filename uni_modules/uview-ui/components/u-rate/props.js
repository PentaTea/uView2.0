import { $u } from '../../index';export default {
    computed: { value() { return this.modelValue } },
    props: {
        // 用于v-model双向绑定选中的星星数量
        modelValue: {
            type: [String, Number],
            default: $u.props.rate.value
        },
        // 要显示的星星数量
        count: {
            type: [String, Number],
            default: $u.props.rate.count
        },
        // 是否不可选中
        disabled: {
            type: Boolean,
            default: $u.props.rate.disabled
        },
        // 星星的大小，单位px
        size: {
            type: [String, Number],
            default: $u.props.rate.size
        },
        // 未选中时的颜色
        inactiveColor: {
            type: String,
            default: $u.props.rate.inactiveColor
        },
        // 选中的颜色
        activeColor: {
            type: String,
            default: $u.props.rate.activeColor
        },
        // 星星之间的间距，单位px
        gutter: {
            type: [String, Number],
            default: $u.props.rate.gutter
        },
        // 最少能选择的星星个数
        minCount: {
            type: [String, Number],
            default: $u.props.rate.minCount
        },
        // 是否允许半星
        allowHalf: {
            type: Boolean,
            default: $u.props.rate.allowHalf
        },
        // 选中时的图标(星星)
        activeIcon: {
            type: String,
            default: $u.props.rate.activeIcon
        },
        // 未选中时的图标(星星)
        inactiveIcon: {
            type: String,
            default: $u.props.rate.inactiveIcon
        },
        // 是否可以通过滑动手势选择评分
        touchable: {
            type: Boolean,
            default: $u.props.rate.touchable
        }
    }
}
