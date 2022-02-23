import { $u } from '../../index';export default {
    props: {
        bgColor: {
            type: String,
            default: $u.props.statusBar.bgColor
        }
    }
}
