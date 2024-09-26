import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { queryClient } from "./queryClient";
import { supabaseClient } from "./supabase";

type DynamicResourceContextValue = {
  name: string;
  fields: { name: string; type: string }[];
}[];

export const DYNAMIC_RESOURCES_QUERY_KEY = "dynamic_resources";

const DynamicResourceContext = createContext<DynamicResourceContextValue>([]);

export const DynamicResourceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [dynamicResources, setDynamicResources] =
    useState<DynamicResourceContextValue>([]);

  const fetchDynamicResources = async () => {
    const { data } = await supabaseClient.from("entities").select(`
        name,
        fields:entities_fields (
          field:field_id (
            name,
            field_type_id (
              type
            )
          )
        )
      `);

    return data;
  };

  const { data: entities } = useQuery(
    {
      queryKey: [DYNAMIC_RESOURCES_QUERY_KEY],
      queryFn: fetchDynamicResources,
    },
    queryClient,
  );

  useEffect(() => {
    const newContextValue = entities?.map((entity) => ({
      name: entity.name,
      fields: entity.fields.map((f) => ({
        name: f.field.name,
        type: f.field.field_type_id.type,
      })),
    }));
    setDynamicResources(newContextValue || []);
  }, [entities]);

  return (
    <DynamicResourceContext.Provider value={dynamicResources || []}>
      {children}
    </DynamicResourceContext.Provider>
  );
};

export const useDynamicResources = () => {
  const context = useContext(DynamicResourceContext);
  if (!context) {
    throw new Error(
      "useDynamicResources must be used inside a DynamicResourceProvider",
    );
  }
  return context;
};
