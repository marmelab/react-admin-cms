import { ReferenceManyToManyField } from "@react-admin/ra-relationships";
import {
  ChipField,
  DateField,
  Show,
  SimpleShowLayout,
  SingleFieldList,
  TextField,
} from "react-admin";

export const EntityShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="name" />
      <ReferenceManyToManyField
        reference="fields"
        through="entities_fields"
        using="entity_id,field_id"
        label="Fields"
      >
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ReferenceManyToManyField>
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
