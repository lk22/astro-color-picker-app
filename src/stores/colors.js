import { atom } from 'nanostores'
const initialColors = {
  current: '',
  selected: [],
  availableColors: [
    {key: 'red', value: '#ff0000', isCopied: false},
    {key: 'green', value: '#00ff00', isCopied: false},
    {key: 'blue', value: '#0000ff', isCopied: false},
    {key: 'yellow', value: '#ffff00', isCopied: false},
    {key: 'cyan', value: '#00ffff', isCopied: false},
    {key: 'magenta', value: '#ff00ff', isCopied: false},
    {key: 'black', value: '#000000', isCopied: false},
    {key: 'white', value: '#ffffff', isCopied: false},
    {key: 'gray', value: '#808080', isCopied: false},
    {key: 'lightgray', value: '#c0c0c0', isCopied: false},
    {key: 'darkgray', value: '#404040', isCopied: false},
    {key: 'brown', value: '#a52a2a', isCopied: false},
    {key: 'orange', value: '#ffa500', isCopied: false},
    {key: 'purple', value: '#800080', isCopied: false},
    {key: 'pink', value: '#ffc0cb', isCopied: false},
    {key: 'gold', value: '#ffd700', isCopied: false},
    {key: 'silver', value: '#c0c0c0', isCopied: false},
    {key: 'lime', value: '#00ff00', isCopied: false},
    {key: 'olive', value: '#808000', isCopied: false},
    {key: 'navy', value: '#000080', isCopied: false},
    {key: 'teal', value: '#008080', isCopied: false},
    {key: 'maroon', value: '#800000', isCopied: false},
    {key: 'fuchsia', value: '#ff00ff', isCopied: false},
    {key: 'aqua', value: '#00ffff', isCopied: false},
    {key: 'aliceblue', value: '#f0f8ff', isCopied: false},
    {key: 'antiquewhite', value: '#faebd7', isCopied: false},
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