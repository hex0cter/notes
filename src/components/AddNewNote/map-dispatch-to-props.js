import { addNewNote } from '../../actions'

const mapDispatchToProps = (dispatch) => ({
  onAddNewNote: () => dispatch(addNewNote())
})

export default mapDispatchToProps
