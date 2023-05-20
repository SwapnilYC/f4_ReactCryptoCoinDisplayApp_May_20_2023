import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Row from "./Components/Row";

const App = () => {
  const [rowData, setRowData] = useState([]);
  let apiURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const fetchAPI = async (apiURL) => {
    let fetchedData = await fetch(apiURL);
    let data = await fetchedData.json();
    setRowData(data);
  }

  useEffect(() => {
    fetchAPI(apiURL);
    console.log(rowData);
  }, [])

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Current Price</th>
          <th>Total Volume</th>
          <th>Total Market Cap($)</th>
          <th>Market Cap Change In Percentage</th>
        </tr>
      </thead>
      <tbody>
        {rowData.map((item) => {
          // console.log(item);
          return <Row key={item.id} details={item} />
        })}
      </tbody>
    </table>
  );
}

export default App;