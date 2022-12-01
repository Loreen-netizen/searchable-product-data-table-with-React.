import React from "react";

const CheckBox = ({ displayText, isChecked, setIsChecked }) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />

      {displayText}
    </div>
  );
};

export default CheckBox;
