export default function getStore() {
  let data;

  if (data !== undefined) {
    return data;
  }

  switch (process.env.NODE_ENV) {
    case "development": {
      data = require("./dev.json");
      break;
    }
    case "staging": {
      data = require("./stg.json");
      break;
    }
    default: {
      data = require("./prod.json");
    }
  }

  return data;
}