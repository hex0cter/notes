import { updateSidebarOpen } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onUpdateSidebarOpen: content => dispatch(updateSidebarOpen(content))
})

export default mapDispatchToProps
