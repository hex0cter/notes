import { updateActiveIndex, deleteNote } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onUpdateActiveIndex: (payload) => dispatch(updateActiveIndex(payload)),
  onDeleteNote: (payload) => dispatch(deleteNote(payload))
})

export default mapDispatchToProps
