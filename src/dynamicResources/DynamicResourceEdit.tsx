import { Edit, SimpleForm, useResourceContext } from "react-admin";
import { useDynamicResources } from "../DynamicResourceContext";
import { getInput } from "./utils";

export const DynamicResourceEdit = () => {
  const dynamicResources = useDynamicResources();
  const resource = useResourceContext();
  const fields = dynamicResources.find((r) => r.name === resource)?.fields;
  return (
    <Edit>
      <SimpleForm>
        {fields?.map((field) => getInput(field.type, field.name))}
      </SimpleForm>
    </Edit>
  );
};
