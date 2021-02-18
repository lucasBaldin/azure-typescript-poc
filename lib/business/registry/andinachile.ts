import andinachileClient = require("../../data/andinachileClient");

async function getRegistry({ documentId }) {
  const client = await andinachileClient.registry.get({ documentId });

  return client;
}

export = {
  getRegistry,
};
