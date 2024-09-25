import { RaRecord } from "react-admin";
import { EntityCreate } from "./EntityCreate";
import { EntityEdit } from "./EntityEdit";
import { EntityList } from "./EntityList";
import { EntityShow } from "./EntityShow";

export const entities = {
  name: "entities",
  list: EntityList,
  edit: EntityEdit,
  create: EntityCreate,
  show: EntityShow,
  recordRepresentation: (record: RaRecord) => record.name,
};
