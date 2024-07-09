export const getTimeDifference = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);
  let years = now.getFullYear() - createdDate.getFullYear();
  let months = now.getMonth() - createdDate.getMonth();
  let days = now.getDate() - createdDate.getDate();
  let hours = now.getHours() - createdDate.getHours();
  let minutes = now.getMinutes() - createdDate.getMinutes();

  if (minutes < 0) {
    minutes += 60;
    hours--;
  }
  if (hours < 0) {
    hours += 24;
    days--;
  }
  if (days < 0) {
    const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += lastMonth.getDate();
    months--;
  }
  if (months < 0) {
    months += 12;
    years--;
  }
  return { years, months, days, hours, minutes };
};

export const formatTimeDifference = (
  years,
  months,
  days,
  hours,
  minutes,
  t
) => {
  let formatted = "";
  if (years > 0) {
    formatted += `${years} ${t("year")}`;
  }
  if (months > 0) {
    if (formatted) {
      formatted += ` ${t("and")} ${months} ${t("month")}`;
    } else {
      formatted += `${t("since")} ${months} ${t("month")}`;
    }
  }
  if (days > 0) {
    if (formatted) {
      formatted += ` ${t("and")} ${days} ${t("day")}`;
    } else {
      formatted += `${t("since")} ${days} ${t("day")}`;
    }
  }
  if (hours > 0) {
    if (formatted) {
      formatted += ` ${t("and")} ${hours} ${t("hour")}`;
    } else {
      formatted += `${t("since")} ${hours} ${t("hour")}`;
    }
  }
  if (minutes > 0) {
    if (formatted) {
      formatted += ` ${t("and")} ${minutes} ${t("minute")}`;
    } else {
      formatted += `${t("since")} ${minutes} ${t("minute")}`;
    }
  }
  return formatted || t("now");
};
