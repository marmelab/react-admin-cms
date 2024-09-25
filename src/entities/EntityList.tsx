import { ReferenceManyToManyField } from "@react-admin/ra-relationships";
import {
  ChipField,
  Datagrid,
  DateField,
  List,
  SingleFieldList,
  TextField,
} from "react-admin";

export const EntityList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
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
    </Datagrid>
  </List>
);
