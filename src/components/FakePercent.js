import { useEffect, useState } from 'react';
let inter = 0;
export default function FakePercent() {
  const [num, setNum] = useState(0);
  useEffect(() => {
    inter = setInterval(() => {
      if (Math.random() > 0.98) {
        let rand = Math.floor(Math.random() * 5);
        setNum((prev) => (prev + rand >= 100 ? rand : prev + rand));
      }
    }, 1000);
    return () => {
      clearInterval(inter);
    };
  }, []);
  return `${num}%`;
}
