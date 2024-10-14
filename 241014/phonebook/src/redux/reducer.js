let initialState = {
  contactList: [],
  keyword: "",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT":
      // state.contactList.push({
      //   name: payload.name,
      //   phone: payload.phone,
      // });
      // break;
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phone: payload.phone,
          },
        ],
      };
    case "SEARCH":
      // state.keyword = payload.keyword;
      // break;
      return {
        ...state,
        keyword: payload.keyword,
        // filter((it) => it.name === payload.keyword)
      };
    default:
      return { ...state };
  }
  // return { ...state };
};

export default reducer;

const userList = [
  {
    name: "David",
    number: 123456789,
  },
];
