import React, { useState, useEffect } from 'react';
import '../style/clock.css';


const Clock = () => {

  const [hour, setHour] = useState(new Date());
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date());
    }, 1000 );
    return () => {
      clearInterval(interval);
    }
  }, []);

  const getAmPm = () => {
    const hour12hours = hour.toLocaleTimeString('en-US'); //Obtengo la hora con la leyenda 'am' o 'pm'
    const partesHora = hour12hours.split(' '); //Lo separo en un arreglo para trabajar solo la leyenda
    const amPm = partesHora[1]; //Guardo en una variable la leyenda
    return amPm;
  }

  const hours = hour.getHours().toString().padStart(2, '0');
  const minutes = hour.getMinutes().toString().padStart(2, '0');
  const seconds = hour.getSeconds().toString().padStart(2, '0');
  
  
  return (
    <div className='div-clock'> 
      <p>{`${hours}:`}</p>
      <p>{`${minutes}:`}</p>
      <p>{seconds}</p>
      <p className='am-pm'>{getAmPm()}</p>
    </div>  
  );
}

export default Clock;