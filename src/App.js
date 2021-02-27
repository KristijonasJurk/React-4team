import React, { useState, useEffect } from "react";
import tableData from "./data"
import TableContent from './TableContent'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    setData(tableData)
  }, [])


  return (
    <div className="App">
      <TableContent />
    </div>
  );
}

export default App;
