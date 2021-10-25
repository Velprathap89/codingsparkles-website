import React, { useState } from "react"
import { StaticQuery, graphql, navigate } from "gatsby"
import { Box, FormControl, TextField, makeStyles } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"

const useStyles = makeStyles(theme => ({
  boxRoot: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
  },
  inputRoot: {
    color: "purple",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "grey"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "lightgrey"
    }
  }
}))

const SearchComponent = data => {
  const defaultQuery = ""
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.nodes || []
  const classes = useStyles()
  const [postDetails, setPostDetails] = useState({
    filteredData: [],
    query: defaultQuery,
  })
  const [selectedValue, setSelectedValue] = useState([])

  const handleChange = (event, newInputValue) => {
    const query = newInputValue
    const filteredResults = posts.filter(post => {
      const { description, title, tags } = post.frontmatter
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase()) ||
        (tags && tags.join("").toLowerCase().includes(query.toLowerCase()))
      )
    })
    const filteredData =
      filteredResults &&
      filteredResults.map(fData => ({
        title: fData.frontmatter.title,
      }))
    setPostDetails({
      query,
      filteredData,
    })
  }

  const handleSelection = (event, newValue) => {
    if (newValue?.title) {
      const selectedPost = posts.find(
        post => post.frontmatter.title === newValue.title
      )
      const slug = selectedPost.fields.slug
      navigate(slug)
      setSelectedValue(newValue)
    }
  }

  return (
    <Box className={classes.boxRoot}>
      <FormControl variant="outlined">
        <Autocomplete
          id="search-post"
          size="small"
          classes={classes}
          noOptionsText={'Enter any charecters'}
          options={postDetails.filteredData}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField {...params} label="Search Post" variant="outlined" />
          )}
          inputValue={postDetails.query}
          onInputChange={handleChange}
          value={selectedValue}
          onChange={handleSelection}
        />
      </FormControl>
    </Box>
  )
}

const Search = () => {
  return (
    <StaticQuery
      query={graphql`
        query SearchQuery {
          allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            nodes {
              excerpt
              frontmatter {
                title
                tags
                description
              }
              fields {
                slug
              }
            }
          }
        }
      `}
      render={data => <SearchComponent {...data} />}
    />
  )
}

export default Search
