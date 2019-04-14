import { deleteAllNotes } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onDeleteAllNotes: () => dispatch(deleteAllNotes())
})

export default mapDispatchToProps
