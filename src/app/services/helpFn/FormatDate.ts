export const FormatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const monthFormat = (x: any) => (x < 10 ? "0" + x : x);
    const dateNowFormat = `${year}-${monthFormat(month)}-${day}`;
    return dateNowFormat;
  };
  