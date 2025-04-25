import { PetFormContainer } from "./styles";
import FormInput from "../FormInput";
import SelectInput from "../SelectInput";

export default function PetForm() {
    return (
        <PetFormContainer>
            <FormInput label="Name" name="name" type="text" placeholder="Name" />
            <FormInput label="Birthday" name="birthday" type="date" placeholder="Birthday" />
            <SelectInput label="Gender" name="gender" options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
            ]} />
            {/* update breed options later */}
            <SelectInput label="Breed" name="breed" options={[
                { value: 'dog', label: 'Dog' },
                { value: 'cat', label: 'Cat' },
            ]} />
            <FormInput label="Notes" name="notes" type="text" placeholder="Notes" />
        </PetFormContainer>
    );
}
