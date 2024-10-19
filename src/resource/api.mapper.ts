import { SearchTokenRequest } from "./api.dto";

export const mapRequestBody = (
  dateForm: Date,
  timeForm: string,
  guestSizeForm: number
): SearchTokenRequest => {
  const date = mapDateToRequestBody(dateForm);
  const time = timeForm.replace(":", "");
  const size = String(guestSizeForm);
  return { date, time, size };
};

const mapDateToRequestBody = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}${month}${day}`;
};
