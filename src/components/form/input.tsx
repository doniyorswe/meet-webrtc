import type { InputHTMLAttributes } from "react"
import { useController, type Control, type FieldValues, type Path } from "react-hook-form"
import type { ClassNameValue } from "tailwind-merge"
import FieldLabel from "./field-label"
import { cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { FieldError } from "../ui/field"

type Props<IForm extends FieldValues> = {
    label?: string
    control: Control<IForm>
    name: Path<IForm>
    required?: boolean
    wrapperClassName?: ClassNameValue
    hideError?: boolean
}

export default function FormInput<IForm extends FieldValues>({
    label,
    control,
    name,
    required = false,
    wrapperClassName,
    className = '',
    hideError = false,
    ...props
}: Props<IForm> & InputHTMLAttributes<HTMLInputElement>) {
    const {
        field: { onChange, ref, ...field },
        fieldState,
    } = useController({
        name,
        control,
        rules: {
            required: { value: required, message: "Field is required" },
        },
    });


    return (
        <fieldset className={cn("flex flex-col w-full relative", wrapperClassName)}>
            {label && (
                <FieldLabel
                    htmlFor={name}
                    required={required}
                    isError={!!fieldState.error}
                >
                    {label}
                </FieldLabel>
            )}
            <label className="relative flex items-center">
                <Input
                    id={name}
                    className={cn(
                        "flex h-10 md:h-11 w-full border border-input bg-background px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        className,
                        control._formState.errors?.[name] &&
                        "border-destructive/30! focus:border-border ring-destructive/30! placeholder:text-destructive"
                    )}
                    onChange={(val) => {
                        onChange(val.target.value);
                    }}
                    autoComplete="off"
                    ref={ref}
                    {...field}
                    {...props}
                    placeholder={(props.placeholder || label || "") + (required ? " *" : "")}
                    disabled={field.disabled || props.disabled}
                />
            </label>
            {fieldState.error && !hideError && (
                <FieldError className="absolute -bottom-5">{fieldState.error?.message}</FieldError>
            )}
        </fieldset>
    )
}
