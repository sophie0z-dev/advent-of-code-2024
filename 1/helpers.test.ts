import { getDataLines } from '../utils'
import {
  getLists,
  sortList,
  getDistances,
  getTotalDistance,
  getAppearances,
} from './helpers'

describe('getLists', () => {
  test('splits lines into lists', async () => {
    const data = await getDataLines('./1/testData.txt')
    const result = getLists(data)

    expect(result.a).toEqual([3, 4, 2, 1, 3, 3])
    expect(result.b).toEqual([4, 3, 5, 3, 9, 3])
  })
})

describe('sortList', () => {
  test('sorts list from smallest to largest', async () => {
    const data = await getDataLines('./1/testData.txt')
    const { a, b } = getLists(data)
    const resultA = a.sort(sortList)
    const resultB = b.sort(sortList)

    expect(resultA).toEqual([1, 2, 3, 3, 3, 4])
    expect(resultB).toEqual([3, 3, 3, 4, 5, 9])
  })
})

describe('getDistances', () => {
  test('returns array of distances', async () => {
    const data = await getDataLines('./1/testData.txt')
    const { a, b } = getLists(data)
    const result = getDistances(a.sort(sortList), b.sort(sortList))

    expect(result).toEqual([2, 1, 0, 1, 2, 5])
  })
})

describe('getTotalDistance', () => {
  test('returns total distance', async () => {
    const data = await getDataLines('./1/testData.txt')
    const { a, b } = getLists(data)
    const distances = getDistances(a.sort(sortList), b.sort(sortList))
    const result = getTotalDistance(distances)

    expect(result).toEqual(11)
  })
})

describe('getAppearances', () => {
  test('returns array of appearances', async () => {
    const data = await getDataLines('./1/testData.txt')
    const { a, b } = getLists(data)
    const result = getAppearances(a, b)

    expect(result).toEqual([9, 4, 0, 0, 9, 9])
  })
})
