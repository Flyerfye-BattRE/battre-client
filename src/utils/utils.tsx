// Formats dates into long and short formats and returns both in a single array
// Long date format: YYYY-MM-DD HH:MM:SS
// Short date format: M/D H:MM

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const formattedShortDate = `${month}/${day} ${hours}:${minutes
    .toString()
    .padStart(2, "0")}`;
  const formattedLongDate = `${year}-${month
    .toString()
    .padStart(2, "0")}-${day.toString().padStart(2, "0")} ${hours}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  return [formattedLongDate, formattedShortDate];
};
