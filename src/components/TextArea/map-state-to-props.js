const mapStateToProps = (state) => {
  return {
    content: state.notes[state.activeIndex].content
  }
}

export default mapStateToProps
