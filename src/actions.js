export const ACTION_UPDATE_CONTENT = 'ACTION_UPDATE_CONTENT'
export const ACTION_UPDATE_SIDEBAR_OPEN = 'ACTION_UPDATE_SIDEBAR_OPEN'
export const ACTION_CLOSE_SIDEBAR = 'ACTION_CLOSE_SIDEBAR'

export function updateContent(payload) {
  return { type: ACTION_UPDATE_CONTENT, payload }
}

export function updateSidebarOpen(payload) {
  return { type: ACTION_UPDATE_SIDEBAR_OPEN, payload }
}

export function closeSidebar() {
  return { type: ACTION_CLOSE_SIDEBAR }
}
