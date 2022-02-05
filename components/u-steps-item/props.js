import { $u } from '../../index';export default {
    props: {
        // 标题
        title: {
            type: [String, Number],
            default: $u.props.stepsItem.title
        },
        // 描述文本
        desc: {
            type: [String, Number],
            default: $u.props.stepsItem.desc
        },
        // 图标大小
        iconSize: {
            type: [String, Number],
            default: $u.props.stepsItem.iconSize
        },
        // 当前步骤是否处于失败状态
        error: {
            type: Boolean,
            default: $u.props.stepsItem.error
        }
    }
}
