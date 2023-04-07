import { useState, useEffect } from "react";
import DictionaryTable from "./components/DictionaryTable/DictionaryTable";
import DictionaryForm from "./components/DictionaryForm/DictionaryForm";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en";

function DictionaryApp() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleWordSearch("hello");
  }, []);

  async function handleWordSearch(word) {
    setIsLoading(true);

    try {
      const response = await fetch(`${url}/${word}`);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      console.log(data[0]);
      setData(data[0]);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Dictionary App</h1>
      <DictionaryForm onWordSearch={handleWordSearch} />
      <DictionaryTable {...data} />
    </div>
  );
}

export default DictionaryApp;
