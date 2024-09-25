import { Datagrid, DateField, List, TextField } from "react-admin";

export const FieldTypeList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="type" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);
