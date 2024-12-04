import { getDataLines } from '../utils'
import {
  getLists,
  getDistances,
  getTotalDistance,
  sortList,
  getAppearances,
} from './helpers'

const solvePart1 = async () => {
  const dataPath = './1/data.txt'
  const data = await getDataLines(dataPath)
  const { a, b } = getLists(data)
  const distances = getDistances(a.sort(sortList), b.sort(sortList))
  const result = getTotalDistance(distances)
  console.log('🎄 part 1: ', result)
}

solvePart1()

const solvePart2 = async () => {
  const dataPath = './1/data.txt'
  const data = await getDataLines(dataPath)
  const { a, b } = getLists(data)
  const appearances = getAppearances(a, b)
  const result = appearances.reduce((acc, cur) => acc + cur, 0)
  console.log('🎄 part 2: ', result)
}

solvePart2()
