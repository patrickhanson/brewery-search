import React from 'react';
import './SearchResults.css';

const SearchResults = (props) => {
    let { breweryArray, searchParam } = props

    return (
        <div>
            <div className='resultTotal' >{breweryArray.length} results for "{searchParam}"</div>
            <div className='searchContent' >
                {breweryArray.map(brewery => {
                    return (
                        <div key={brewery.id} className='brewery' >
                            <div className='brewName' >{brewery.name}</div>
                            <div className='location' >
                                {brewery.city}, {brewery.state}
                            </div>
                            <a href={brewery.website_url} className='website' target='_blank' rel='noreferrer' >{brewery.website_url}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SearchResults;