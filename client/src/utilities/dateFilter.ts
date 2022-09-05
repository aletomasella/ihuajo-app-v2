const dateFilter = (date: string) => {
  const dateArray = date.split("/")[0].split("-");
  const nomalizedDate = `${dateArray[0]}/${dateArray[1]}/${dateArray[2].slice(
    0,
    2
  )}`.replaceAll("/", "-");
  return nomalizedDate;
};

export { dateFilter };
