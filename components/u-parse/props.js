import { $u } from '../../index';export default {
    props: {
        // #ifdef APP-PLUS-NVUE
        bgColor: String,
        // #endif
        content: String,
        copyLink: {
		  type: Boolean,
		  default: $u.props.parse.copyLink
        },
        domain: String,
        errorImg: {
		  type: String,
		  default: $u.props.parse.errorImg
        },
        lazyLoad: {
		  type: Boolean,
		  default: $u.props.parse.lazyLoad
        },
        loadingImg: {
		  type: String,
		  default: $u.props.parse.loadingImg
        },
        pauseVideo: {
		  type: Boolean,
		  default: $u.props.parse.pauseVideo
        },
        previewImg: {
		  type: Boolean,
		  default: $u.props.parse.previewImg
        },
        scrollTable: Boolean,
        selectable: Boolean,
        setTitle: {
		  type: Boolean,
		  default: $u.props.parse.setTitle
        },
        showImgMenu: {
		  type: Boolean,
		  default: $u.props.parse.showImgMenu
        },
        tagStyle: Object,
        useAnchor: null
	  }
}
