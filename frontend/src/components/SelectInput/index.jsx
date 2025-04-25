import { SelectInputContainer, Label, Select, Option } from "./styles";

export default function SelectInput({ label, name, options }) {
    return (
        <SelectInputContainer>
            <Label htmlFor={name}>{label}</Label>
            <Select name={name}>
                {options.map((option) => (
                    <Option key={option.value} value={option.value}>
                        {option.label}
                    </Option>
                ))}
            </Select>
        </SelectInputContainer>
    );
}