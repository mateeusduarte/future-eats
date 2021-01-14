import { ProfileInfoCardContainer } from '../../styles/components/ProfileInfoCardContainer';
import EditIcon from '../../assets/edit.png';
import { useEffect, useContext } from 'react';
import GlobalStateContext from '../../global/GlobalStateContext';
import { useHistory } from 'react-router-dom';
import { goToEditAddress } from '../../router/Coordinator';

export function ProfileAddressInfoCard(props) {
  const { states, requests } = useContext(GlobalStateContext);
  const history = useHistory();
  return (
    <ProfileInfoCardContainer>
      <img src={EditIcon} onClick={() => goToEditAddress(history)} />
      <h2>{props.h2 ? 'Endereço de entrega' : 'Endereço Cadastrado'}</h2>
      <p>{states.profileInfo ? states.profileInfo.address : 'carregando...'}</p>
    </ProfileInfoCardContainer>
  );
}
