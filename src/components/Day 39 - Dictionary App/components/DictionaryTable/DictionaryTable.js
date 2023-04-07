import { useState, useRef } from "react";

function DictionaryTable({ word, meanings, phonetics, sourceUrls }) {
  const audioRef = useRef(null);

  function handlePlay() {
    setIsPlaying(true);
    audioRef.current.play();
  }

  return (
    <table style={{ width: "42rem" }}>
      <tbody>
        <tr>
          <th>Word</th>
          <td>{word.toUpperCase()}</td>
        </tr>
        <tr>
          <th>Audio</th>
          <td>
            <audio ref={audioRef} src={phonetics[0].audio} />
            <button onClick={handlePlay}>Play</button>
          </td>
        </tr>
        {meanings[0].definitions.map((item, index) => (
          <tr key={index}>
            <th>Meaning {index + 1}</th>
            <td>{item.definition}</td>
          </tr>
        ))}
        <tr>
          <th>Source</th>
          <td>
            <a href={sourceUrls[0]} target="_blank">
              {sourceUrls[0]}
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DictionaryTable;
