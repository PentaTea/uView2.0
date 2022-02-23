import { $u } from '../../index';export default {
    props: {
        // 吸顶容器到顶部某个距离的时候，进行吸顶，在H5平台，NavigationBar为44px
        offsetTop: {
            type: [String, Number],
            default: $u.props.sticky.offsetTop
        },
        // 自定义导航栏的高度
        customNavHeight: {
            type: [String, Number],
            // #ifdef H5
            // H5端的导航栏属于“自定义”导航栏的范畴，因为它是非原生的，与普通元素一致
            default: 44,
            // #endif
            // #ifndef H5
            default: $u.props.sticky.customNavHeight
            // #endif
        },
        // 是否开启吸顶功能
        disabled: {
            type: Boolean,
            default: $u.props.sticky.disabled
        },
        // 吸顶区域的背景颜色
        bgColor: {
            type: String,
            default: $u.props.sticky.bgColor
        },
        // z-index值
        zIndex: {
            type: [String, Number],
            default: $u.props.sticky.zIndex
        },
        // 列表中的索引值
        index: {
            type: [String, Number],
            default: $u.props.sticky.index
        }
    }
}
