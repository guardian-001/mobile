type ItemType = { [key: number]: number };

const findInitialValue = (values: ItemType[], id: number): number => {
  return values?.find((item) => Object.keys(item)[0] === String(id))?.[id] ?? 0;
};

const updateArray = (
  arr: ItemType[],
  id: number,
  newCount: number
): ItemType[] => {
  if (newCount === 0) {
    return arr.filter((item) => Object.keys(item)[0] !== String(id));
  } else {
    const index = arr.findIndex((item) => Object.keys(item)[0] === String(id));
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
    findInitialValue,
    updateArray,
  };
};
