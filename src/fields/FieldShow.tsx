import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export const FieldShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ReferenceField
        source="field_type_id"
        reference="field_types"
        label="Type"
      />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
