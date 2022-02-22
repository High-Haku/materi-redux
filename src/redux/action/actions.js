const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const perkalian = () => {
  return {
    type: "PERKALIAN",
  };
};

const call = () => {
  return {
    type: "NAME",
  };
};

const gantiNama = () => {
  return {
    type: "CHANGE_NAME",
  };
};

const submitNomer = (no) => {
  return {
    type: "SUBMIT_NOMER",
    payload: no,
  };
};

export { increment, decrement, call, gantiNama, perkalian, submitNomer };
