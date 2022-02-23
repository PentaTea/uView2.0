import { $u } from '../../index';export default {
    props: {
        // 激活部分的颜色
        activeColor: {
            type: String,
            default: $u.props.lineProgress.activeColor
        },
        inactiveColor: {
            type: String,
            default: $u.props.lineProgress.color
        },
        // 进度百分比，数值
        percentage: {
            type: [String, Number],
            default: $u.props.lineProgress.inactiveColor
        },
        // 是否在进度条内部显示百分比的值
        showText: {
            type: Boolean,
            default: $u.props.lineProgress.showText
        },
        // 进度条的高度，单位px
        height: {
            type: [String, Number],
            default: $u.props.lineProgress.height
        }
    }
}
