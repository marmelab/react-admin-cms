import { ReferenceManyToManyInput } from "@react-admin/ra-relationships";
import { useQueryClient } from "@tanstack/react-query";
import {
  AutocompleteArrayInput,
  Create,
  RaRecord,
  required,
  SimpleForm,
  TextInput,
  useNotify,
  useRedirect,
} from "react-admin";
import { DYNAMIC_RESOURCES_QUERY_KEY } from "../DynamicResourceContext";

export const EntityCreate = () => {
  const queryClient = useQueryClient();
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = (data: RaRecord) => {
    queryClient.invalidateQueries({ queryKey: [DYNAMIC_RESOURCES_QUERY_KEY] });
    notify("ra.notification.created", {
      type: "info",
      messageArgs: { smart_count: 1 },
    });
    redirect(`/entities/${data.id}`);
  };

  return (
    <Create mutationOptions={{ onSuccess }}>
      <SimpleForm>
        <TextInput source="name" validate={required()} />
        <ReferenceManyToManyInput
          reference="fields"
          through="entities_fields"
          using="entity_id,field_id"
        >
          <AutocompleteArrayInput label="Fields" optionText="name" />
        </ReferenceManyToManyInput>
      </SimpleForm>
    </Create>
  );
};
