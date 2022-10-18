export const getCurrentDate = () => {
  const now = new Date();
  const month = now.getMonth() + 1;
  const year = now.getFullYear();

  return `${month}-${year}`;
};

export const formatCurrentMonth = (currentMonth) => {
  const [month, year] = currentMonth.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `(added ${months[parseInt(month) - 1]} of ${year})`;
};
