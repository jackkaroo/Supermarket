export function handleDate(date) {
  const newDate = new Date(date);
  const finalDate = `${newDate.getDate()}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`
  return finalDate;
}