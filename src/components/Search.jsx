import { useState } from 'react';
import SearchIcon from "../assets/search icon.svg"

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
      if (!response.ok) {
        throw new Error('Word not found');
      }
      const data = await response.json();
      setResults(data);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
    
      <div className={`rounded-full overflow-hidden flex flex-row justify-evenly items-center ${
          isFocused ? 'border-gray-600' : 'border-gray-300'
        } border-2`}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none rounded-full pl-4 py-2 w-full font-inter"
          placeholder="Search for a word..."
        >
          
        </input>

        <button
          onClick={handleSearch}
          className="bg-lightGreen p-2 rounded-full"
        >
          <img 
            src={SearchIcon}
            className="w-10 h-8"
            alt="" />
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {error && <p className="text-green text-3xl uppercase text-center font-poppins font-semibold mt-3">{error}</p>}

      {results.length > 0 && (
        <div>
          {results.map((result, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold text-lg">{result.word}</h3>
              {result.meanings.map((meaning, mIndex) => (
                <div key={mIndex}>
                  <p className="italic">{meaning.partOfSpeech}</p>
                  {meaning.definitions.map((definition, dIndex) => (
                    <p key={dIndex} className="mb-2">{definition.definition}</p>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
