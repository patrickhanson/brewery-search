import './App.css';
import React, {useState} from 'react';
import SearchResults from './SearchResults'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [textInput, setTextInput] = useState('')
  const [breweryData, setBreweryData] = useState([])

  const handleChange = (event) => {
    setTextInput(event.target.value)
  }

  const getBrews = () => {
    function sortBreweries(a, b) {
      const brewA = a.name.toLowerCase()
      const brewB = b.name.toLowerCase()

      let comparison = 0
      if (brewA > brewB) {
        comparison = 1
      } else if (brewB > brewA) {
        comparison = -1
      }
      return comparison
    }
    
    try {
      fetch(`https://api.openbrewerydb.org/breweries/search?query=${textInput}`)
      .then(response => response.json())
      .then(data => {
        setBreweryData(data.sort(sortBreweries))
      })
    }
    catch(error) {
      alert('No Results! Please try again.')
    }
  }
  
  return (
    <div className="App">
      <div className='headerContainer' >
        <Header />
      </div>
      <div className='inputContainer'>
        <input type='text' value={textInput} placeholder='Search Breweries' className='textInput' onChange={handleChange} />
        <input type='submit' className='submitButton' onClick={getBrews} />
      </div>
      {breweryData.length > 0 &&
        <SearchResults breweryArray={breweryData} searchParam={textInput} />
        
      }
      <div className='footerContainer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
