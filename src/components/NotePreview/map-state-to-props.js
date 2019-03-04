const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    activeIndex: state.activeIndex
  }
}

export default mapStateToProps
