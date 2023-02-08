

const cors = require("cors");

const corsWhiteList = (whitelist, enable) => {
  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allower by CORS"));
      }
    }
  }

  if (enable) {
    return cors(corsOptions);
  }

  return cors();
}

module.exports = { corsWhiteList };
