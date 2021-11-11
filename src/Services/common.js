const tagList = [
  { name: "JavaScript", backgroundColor: "#FED9C9" },
  { name: "React JS", backgroundColor: "#DEF3FD" },
  { name: "CSS", backgroundColor: "#FFEFD8" },
  { name: "SCSS", backgroundColor: "#FFDDE4" },
  { name: "SASS", backgroundColor: "#FFDDE4" },
  { name: "Angular", backgroundColor: "#FF7F7F" },
  { name: "Material UI", backgroundColor: "#90ee90" },
]

export const getStyle = name => {
  const matchedTag = tagList.filter(
    tag => tag.name.toLowerCase() === name.toLowerCase()
  )
  if (matchedTag && matchedTag.length) {
    return { backgroundColor: matchedTag[0].backgroundColor }
  }
  return {
    backgroundColor: "#D3D3D3",
  }
}
