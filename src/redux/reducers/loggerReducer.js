const logger = (state = "luthfi", action) => {
  switch (action.type) {
    case "NAME":
      console.log(state);
      return "halo" + state;
    case "CHANGE_NAME":
      console.log(state);
      return "gilman";
    case "SUBMIT_NOMER":
      console.log(action.payload);
      return state + action.payload;
    default:
      return "halo" + state;
  }
};

export default logger;
