const readFile = async (filePath: string) => {
  try {
    const fileContent = await Deno.readTextFile(filePath)
    return fileContent
  } catch (e) {
    console.log(e)
  }
}

export default readFile
