import { RaRecord } from "react-admin";
import { FieldCreate } from "./FieldCreate";
import { FieldEdit } from "./FieldEdit";
import { FieldList } from "./FieldList";
import { FieldShow } from "./FieldShow";

export const fields = {
  name: "fields",
  list: FieldList,
  edit: FieldEdit,
  create: FieldCreate,
  show: FieldShow,
  recordRepresentation: (record: RaRecord) => record.name,
};
