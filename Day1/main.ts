import readFile from "../utils/readFile.ts"

const data = await readFile("../files/day1.txt")
const fileDataasArray = data && data.split("\r\n")
if (Array.isArray(fileDataasArray)) {
  const fileData2 = fileDataasArray.map((i) => {
    return i.split("   ")
  })
  const left = fileData2.map((i) => {
    return i[0]
  })

  const right = fileData2.map((i) => {
    return i[1]
  })
  left.sort()
  right.sort()
  let sum = 0
  for (let i = 0; i < fileDataasArray.length; i++) {
    const diff = Number(left[i]) - Number(right[i])
    if (diff < 0) {
      sum += -diff
    } else {
      sum += diff
    }
  }
  console.log(sum)
}