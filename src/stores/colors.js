import { atom } from 'nanostores'


const initialColors = {
  current: '#ff0000',
  selected: [],
  // availableColors,
  availableColors: [
    {key: 'red', value: '#ff0000', isCopied: false, variants: [
      '#ff000090',
      '#ff000080',
      '#ff000070',
      '#ff000060',
      '#ff000050',
      '#ff000040',  
    ]},
  ],
  backgroundColor: '#f9f9f9',
  primaryColor: '#ff0000',
  secondaryColor: '#0000ff',
  linkColor: '#1a1a1a',
  textColor: '#1a1a1a',
  isCopied: false
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

export const getColorVariant = (color) => {
  return colors.get().availableColors.find(c => c.key === color).variants
}