import { ProfileEmail, ProfileHeaderContainer, ProfileName, ProfilePicture, ProfileInfo, ProfileNameAndEmail, AddButton } from "./styles";

export default function ProfileHeader({ name, email, imageUrl}) {
    return (
        <ProfileHeaderContainer>
            <ProfilePicture src={imageUrl} />
            <ProfileInfo>
                <ProfileNameAndEmail>
                    <ProfileName>Alexa Rawles</ProfileName>
                    <ProfileEmail>alexarawles@gmail.com</ProfileEmail>
                </ProfileNameAndEmail>
                <AddButton>Add</AddButton>
            </ProfileInfo>
        </ProfileHeaderContainer>
    );
}