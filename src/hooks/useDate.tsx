import { useEffect, useState } from "react";

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dic",
];

const useDate = (date: number | string | Date) => {
  const [newDate, setNewDate] = useState(new Date(date ?? Date.now()));
  const [formatedDate, setFormatedDate] = useState<string>("");

  useEffect(() => {
    setFormatedDate(
      `${weekDays[newDate.getDay()]} ${newDate.getDate()} ${
        months[newDate.getMonth()]
      }, ${newDate.getFullYear()}`
    );
  }, [newDate]);

  return [formatedDate];
};

export default useDate;
