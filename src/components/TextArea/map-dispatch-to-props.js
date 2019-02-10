import { updateContent, closeSidebar } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onUpdateContent: (content) => dispatch(updateContent(content)),
  onCloseSidebar: () => dispatch(closeSidebar())
})

export default mapDispatchToProps
