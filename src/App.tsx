import { Admin, Resource } from "react-admin";
import { useDynamicResources } from "./DynamicResourceContext";
import { Layout } from "./Layout";
import { dataProvider } from "./dataProvider";
import { dynamicResources } from "./dynamicResources";
import { entities } from "./entities";
import { fieldTypes } from "./fieldTypes";
import { fields } from "./fields";
import { queryClient } from "./queryClient";

export const App = () => {
  const customResources = useDynamicResources();
  return (
    <Admin
      layout={Layout}
      dataProvider={dataProvider}
      queryClient={queryClient}
    >
      {customResources.map((resource) => (
        <Resource
          key={resource.name}
          name={resource.name}
          {...dynamicResources}
        />
      ))}
      <Resource {...fieldTypes} />
      <Resource {...fields} />
      <Resource {...entities} />
    </Admin>
  );
};
