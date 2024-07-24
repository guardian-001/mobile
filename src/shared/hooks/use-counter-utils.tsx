type IdCountType = { [key: number]: number };

const findValue = (values: IdCountType[], id: number): number => {
  return (
    values?.find((value) => Object.keys(value)[0] === String(id))?.[id] ?? 0
  );
};

const updateArray = (
  arr: IdCountType[],
  id: number,
  newCount: number
): IdCountType[] => {
  if (newCount === 0) {
    return arr.filter((value) => Object.keys(value)[0] !== String(id));
  } else {
    const index = arr.findIndex(
      (value) => Object.keys(value)[0] === String(id)
    );
    if (index !== -1) {
      arr[index] = { [id]: newCount };
    } else {
      arr.push({ [id]: newCount });
    }
    return [...arr];
  }
};

export const useCounterUtils = () => {
  return {
    findValue,
    updateArray,
  };
};
