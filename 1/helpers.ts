export const getLists = (str: string[]): { a: number[]; b: number[] } => {
  const a = []
  const b = []

  str.forEach((line: string) => {
    const values = line.split('   ')
    a.push(Number(values[0]))
    b.push(Number(values[1]))
  })

  return { a, b }
}

export const sortList = (a, b) => a - b

export const getDistances = (a: number[], b: number[]): number[] => {
  return a.map((value, index) => {
    return Math.abs(value - b[index])
  })
}

export const getTotalDistance = (distances: number[]): number => {
  return distances.reduce((previous, current) => previous + current, 0)
}

export const getAppearances = (a, b): number[] => {
  return a.map(value => {
    const appearances = b.filter(item => item === value)
    return value * appearances.length
  })
}
