import React, { useState } from "react";
import axios from "axios";
import SearchBox from "./SearchBox";
import SearchResults from "./SearchResults";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.trim() !== "") {
      setLoading(true);
      try {
        const response = await axios.get("https://itunes.apple.com/search", {
          params: {
            term: searchTerm,
            media: "music",
            entity: "song",
            limit: 10,
          },
        });
        setResults(response.data.results);
      } catch (error) {
        console.error("Error searching iTunes:", error);
        setResults([]);
      }
      setLoading(false);
    }
  };

  const handlePlayPause = (previewUrl) => {
    const audio = new Audio(previewUrl);
    if (audio.currentTime > 0 && !audio.paused) {
      audio.pause();
      audio.currentTime = 0;
    } else {
      audio.play();
    }
  };

  return (
    <div className="App">
      <h1>iTunes Search App</h1>
      <SearchBox
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        onSearch={handleSearch}
      />
      <SearchResults
        loading={loading}
        results={results}
        handlePlayPause={handlePlayPause}
      />
    </div>
  );
};

export default App;
