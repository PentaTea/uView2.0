import { $u } from '../../index';export default {
    props: {
        // 轮播的长度
        length: {
            type: [String, Number],
            default: $u.props.swiperIndicator.length
        },
        // 当前处于活动状态的轮播的索引
        current: {
            type: [String, Number],
            default: $u.props.swiperIndicator.current
        },
        // 指示器非激活颜色
        indicatorActiveColor: {
            type: String,
            default: $u.props.swiperIndicator.indicatorActiveColor
        },
        // 指示器的激活颜色
        indicatorInactiveColor: {
            type: String,
            default: $u.props.swiperIndicator.indicatorInactiveColor
        },
		// 指示器模式，line-线型，dot-点型
		indicatorMode: {
		    type: String,
		    default: $u.props.swiperIndicator.indicatorMode
		}
    }
}
