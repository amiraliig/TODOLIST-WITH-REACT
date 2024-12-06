const reducer = (tasks, action) => {
  if (action.type == "add") {
    return [
      ...tasks,
      { name: action.name, id: action.id, complete: action.complete },
    ];
  } else if (action.type == "delete") {
    return tasks.filter((item) => {
      return item.id !== action.id;
    });
  } else if (action.type == "complete") {
    return tasks.map((item) => {
      if (item.id == action.id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
  } else if (action.type == "edit") {
    return tasks.map((item) => {
      if (item.id == action.id) {
        return { ...item, name: action.newValue };
      } else {
        return item;
      }
    });
  }
};
export default reducer;
