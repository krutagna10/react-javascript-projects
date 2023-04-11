import AgeCalculatorForm from "./components/AgeCalculatorForm/AgeCalculatorForm";
import AgeTable from "./components/AgeTable/AgeTable";

function AgeCalculator() {
  return (
    <div>
      <h1>Age Calculator</h1>
      <AgeCalculatorForm />
      <AgeTable />
    </div>
  );
}

export default AgeCalculator;
