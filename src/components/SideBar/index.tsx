import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSuggestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
          <SearchInput placeholder="Buscar no Twitter" />
          <SearchIcon />
      </SearchWrapper>

<StickyBox>
      <Body>
        <List 
          title="Talvez você curta" 
          elements={[
            <FollowSugestion

                name="Nome de Usuário"
                nickname="@nickname"
            />
          ]}
        />

      <List 
          title="Talvez você curta" 
          elements={[
             <News />,
             <News />, 
             <News />
        ]}
        />


      <List 
          title="Talvez você curta" 
          elements={[
             <FollowSugestion 
             
                name="Nome de Usuário"
                nickname="@nickname"
             />
        ]}
        />

        <List 
          title="Talvez você curta"
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
      </Body>
</StickyBox>
    </Container>
  );
}

export default SideBar;