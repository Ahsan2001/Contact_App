import React from 'react'

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState("");

    const handleChange = (searchTerm) => {
        setSearchTerm(searchTerm.trim());
    }


  return (
    <div>
        <input type="text" placeholder="Search" value={searchTerm} onChange={handleChange} />
    </div>
  )
}

export default Search