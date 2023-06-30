import { atom } from 'nanostores'
const initialColors = {
  current: '',
  selected: [],
  availableColors: [
    {hex: '#FF0000', name: 'Red'},
    {hex: '#00FF00', name: 'Green'},
    {hex: '#0000FF', name: 'Blue'},
    {hex: '#FFFF00', name: 'Yellow'},
    {hex: '#FF00FF', name: 'Magenta'},
    {hex: '#00FFFF', name: 'Cyan'},
    {hex: '#000000', name: 'Black'},
    {hex: '#FFFFFF', name: 'White'},
  ],
  isCopied: false
}

export const colors = atom(initialColors);

export const selectColor = (color) => {
  colors.set({ ...colors.get(), current: color })
  colors.set({ ...colors.get(), selected: [...colors.get() .selected, color]})
}

export const copyColor = () => {
  colors.set({ ...colors.get(), isCopied: true })
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