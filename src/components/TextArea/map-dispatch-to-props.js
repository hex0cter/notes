import { updateContent } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onUpdateContent: content => dispatch(updateContent(content))
})

export default mapDispatchToProps
