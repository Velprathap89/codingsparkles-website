const tagList = [
  { name: "JavaScript", backgroundColor: "#FED9C9", className: 'js-tag' },
  { name: "React JS", backgroundColor: "#DEF3FD", className: 'react-tag' },
  { name: "CSS", backgroundColor: "#FFEFD8", className: 'css-tag' },
  { name: "SCSS", backgroundColor: "#FFDDE4", className: 'scss-tag'},
  { name: "SASS", backgroundColor: "#FFDDE4", className: 'sass-tag' },
  { name: "Angular", backgroundColor: "#FF7F7F", className: 'angular-tag' },
  { name: "Material UI", backgroundColor: "#90ee90", className: 'material-tag' },
]

export const getClassName = name => {
  const matchedTag = tagList.filter(
    tag => tag.name.toLowerCase() === name.toLowerCase()
  )
  if (matchedTag && matchedTag.length) {
    return matchedTag[0].className
  }
  return "js-tag"
}
