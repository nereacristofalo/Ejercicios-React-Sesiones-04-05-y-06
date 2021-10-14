import React, { useState, useEffect } from 'react';
import Data from '../models/data.class';

const ClockF = () => {
  let initialData = new Data('Nerea', 'Cristofalo', new Date(), 0);

  const [data, setData] = useState(initialData);

  console.log('INITIAL DATA --> ', initialData);
  console.log('DATA --> ', data);

  const tick = () => {
    setData((prevData) => ({
      ...prevData,
      date: new Date(),
      age: prevData.age + 1,
    }));
  };

  useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  return (
    <div>
      <h2>
        Hora Actual:
        {data.date.toLocaleTimeString()}
      </h2>
      <h3>
        {data.name} {data.lastName}
      </h3>
      <h1>Edad: {data.age}</h1>
    </div>
  );
};

export default ClockF;
