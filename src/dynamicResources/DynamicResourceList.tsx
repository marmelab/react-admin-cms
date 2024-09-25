import { Datagrid, DateField, List, useResourceContext } from "react-admin";
import { useDynamicResources } from "../DynamicResourceContext";
import { getField } from "./utils";

export const DynamicResourceList = () => {
  const dynamicResources = useDynamicResources();
  const resource = useResourceContext();
  const fields = dynamicResources.find((r) => r.name === resource)?.fields;
  return (
    <List>
      <Datagrid>
        {fields?.map((field) => getField(field.type, field.name))}
        <DateField source="created_at" />
      </Datagrid>
    </List>
  );
};
