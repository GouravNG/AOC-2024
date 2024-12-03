import readFile from "../utils/readFile.ts"

const myString = await readFile("../files/day3.txt")
//regex for part 1
const re = /mul\(\d{0,3},\d{0,3}\)/g
const reNegative = /don't\(\).*?do\(\)/g

const mul = (x: number, y: number) => x * y
let total2 = 0
let total = 0

const foundArray2 = myString && myString.match(reNegative)
if (Array.isArray(foundArray2)) {
  const test = foundArray2.map((i) => {
    return i.match(re)
  })
  if (test) {
    const test2 = test.map((i) => {
      if (i) {
        return i.map((i) =>
          i.replace("mul", "").replace("(", "").replace(")", "").split(",")
        )
      }
    })
    test2.flat(1).map((i) => {
      total2 = total2 + mul(Number(i[0]), Number(i[1]))
    })
  }
}

const foundArray =
  myString &&
  [...myString.matchAll(re)].map((i) =>
    i[0].replace("mul", "").replace("(", "").replace(")", "").split(",")
  )

//positive
if (foundArray) {
  foundArray.map((i) => {
    total += mul(Number(i[0]), Number(i[1]))
  })
}

console.log(total - total2)
