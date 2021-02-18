import registryFactory = require("./registry/factory");

const registry = {
  getInstance({ bottler }) {
    return registryFactory.getInstance({ bottler });
  },
};

export { registry };
