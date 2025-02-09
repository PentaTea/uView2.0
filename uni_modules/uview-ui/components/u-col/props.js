import { $u } from '../../index';export default {
    props: {
        // 占父容器宽度的多少等分，总分为12份
        span: {
            type: [String, Number],
            default: $u.props.col.span
        },
        // 指定栅格左侧的间隔数(总12栏)
        offset: {
            type: [String, Number],
            default: $u.props.col.offset
        },
        // 水平排列方式，可选值为`start`(或`flex-start`)、`end`(或`flex-end`)、`center`、`around`(或`space-around`)、`between`(或`space-between`)
        justify: {
            type: String,
            default: $u.props.col.justify
        },
        // 垂直对齐方式，可选值为top、center、bottom、stretch
        align: {
            type: String,
            default: $u.props.col.align
        },
        // 文字对齐方式
        textAlign: {
            type: String,
            default: $u.props.col.textAlign
        }
    }
}
