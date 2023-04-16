import { useRef } from "react";

function DictionaryTable({ word, meanings, phonetics, sourceUrls }) {
  const audioRef = useRef(null);
  let audioSrc = "";

  function handlePlay() {
    audioRef.current.play();
  }

  for (const phonetic of phonetics) {
    if (phonetic.audio !== "") {
      audioSrc = phonetic.audio;
      break;
    }
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
            <audio ref={audioRef} src={audioSrc} />
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
            <a href={sourceUrls[0]}>{sourceUrls[0]}</a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DictionaryTable;
