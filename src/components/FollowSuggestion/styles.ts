import styled from "styled-components";
import Button from '../Button';


export const Container = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Avatar = styled.div`

    width: 49%;
    height: 49%;
    background: var(-gray);
    border-radius: 50%;
    margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;

    > strong {
        font-size: 14px;
        color: var(--gray);
    }
`;

export const FollowBotton = styled(Button)`
    padding: 6px 17px;
`; 