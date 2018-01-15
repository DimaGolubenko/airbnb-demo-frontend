import moment from "moment";

export const formatDateLabel = (dateFrom, dateTo, isOpen) => {
  const formattedDateFrom = moment(dateFrom).format("MMM Do");
  const formattedDateTo = moment(dateTo).format("MMM Do");
  if (dateFrom && dateTo) {
    return {
      from: formattedDateFrom,
      to: formattedDateTo
    };
  } else if (dateFrom) {
    return {
      from: formattedDateFrom,
      to: "Check out"
    };
  } else if (isOpen) {
    return {
      from: "Check in",
      to: "Check out"
    };
  } else {
    return {
      from: null,
      to: "Dates"
    };
  }
};

export const getNumberOfMonths = () => {
  if (window.matchMedia("(min-width: 992px)").matches) {
    return 2;
  } else if (window.matchMedia("(min-width: 768px)").matches) {
    return 1;
  } else {
    return 12;
  }
};