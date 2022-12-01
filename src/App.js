import CheckBox from "./components/CheckBox";
import SearchInput from "./components/SearchInput";
import { data } from "./API/data";
import "./styles.css";
import FoodTable from "./components/FoodTable";
import { useState } from "react";

const DISPLAY_TEXT = "Only show products in stock";
export default function App() {
  const [searchString, setSearchString] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchString.toLowerCase());
  });
  return (
    <div className="App">
      <SearchInput
        searchString={searchString}
        setSearchString={setSearchString}
        // getFilteredData={getFilteredData}
      />
      <CheckBox
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        displayText={DISPLAY_TEXT}
      />

      <FoodTable
        data={filteredData}
        searchString={searchString}
        isChecked={isChecked}
      />
    </div>
  );
}
