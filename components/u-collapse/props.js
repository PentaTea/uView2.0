import { $u } from '../../index';export default {
    computed: { value() { return this.modelValue } },
    props: {
        // 当前展开面板的name，非手风琴模式：[<string | number>]，手风琴模式：string | number
        modelValue: {
            type: [String, Number, Array, null],
            default: $u.props.collapse.value
        },
        // 是否手风琴模式
        accordion: {
            type: Boolean,
            default: $u.props.collapse.accordion
        },
        // 是否显示外边框
        border: {
            type: Boolean,
            default: $u.props.collapse.border
        }
    }
}
