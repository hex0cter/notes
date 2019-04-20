export const ACTION_UPDATE_CONTENT = 'ACTION_UPDATE_CONTENT'
export const ACTION_UPDATE_SIDEBAR_OPEN = 'ACTION_UPDATE_SIDEBAR_OPEN'
export const ACTION_CLOSE_SIDEBAR = 'ACTION_CLOSE_SIDEBAR'
export const ACTION_ADD_NEW_NOTE = 'ACTION_ADD_NEW_NOTE'
export const ACTION_DELETE_NOTE = 'ACTION_DELETE_NOTE'
export const ACTION_DELETE_ALL_NOTES = 'ACTION_DELETE_ALL_NOTES'
export const ACTION_UPDATE_ACTIVE_INDEX = 'ACTION_UPDATE_ACTIVE_INDEX'

export function updateContent(payload) {
  return { type: ACTION_UPDATE_CONTENT, payload }
}

export function updateSidebarOpen(payload) {
  return { type: ACTION_UPDATE_SIDEBAR_OPEN, payload }
}

export function closeSidebar() {
  return { type: ACTION_CLOSE_SIDEBAR }
}

export function addNewNote() {
  return { type: ACTION_ADD_NEW_NOTE }
}

export function deleteNote(payload) {
  return { type: ACTION_DELETE_NOTE, payload }
}

export function deleteAllNotes() {
  return { type: ACTION_DELETE_ALL_NOTES }
}

export function updateActiveIndex(payload) {
  return { type: ACTION_UPDATE_ACTIVE_INDEX, payload}
}
