import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
} from "react-admin";

export const FieldList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <ReferenceField
        source="field_type_id"
        reference="field_types"
        label="Type"
      />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);
