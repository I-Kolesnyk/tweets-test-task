export const getCounter = (status, number) => {
    if (status === "follow") {
      return number + 1;
    }
    if (status === "following") {
      return number - 1;
    } else {
      return number;
    }
  };