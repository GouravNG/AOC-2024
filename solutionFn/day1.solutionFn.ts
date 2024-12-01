export const findDistance = (left: string[], right: string[]) => {
  left.sort()
  right.sort()
  let sum = 0
  for (let i = 0; i < left.length; i++) {
    const diff = Number(left[i]) - Number(right[i])
    if (diff < 0) {
      sum += -diff
    } else {
      sum += diff
    }
  }
  console.log("The distance is ", sum)
}

export const findSimilarityScore = (left: string[], right: string[]) => {
  let tCount = 0
  for (let i = 0; i < left.length; i++) {
    let iCount = 0
    for (let j = 0; j < left.length; j++) {
      if (Number(left[i]) === Number(right[j])) {
        iCount += 1
      }
    }
    tCount += iCount * Number(left[i])
    iCount = 0
  }
  console.log("The Similarity Score is ", tCount)
}
