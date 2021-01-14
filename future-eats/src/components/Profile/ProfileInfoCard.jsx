import { ProfileInfoCardContainer } from '../../styles/components/ProfileInfoCardContainer';
import EditIcon from '../../assets/edit.png';
import { useContext, useEffect } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import { goToEditProfile } from '../../router/Coordinator';
export function ProfileInfoCard() {
  const { states, requests } = useContext(GlobalStateContext);
  const history = useHistory();
  return (
    <ProfileInfoCardContainer>
      <img src={EditIcon} onClick={() => goToEditProfile(history)} />
      <p>{states.profileInfo ? states.profileInfo.name : 'carregando...'}</p>
      <p>{states.profileInfo ? states.profileInfo.email : ''}</p>
      <p>{states.profileInfo ? states.profileInfo.cpf : ''}</p>
    </ProfileInfoCardContainer>
  );
}
