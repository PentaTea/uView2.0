import { $u } from '../../index';export default {
    props: {
        // 用于滚动到指定item
        anchor: {
            type: [String, Number],
            default: $u.props.listItem.anchor
        }
    }
}
