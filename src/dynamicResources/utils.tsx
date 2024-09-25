import {
  BooleanField,
  BooleanInput,
  DateField,
  DateInput,
  NumberField,
  NumberInput,
  TextField,
  TextInput,
} from "react-admin";

export const getField = (fieldType: string, source: string) => {
  switch (fieldType) {
    case "text":
      return <TextField key={source} source={source} />;
    case "number":
      return <NumberField key={source} source={source} />;
    case "date":
      return <DateField key={source} source={source} />;
    case "boolean":
      return <BooleanField key={source} source={source} />;
    default:
      throw new Error(`Unknown field type: ${fieldType}`);
  }
};

export const getInput = (fieldType: string, source: string) => {
  switch (fieldType) {
    case "text":
      return <TextInput key={source} source={source} />;
    case "number":
      return <NumberInput key={source} source={source} />;
    case "date":
      return <DateInput key={source} source={source} />;
    case "boolean":
      return <BooleanInput key={source} source={source} />;
    default:
      throw new Error(`Unknown field type: ${fieldType}`);
  }
};
