import React from 'react';

import ProfilePage from '../ProfilePage';

import { 
        Container,
        Header,
        BackIcon,
        ProfileInfo,
        SearchIcon,
        BottomMenu,
        HomeIcon,
        BellIcon,
        EmailIcon
} from './styles';

// Parte de cima do perfil do usuario

const Main: React.FC = () => {
  return (
    <Container>
        <Header>
            <button>
                <BackIcon />
            </button>

            <ProfileInfo>
                <strong> Nome do Usuario </strong>
                <span> 612 Tweets </span>
            </ProfileInfo>
        </Header>

        <ProfilePage />

        <BottomMenu>
            <HomeIcon />
            <SearchIcon />
            <BellIcon />
            <EmailIcon />
        </BottomMenu>

    </Container>
  );
}

export default Main;