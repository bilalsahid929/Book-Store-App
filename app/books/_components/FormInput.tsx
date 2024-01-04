import { ErrorMessage } from "@/app/components";
import { Book } from "@/lib/features/books/booksSlice";
import { TextArea, TextField } from "@radix-ui/themes";
import { Control, Controller, FieldErrors } from "react-hook-form";

type FormValues = Omit<Book, "id">;

interface ControllerProps {
  label: string;
  name: keyof FormValues;
  type?: string;
  control: Control<FormValues, unknown>;
  errors: FieldErrors<FormValues>;
  onChange?: any;
}

const FormInput: React.FC<ControllerProps> = ({
  label,
  name,
  type = "text",
  control,
  errors,
  onChange,
}) => (
  <>
    <label>{label}:</label>
    {type === "textarea" ? (
      <Controller
        name={name}
        control={control}
        render={({ field }) => <TextArea {...field} />}
      />
    ) : type === "number" ? (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField.Root>
            <TextField.Input {...field} type="number" onChange={onChange} />
          </TextField.Root>
        )}
      />
    ) : (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField.Root>
            <TextField.Input {...field} type={type} />
          </TextField.Root>
        )}
      />
    )}
    <ErrorMessage>{errors[name]?.message}</ErrorMessage>
  </>
);

export default FormInput;
