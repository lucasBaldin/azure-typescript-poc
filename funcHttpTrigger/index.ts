import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import business = require('../lib/business/factory');

const funcHttpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const instance = business.registry.getInstance({ bottler: req.params.bottler });

  const documentId = req.params.document_id.replace(/[^\d]+/g, "");

  const params = { bottler: req.params.bottler, documentId };
  const registry = await instance.getRegistry(params);

  context.res = {
    status: 200,
    body: JSON.stringify(registry),
    headers: { "Content-Type": "application/json" },
    isRaw: true,
  };
};

export default funcHttpTrigger;
