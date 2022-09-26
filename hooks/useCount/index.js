import { useEffect, useState } from 'react';

const useCount = (isActive) => {
  const [sec, setSec] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setSec((prevSec) => prevSec + 1);
      }, 1000);
    } else if (!isActive) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  return {
    sec: sec % 60 < 10 ? '0' + (sec % 60) : sec % 60,
    min: (sec / 60) % 60 < 10 ? '0' + parseInt((sec / 60) % 60) : parseInt((sec / 60) % 60),
    hour: (sec / 3600) % 60 < 10 ? '0' + parseInt(sec / 3600) : parseInt(sec / 3600),
  };
};
export default useCount;
