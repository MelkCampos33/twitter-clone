import React from 'react';

import {
   Container,
   Retweeted,
   ProjectIcon,
   Body,
   Avatar,
   Content,
   Header,
   Dot,
   Description,
   ImageContent,
   Icons,
   Status,
   CommentIcon,
   RetweetIcon,
   LikeIcon, 
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <ProjectIcon />
        Você retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong> Twitter clone project </strong>
            <span> @nasa_404 </span>
            <Dot />
            <time>07 de jul</time>
          </Header>

          <Description> Descrição do tweet 🦷 </Description>
          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon />
              32
            </Status>

            <Status>
              <RetweetIcon />
              11
            </Status>

            <Status>
              <LikeIcon />
              562
            </Status>

          </Icons>
  
        </Content>
      </Body>  
      </Container>
  );
}

export default Tweet;