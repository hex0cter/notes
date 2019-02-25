const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    activeIndex: state.activeIndex,
    notes: state.notes
  }
}

export default mapStateToProps
