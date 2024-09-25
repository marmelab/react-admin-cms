import {
  Edit,
  ReferenceInput,
  required,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const FieldEdit = () => (
  <Edit>
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
  </Edit>
);
