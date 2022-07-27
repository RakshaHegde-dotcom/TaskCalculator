function Row(props) {
  return (
    <div style={{ display: "flex",justifyContent: "center"  }}>
      <p>
      <select
        value={props.item.operatorValue}
        onChange={(e) => props.handleMinusOrAddRowValue(e, props.item.id)}
      >
        {" "}
        <option value="plus">+</option>
        <option value="minus">-</option>
      </select>
      </p>
      <form>
        <p>
        <input
          type="number"
          value={props.item.value}
        
          onChange={(e) => props.handleInputValueChange(e, props.item.id)}
        />
        </p>
      </form>
      <div><p>
        <center><button onClick={() => props.handleDeleteRow(props.item.id)}>Delete</button>
      <button onClick={() => props.handleDisableClick(props.item.id)}>{props.item.isDisabled ? "Enable" : "Disable"}</button>
      </center></p></div></div>
  );
}

export default Row;
