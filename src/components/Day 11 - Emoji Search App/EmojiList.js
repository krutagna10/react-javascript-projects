import React from "react";

const EmojiList = ({ emojis }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Index</th>
          <td>Emoji</td>
          <td>Title</td>
        </tr>
      </thead>
      <tbody>
        {emojis.length === 0 ? (
          <tr>
            <td colSpan="3">No such emoji found</td>
          </tr>
        ) : (
          <React.Fragment>
            {emojis.map((emoji, index) => (
              <tr key={index}>
                <td>{index}</td>
                <td>{emoji.symbol}</td>
                <td>{emoji.title}</td>
              </tr>
            ))}
          </React.Fragment>
        )}
      </tbody>
    </table>
  );
};

export default EmojiList;
