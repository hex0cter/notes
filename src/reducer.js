import * as actions from './actions'

// Default structure: {
//   activeIndex: 0,
//   notes: [
//     'foo',
//     'bar'
//   ]
// }
const localNotes = JSON.parse(localStorage.getItem('local-notes') || '{"notes": []}')
const activeIndex = localNotes.activeIndex || 0

const initialState = {
  activeIndex,
  notes: localNotes.notes,
  activeContent: localNotes.notes[activeIndex] || '',
  isSidebarOpen: false
}

function updateContent(state, newActiveContent) {
  const newState = { ...state }
  newState.notes[state.activeIndex] = newActiveContent
  newState.activeContent = newActiveContent
  localStorage.setItem('local-notes', JSON.stringify(newState))

  return newState
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ACTION_UPDATE_CONTENT: {
      return updateContent(state, action.payload)
    }
    case actions.ACTION_UPDATE_SIDEBAR_OPEN: {
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen
      }
    }
    case actions.ACTION_CLOSE_SIDEBAR: {
      return {
        ...state,
        isSidebarOpen: false
      }
    }
    default:
      console.log('Action type', action.type)
      return state
    }
  }

  export default reducer
