import readFile from "../utils/readFile.ts"

const data = await readFile("../files/day2.txt")
const fileArray = data && data.split("\r\n")
let inputArray
if (Array.isArray(fileArray)) {
  inputArray = fileArray.map((i) => i.replaceAll(" ", ",").split(","))
}

let positiveReports = 0

const findDifference = (first: number, second: number) => {
  return second - first
}

const isIncresing = (first: number, second: number) => {
  return findDifference(first, second) > 0
}

const increasingFlow = (array: string[], sourceOfTruth: boolean) => {
  let count = 0
  for (let i = 0; i < array.length - 1; i++) {
    const status = isIncresing(Number(array[i]), Number(array[i + 1]))
    const diff = findDifference(Number(array[i]), Number(array[i + 1]))
    if (sourceOfTruth === status && diff <= 3 && diff !== 0) {
      if (i === array.length - 2) positiveReports += 1
      else continue
    } else {
      count++
      if (count <= 1) {
        if (i + 2 === array.length) positiveReports += 1
        const status = isIncresing(Number(array[i]), Number(array[i + 2]))
        const diff = findDifference(Number(array[i]), Number(array[i + 2]))
        if (sourceOfTruth === status && diff <= 3 && diff !== 0) {
          i++
          if (i === array.length - 2) positiveReports += 1
          continue
        } else {
          break
        }
      }
    }
  }
}

const descresingFlow = (array: string[], sourceOfTruth: boolean) => {
  let count = 0
  for (let i = 0; i < array.length - 1; i++) {
    const status = !isIncresing(Number(array[i]), Number(array[i + 1]))
    const diff = findDifference(Number(array[i]), Number(array[i + 1])) * -1
    if (!sourceOfTruth === status && diff <= 3 && diff !== 0) {
      if (i === array.length - 2) positiveReports += 1
      else continue
    } else {
      count++
      if (count <= 1) {
        if (i + 2 === array.length) positiveReports += 1
        const status = !isIncresing(Number(array[i]), Number(array[i + 2]))
        const diff = findDifference(Number(array[i]), Number(array[i + 2])) * -1
        if (!sourceOfTruth === status && diff <= 3 && diff !== 0) {
          i++
          if (i === array.length - 2) positiveReports += 1
          continue
        } else {
          break
        }
      }
    }
  }
}

if (Array.isArray(inputArray)) {
  inputArray.map((report) => {
    const sourceOfTruth = Number(report[1]) - Number(report[0]) > 0
    if (sourceOfTruth === true) increasingFlow(report, sourceOfTruth)
    else descresingFlow(report, sourceOfTruth)
  })
}

console.log(positiveReports)
