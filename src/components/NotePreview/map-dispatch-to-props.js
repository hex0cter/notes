import { updateActiveIndex } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onUpdateActiveIndex: (payload) => dispatch(updateActiveIndex(payload))
})

export default mapDispatchToProps
