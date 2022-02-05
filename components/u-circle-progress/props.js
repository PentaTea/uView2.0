import { $u } from '../../index';export default {
    props: {
        percentage: {
            type: [String, Number],
            default: $u.props.circleProgress.percentage
        }
    }
}
