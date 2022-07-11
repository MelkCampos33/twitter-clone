import React from 'react';

import { 
    Container,
    Avatar,
    Info,
    FollowBotton 

} from './styles';

interface Props {
    name: string;
    nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({name, nickname}) => {

  return (
    <Container>
        <div>
            <Avatar />

            <Info>
                <strong>{name}</strong>
                <span>{nickname}</span>
            </Info>
        </div>
        
        <FollowBotton outlined> Seguir </FollowBotton>
    </Container>
  );
}

export default FollowSuggestion;