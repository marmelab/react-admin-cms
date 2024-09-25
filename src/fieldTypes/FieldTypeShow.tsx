import { DateField, Show, SimpleShowLayout, TextField } from "react-admin";

export const FieldTypeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="type" />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
