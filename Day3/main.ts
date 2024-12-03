import readFile from "../utils/readFile.ts"

const myString = await readFile("../files/day3.txt")
const re = /mul\(\d{0,3},\d{0,3}\)/g

const mul = (x: number, y: number) => x * y

const foundArray =
  myString &&
  [...myString.matchAll(re)].map((i) =>
    i[0].replace("mul", "").replace("(", "").replace(")", "").split(",")
  )
if (foundArray) {
  let total = 0
  foundArray.map((i) => {
    total += mul(Number(i[0]), Number(i[1]))
  })
  console.log("answer is ", total)
}
