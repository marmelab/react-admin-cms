import {
  Create,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const FieldCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" validate={required()} />
      <ReferenceInput
        source="field_type_id"
        reference="field_types"
        label="Type"
      >
        <SelectInput optionText="type" validate={required()} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
