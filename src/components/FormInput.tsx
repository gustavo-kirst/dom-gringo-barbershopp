import { Controller, Control, FieldValues, Path } from "react-hook-form";
import { Text, TextInput, TextInputProps } from "react-native-paper";
import { StyleSheet } from "react-native";

interface FormInputProps<T extends FieldValues> extends TextInputProps {
  control: Control<T>;
  name: Path<T>;
  label: string;
}

export default function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  ...props
}: FormInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <>
          <TextInput
            label={label}
            mode="outlined"
            value={value}
            onChangeText={onChange}
            error={!!error}
            {...props}
          />

          {error && (
            <Text style={styles.error}>
              {error.message}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  error: {
    color: "#D32F2F",
    marginTop: -10,
  },
});