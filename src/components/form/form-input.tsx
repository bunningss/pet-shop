import { FieldValues, Path, UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

interface InputProps<TFieldValues extends FieldValues> {
  form: UseFormReturn<TFieldValues>;
  name: Path<TFieldValues>;
  label: string;
  placeholder: string;
  description?: string;
  type?: string;
  required: boolean;
  disabled?: boolean;
}

export function FormInput<TFieldValues extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  description,
  type = "text",
  required,
  disabled,
}: InputProps<TFieldValues>) {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel
              className={`capitalize relative ${
                required
                  ? "after:content-['*'] after:absolute after:text-destructive after:text-lg after:-bottom-2"
                  : ""
              }`}
            >
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Input
              placeholder={placeholder || ""}
              {...field}
              disabled={disabled}
              type={type}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
