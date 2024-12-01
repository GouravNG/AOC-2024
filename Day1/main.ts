import {
  findDistance,
  findSimilarityScore,
} from "../solutionFn/day1.solutionFn.ts"
import readFile from "../utils/readFile.ts"

const data = await readFile("../files/day1.txt")
const fileArray = data && data.split("\r\n")

if (Array.isArray(fileArray)) {
  const fileData2 = fileArray.map((i) => i.split("   "))
  const left = fileData2.map((i) => i[0])
  const right = fileData2.map((i) => i[1])
  findDistance(left, right)
  findSimilarityScore(left, right)
}
