export const getDate = timeStamp => {
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
      "Dec"
    ];

    const now = new Date();
    const time = new Date(timeStamp * 1000);
    const year = time.getFullYear();
    const month = time.getMonth();
    const date = time.getDate();
    const hours = time.getHours();
    const minutes = time.getMinutes();
    if (year !== now.getFullYear) {
      return `${months[month]} ${date}, ${year}`;
    } else if (month === now.getMonth() && date === now.getDate()) {
      if (hours < 12) return `${hours}:${minutes} AM`;
      else return `${hours - 12}:${minutes} PM`;
    } else {
      return `${months[month]} ${date}`;
    }
  };