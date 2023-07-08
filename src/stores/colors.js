import { atom } from 'nanostores'

const initialColors = {
  backgroundColor: "#f9f9f9",
  primaryColor: '#c75955',
  secondaryColor: '#0000ff',
  linkColor: '#1a1a1a',
  textColor: '#0000ff',
  tertiaryColor: '#1a1a1a',
  buttonBackgroundColor: '#212121',
  buttonTextColor: '#f9f9f9'
}

export const colors = atom(initialColors);

export const selectColor = (color) => {
  colors.set({ ...colors.get(), current: color })
  colors.set({ ...colors.get(), selected: [...colors.get() .selected, color]})
}

export const setNewAvailableColors = (...newColors) => {
  // set new available colors
  colors.set({ ...colors.get(), availableColors: newColors })
}

export const setNewPrimaryColor = (color) => {
  colors.set({...colors.get(), primaryColor: color})
}

export const setNewSecondaryColor = (color) => {
  colors.set({...colors.get(), secondaryColor: color})
}

export const setNewBackgroundColor = (color) => {
  colors.set({...colors.get(), backgroundColor: color});
}

export const setNewTextColor = (color) => {
  colors.set({...colors.get(), textColor: color});
}

export const setNewButtonTextColor = (color) => {
  colors.set({...colors.get(), buttonTextColor: color});
}

export const setNewButtonColor = (color) => {
  colors.set({...colors.get(), buttonBackgroundColor: color});
}

export const setNewTertiaryColor = (color) => {
  colors.set({...colors.get(), tertiaryColor: color});
}

export const setNewLinkColor = (color) => {
  colors.set({...colors.get(), linkColor: color});
}

export const copyColor = () => {
  colors.set({ ...colors.get(), isCopied: true })
}

export const resetCopyColor = () => {
  colors.set({ ...colors.get(), isCopied: false })
}

export const getAvailableColors = () => {
  return colors.get().availableColors
}

export const getSeleectedColors = () => {
  return colors.get().selected
}

export const getCurrentColor = () => {
  return colors.get().current
}