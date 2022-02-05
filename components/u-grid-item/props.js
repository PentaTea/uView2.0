import { $u } from '../../index';export default {
    props: {
        // 宫格的name
        name: {
            type: [String, Number, null],
            default: $u.props.gridItem.name
        },
        // 背景颜色
        bgColor: {
            type: String,
            default: $u.props.gridItem.bgColor
        }
    }
}
