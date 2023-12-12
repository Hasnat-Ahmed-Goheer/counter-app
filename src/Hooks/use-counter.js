import React, { useState, useEffect } from "react";

const useCounter = (forwards = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
if(forwards)
setCount((prev) => (prev + 1));
else {
    setCount((prev) => (prev - 1));
}
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [forwards]);

  return count;
};

export default useCounter;
