import ProfileHeader from "../ProfileHeader";
import PetForm from "../PetForm";
import { PetProfileCreationContainer } from "./styles";

export default function PetProfileCreation() {
    return (
        <PetProfileCreationContainer>
            <ProfileHeader></ProfileHeader>
            <PetForm></PetForm>
        </PetProfileCreationContainer>
    );
}