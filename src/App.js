import TourApp from "./components/Day 8 - Tours Component/TourApp";
import SearchFilter from "./components/Day 1 - Search Filter/SearchFilter";
import BirthdayRemainder from "./components/Day 2 - Birthday Remainder/BirthdayRemainder";

function App() {
  return (
    <div className="app">
      <SearchFilter />
      <BirthdayRemainder />
      <TourApp />
    </div>
  );
}

export default App;
