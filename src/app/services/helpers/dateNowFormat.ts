export const dateNowFormat = () => {
  const dateNow = new Date();
  const day = dateNow.getDate();
  const month = dateNow.getMonth() + 1;
  const year = dateNow.getFullYear();
  const monthFormat = (x: any) => (x < 10 ? "0" + x : x);
  const dateNowFormat = `${year}-${monthFormat(month)}-${day}`;
  console.log(dateNowFormat);
  return dateNowFormat;
};
