import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Success from "components/Typography/Success.js";
import TimelineElement from "components/Timeline/TimelineElement.js"

export default function Timeline(props) {

  const [data, setData] = useState([]);
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    if (fetched === false) {
      getData();
    }
  }, [fetched]);

  const getData = async () => {
    try {
      const [response] = await Promise.all([
        axios.get('http://www.mocky.io/v2/5e87131b3100000aff81858b'),
      ]);
      setData(response.data.data);
      setFetched(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Success><h2>Recent donations</h2></Success>
      {fetched && data.map((feed, idx) => (<TimelineElement  key={idx} data={feed} />))}
    </div>
  );
}