import React from "react";

const SearchResults = ({ loading, results, handlePlayPause }) => {
  return (
    <div id="results">
      {loading ? (
        <p>Pretraživanje u tijeku...</p>
      ) : (
        <ul>
          {results.length === 0 ? (
            <p>Nema rezultata za traženi termin.</p>
          ) : (
            results.map((track) => (
              <li key={track.trackId}>
                {track.trackName} - {track.artistName}
                <button
                  className="play-button"
                  onClick={() => handlePlayPause(track.previewUrl)}
                >
                  Play
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
