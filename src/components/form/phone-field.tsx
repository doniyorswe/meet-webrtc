import { cn } from "@/lib/utils"
import { PhoneNumberUtil } from "google-libphonenumber"
import {
    useController,
    type Control,
    type FieldValues,
    type Path,
} from "react-hook-form"
import {
    PhoneInput,
    type PhoneInputProps,
    type PhoneInputRefType,
} from "react-international-phone"
import "react-international-phone/style.css"
import FieldLabel from "./field-label"
import { FieldError } from "../ui/field"

interface IProps<IForm extends FieldValues> {
    control: Control<IForm>
    name: Path<IForm>
    label?: string
    required?: boolean
    wrapperClassName?: string
    hideError?: boolean
}

const phoneUtil = PhoneNumberUtil.getInstance()

export default function PhoneField<IForm extends FieldValues>({
    control,
    name,
    label,
    required = false,
    wrapperClassName,
    className,
    inputClassName,
    countrySelectorStyleProps,
    hideError = false,
    ...props
}: IProps<IForm> & PhoneInputProps & React.RefAttributes<PhoneInputRefType>) {
    const isPhoneValid = (phone: string) => {
        try {
            return phoneUtil.isValidNumber(
                phoneUtil.parseAndKeepRawInput(phone)
            )
        } catch (error) {
            return false
        }
    }

    const {
        field: { value, ...field },
        fieldState: { error },
    } = useController({
        name,
        control,
        rules: {
            validate: (val: string) => {
                const v =
                    val ?
                        val.startsWith("+") ?
                            val
                            : `+${val}`
                        : ""
                let err = ""
                if (val.startsWith('+99887')) {
                    return true
                }
                let isValid = true
                if (required) {
                    isValid = isPhoneValid(v)
                    if (!isValid) {
                        err = "To'g'ri va to'liq to'ldiring"
                    }
                }

                return isValid || err
            },
        },
        // @ts-expect-error sdf
        defaultValue: "",
    })

    const val =
        (value as string) ?
            value.startsWith("+") ?
                value
                : `+${value}`
            : ""

    return (
        <fieldset className={cn("flex flex-col  w-full relative", wrapperClassName)}>
            {label && (
                <FieldLabel
                    htmlFor={name}
                    required={required}
                    isError={!!error}
                    className="text-xs"
                >
                    {label}
                </FieldLabel>
            )}
            <PhoneInput
                hideDropdown
                inputProps={{ autoComplete: "off" }}
                className={cn(
                    "w-full h-10 md:h-11 rounded-md has-[input:focus]:ring-1 has-[input:focus]:ring-ring has-[input:focus]:ring-offset-0 outline-none!",
                    className
                )}
                inputClassName={cn(
                    "w-full h-full! text-foreground! rounded-r-md! px-3 dark:bg-secondary! border-input! text-sm!",
                    inputClassName,
                    control._formState.errors?.[name] &&
                    "border-destructive/30! focus:border-border ring-destructive/30! placeholder:text-destructive"
                )}
                countrySelectorStyleProps={{
                    // className="hidden",
                    buttonClassName:
                        cn(
                            "h-full! px-3! rounded-l-md! dark:bg-secondary! border-none border-r! border-input!",
                            control._formState.errors?.[name] &&
                            "border-destructive/30! focus:border-border ring-destructive/30! placeholder:text-destructive"
                        ),
                    ...countrySelectorStyleProps,
                }}
                value={val}
                defaultCountry="uz"
                placeholder={label}
                {...field}
                {...props}
            />
            {!!error && !hideError && (
                <FieldError className="absolute -bottom-5">{error.message || error.root?.message}</FieldError>
            )}
        </fieldset>
    )
}
