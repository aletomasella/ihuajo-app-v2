const dateFilter = (date: string) => {
  console.log(date);
  const dateArray = date.split("/")[0].split("-");
  const nomalizedDate = `${dateArray[0]}/${dateArray[1]}/${dateArray[2].slice(
    0,
    2
  )}`.replaceAll("/", "-");
  console.log(nomalizedDate);
  return nomalizedDate;
};

export { dateFilter };
