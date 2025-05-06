export default function convertDate(date) {
  if (!date || typeof date !== "string") return undefined;
  const map = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const [year, month] = date.split("-");
  const monthString = map[month];

  return monthString ? `${monthString} ${year}` : "";
}
