import { $u } from '../../index';export default {
    props: {
        // 分组标题
        title: {
            type: String,
            default: $u.props.cellGroup.title
        },
        // 是否显示外边框
        border: {
            type: Boolean,
            default: $u.props.cellGroup.border
        }
    }
}
