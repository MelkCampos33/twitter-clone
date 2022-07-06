import React from 'react';

import Feed from '../Feed';

import { 
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton

} from './styles'; 

const ProfilePage: React.FC = () => {
  return (
    <Container>
        <Banner>
            <Avatar />
        </Banner>

        <ProfileData>
            <EditButton outlined> Editar Perfil </EditButton>

            <h1> Nome do usuario </h1>
            <h2>@usuario</h2>

            <p>Developed for nasa_404</p>

            <ul>
              <li>
                <LocationIcon />
                Minas Gerais, Brasil
              </li>

              <li>
                <CakeIcon />
                Nascido(a) em 3 de dezembro de 2000
              </li>
            </ul>

            <Followage>
                <span>
                  seguindo <strong>81</strong>
                </span>
                <span>
                  <strong>1042 </strong> seguidores
                </span>
            </Followage>
        </ProfileData>

        <Feed />
    </Container>
  );
}

export default ProfilePage;

 