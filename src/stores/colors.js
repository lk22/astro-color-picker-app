import { atom } from 'nanostores'
const initialColors = {
  current: '',
  selected: [],
  availableColors: [
    {key: 'red', value: '#ff0000'},
    {key: 'green', value: '#00ff00'},
    {key: 'blue', value: '#0000ff'},
    {key: 'yellow', value: '#ffff00'},
    {key: 'cyan', value: '#00ffff'},
    {key: 'magenta', value: '#ff00ff'},
    {key: 'black', value: '#000000'},
    {key: 'white', value: '#ffffff'},
    {key: 'gray', value: '#808080'},
    {key: 'lightgray', value: '#c0c0c0'},
    {key: 'darkgray', value: '#404040'},
    {key: 'brown', value: '#a52a2a'},
    {key: 'orange', value: '#ffa500'},
    {key: 'purple', value: '#800080'},
    {key: 'pink', value: '#ffc0cb'},
    {key: 'gold', value: '#ffd700'},
    {key: 'silver', value: '#c0c0c0'},
    {key: 'lime', value: '#00ff00'},
    {key: 'olive', value: '#808000'},
    {key: 'navy', value: '#000080'},
    {key: 'teal', value: '#008080'},
    {key: 'maroon', value: '#800000'},
    {key: 'fuchsia', value: '#ff00ff'},
    {key: 'aqua', value: '#00ffff'},
    {key: 'aliceblue', value: '#f0f8ff'},
    {key: 'antiquewhite', value: '#faebd7'},
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