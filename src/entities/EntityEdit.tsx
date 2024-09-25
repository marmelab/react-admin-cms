import { ReferenceManyToManyInput } from "@react-admin/ra-relationships";
import { useQueryClient } from "@tanstack/react-query";
import {
  AutocompleteArrayInput,
  DeleteButton,
  Edit,
  required,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
  useNotify,
  useRedirect,
} from "react-admin";
import { DYNAMIC_RESOURCES_QUERY_KEY } from "../DynamicResourceContext";

const EditToolbar = () => {
  const queryClient = useQueryClient();
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [DYNAMIC_RESOURCES_QUERY_KEY] });
    notify("ra.notification.deleted", {
      type: "info",
      messageArgs: { smart_count: 1 },
    });
    redirect("/entities");
  };

  return (
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <SaveButton />
      <DeleteButton mutationOptions={{ onSuccess }} />
    </Toolbar>
  );
};

export const EntityEdit = () => {
  const queryClient = useQueryClient();
  const notify = useNotify();
  const redirect = useRedirect();

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [DYNAMIC_RESOURCES_QUERY_KEY] });
    notify("ra.notification.updated", {
      type: "info",
      messageArgs: { smart_count: 1 },
    });
    redirect("/entities");
  };

  return (
    <Edit mutationMode="pessimistic" mutationOptions={{ onSuccess }}>
      <SimpleForm toolbar={<EditToolbar />}>
        <TextInput source="name" validate={required()} />
        <ReferenceManyToManyInput
          reference="fields"
          through="entities_fields"
          using="entity_id,field_id"
        >
          <AutocompleteArrayInput label="Fields" optionText="name" />
        </ReferenceManyToManyInput>
      </SimpleForm>
    </Edit>
  );
};
