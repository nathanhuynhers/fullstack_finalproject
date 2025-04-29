import { ProfileEmail, ProfileHeaderContainer, ProfileName, ProfilePicture, ProfileInfo, ProfileNameAndEmail, AddButton } from "./styles";
import { auth } from '../../firebase';

export default function ProfileHeader({ name, email, imageUrl}) {
    const user = auth.currentUser;
    return (
        <ProfileHeaderContainer>
            <ProfilePicture src={imageUrl} />
            <ProfileInfo>
                <ProfileNameAndEmail>
                    <ProfileName>{user.displayName}</ProfileName>
                    <ProfileEmail>{user.email}</ProfileEmail>
                </ProfileNameAndEmail>
                <AddButton>Add</AddButton>
            </ProfileInfo>
        </ProfileHeaderContainer>
    );
}
