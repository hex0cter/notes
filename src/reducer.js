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
  isSidebarOpen: false
}

function updateContent(state, newActiveContent) {
  const notes = [...state.notes]
  notes[state.activeIndex] = {
    content: newActiveContent,
    lastUpdate: Date.now()
  }

  const newState = {
    ...state,
    notes
   }
  localStorage.setItem('local-notes', JSON.stringify(newState))

  return newState
}

function deleteNote(state, indexToDelete) {
  const newState = {...state}
  const activeIndex = newState.activeIndex
  const notes = [...newState.notes]
  let updatedState

  if(indexToDelete > activeIndex) {
    notes.splice(indexToDelete, 1)
    updatedState = {
      ...newState,
      notes
    }
  } else if (indexToDelete < activeIndex) {
    notes.splice(indexToDelete, 1)
    const newActiveIndex = activeIndex - 1
    updatedState = {
      ...newState,
      notes,
      activeIndex: newActiveIndex,
    }
  } else if (indexToDelete === activeIndex) {
    if (activeIndex === 0) {
      if (newState.notes.length > 1) {
        notes.splice(indexToDelete, 1)
        updatedState = {
          ...newState,
          notes
        }
      } else {
        const notes = [{
          content: '',
          lastUpdate: Date.now()
        }]
        updatedState = {
          ...newState,
          notes,
          activeIndex: 0
        }
      }
    } else {
      notes.splice(indexToDelete, 1)
      const newActiveIndex = activeIndex - 1

      updatedState = {
        ...newState,
        notes,
        activeIndex: newActiveIndex,
      }
    }
  }

  localStorage.setItem('local-notes', JSON.stringify(updatedState))
  return updatedState
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
        notes
      }
    }
    case actions.ACTION_DELETE_NOTE: {
      return deleteNote(state, action.payload)
    }
    case actions.ACTION_DELETE_ALL_NOTES: {
      const newNote = {
        content: '',
        lastUpdate: Date.now()
      }
      const notes = [newNote]
      const activeIndex = 0

      return {
        ...state,
        activeIndex,
        notes
      }
    }
    case actions.ACTION_UPDATE_ACTIVE_INDEX: {
      console.log('switching index...')
      const activeIndex = action.payload
      const newState = {
        ...state,
        activeIndex,
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
