import TabsTable from "./components/TabsTable/TabsTable";
import { useState, useEffect } from "react";
import TabsRadio from "./components/TabsRadio/TabsRadio";

const url = "https://course-api.com/react-tabs-project";

function TabsApp() {
  const [index, setIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJobs();
  }, []);

  async function fetchJobs() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Data not found");
      }
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      alert(`${error.name}: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  }

  function handleIndexChange(event) {
    setIndex(Number(event.target.value));
  }

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>Tabs App</h1>
      <TabsRadio index={index} jobs={jobs} onIndexChange={handleIndexChange} />
      <TabsTable jobs={jobs} index={index} />
    </div>
  );
}

export default TabsApp;
