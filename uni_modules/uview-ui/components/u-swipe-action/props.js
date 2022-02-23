import { $u } from '../../index';export default {
    props: {
        // 是否自动关闭其他swipe按钮组
        autoClose: {
            type: Boolean,
            default: $u.props.swipeAction.autoClose
        }
    }
}
