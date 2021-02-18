//import andinachileHttpClient = require("../Util/AndinaChileHttpClient");

const registry = {
  async get({ documentId }) {

    // Bottler integration
    // const { status, data } = await andinachileHttpClient.get(
    //   {
    //     url: "/customer",
    //     params: {
    //       query: documentId,
    //     },
    //   },
    //   log
    // );

    // Mock Data
    const result = {
      document_id: "1058",
      address: "Foo Street",
      bottler: "andinachile",
      external_id: "12345",
      name: "John Doe",
      route: "Friday",
      isActive: true,
      minimumOrder: "0",
      isOrderOptionActive: false,
    };

    return result;
  },
};

export = {
  registry,
};
