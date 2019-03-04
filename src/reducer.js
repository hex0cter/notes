import * as actions from './actions'

// Default structure: {
//   activeIndex: 0,
//   notes: [
//     'foo',
//     'bar'
//   ]
// }
const defaultInitialNote = {
  lastUpdate: Date.now(),
  content: ''
}
const localNotes = JSON.parse(localStorage.getItem('local-notes') ||
                              JSON.stringify({notes: [defaultInitialNote]}))
const activeIndex = localNotes.activeIndex || 0
const initialState = {
  activeIndex,
  notes: localNotes.notes,
  activeNote: localNotes.notes[activeIndex] || defaultInitialNote,
  isSidebarOpen: false
}

function updateContent(state, newActiveContent) {
  const activeNote = {
    content: newActiveContent,
    lastUpdate: Date.now()
  }
  const notes = [...state.notes]
  notes[state.activeIndex] = activeNote

  const newState = {
    ...state,
    activeNote,
    notes
   }
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
    case actions.ACTION_ADD_NEW_NOTE: {
      const newNote = {
        content: '',
        lastUpdate: Date.now()
      }
      const notes = [newNote, ...state.notes]
      const activeIndex = 0
      return {
        ...state,
        activeIndex,
        activeNote: newNote,
        notes
      }
    }
    case actions.ACTION_UPDATE_ACTIVE_INDEX: {
      const activeIndex = action.payload
      const activeNote = [...state.notes][activeIndex]
      const newState = {
        ...state,
        activeIndex,
        activeNote
      }
      localStorage.setItem('local-notes', JSON.stringify(newState))
      return newState
    }
    default:
      console.log('Action type', action.type)
      return state
    }
  }

  export default reducer
