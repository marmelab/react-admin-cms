import { RaRecord } from "react-admin";
import { FieldTypeCreate } from "./FieldTypeCreate";
import { FieldTypeEdit } from "./FieldTypeEdit";
import { FieldTypeList } from "./FieldTypeList";
import { FieldTypeShow } from "./FieldTypeShow";

export const fieldTypes = {
  name: "field_types",
  list: FieldTypeList,
  edit: FieldTypeEdit,
  create: FieldTypeCreate,
  show: FieldTypeShow,
  recordRepresentation: (record: RaRecord) => record.type,
};
