import { Create, required, SimpleForm, TextInput } from "react-admin";

export const FieldTypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="type" validate={required()} />
    </SimpleForm>
  </Create>
);
