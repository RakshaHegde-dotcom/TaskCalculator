import Row from "./Row";

import { useState } from "react";
import { initialItems } from "./constants";



function CalculatorBody() {
  const [items, setItems] = useState(initialItems);

  function handleInputValueChange(e, id) {
    const changedInputValue =
      e.target.value === "" ? 0 : parseInt(e.target.value);
    const modifiedItems = items.map((ele) =>
      ele.id === id ? Object.assign({}, ele, { value: changedInputValue }) : ele
    );
    setItems(modifiedItems);
  }

  function handleMinusOrAddRowValue(e, id) {
    const modifiedItems = items.map((ele) =>
      ele.id === id
        ? Object.assign({}, ele, { operatorValue: e.target.value })
        : ele
    );
    setItems(modifiedItems);
  }

  function handleDisableClick(id) {
    const modifiedItems = items.map((ele) =>
      ele.id === id
        ? Object.assign({}, ele, { isDisabled: !ele.isDisabled })
        : ele
    );
    setItems(modifiedItems);
  }

  function handleDeleteRow(id) {
    const modifiedItems = items.filter((ele) => ele.id !== id);
    setItems(modifiedItems);
  }

  function handleRowAdd() {
    const derivedId = items.length + 1;
    const modifiedItems = items.concat( { id: derivedId, value: 0, operatorValue: "plus", isDisabled: false });
    setItems(modifiedItems);
  }

    // useMemo can be used, when u are doing a computation which expensive
    // const result =  useMemo(() => {return ...} , []);
  const result = items.reduce((total, currentItem) => {
    if (currentItem.operatorValue === "minus" && !currentItem.isDisabled) {
      return total - currentItem.value;
    } else if (currentItem.operatorValue === "plus" && !currentItem.isDisabled) {
      return total + currentItem.value;
    } else return total;
  }, 0);

  return (
    <>
      <p><button onClick={handleRowAdd}>Add Row</button></p>
      <div>
        {items.map((ele) => {
          return (
            <Row
              key={ele.id}
              item={ele}
              handleInputValueChange={handleInputValueChange}
              handleMinusOrAddRowValue={handleMinusOrAddRowValue}
              handleDisableClick={handleDisableClick}
              handleDeleteRow={handleDeleteRow}
            />
          );
        })}
      </div>
      <div><p>Result: {result}</p></div>
    </>
  );
}

export default CalculatorBody;