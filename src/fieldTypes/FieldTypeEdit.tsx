import { Edit, required, SimpleForm, TextInput } from "react-admin";

export const FieldTypeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="type" validate={required()} />
    </SimpleForm>
  </Edit>
);
