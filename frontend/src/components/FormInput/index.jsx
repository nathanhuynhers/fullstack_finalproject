import { FormInputContainer, Label, Input } from "./styles";

export default function FormInput({ label, name, type, placeholder }) {
    return (
        <FormInputContainer>
            <Label htmlFor={name}>{label}</Label>
            <Input type={type} name={name} placeholder={placeholder} />
        </FormInputContainer>
    );
}