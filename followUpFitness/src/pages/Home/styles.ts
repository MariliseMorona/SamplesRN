import styled from 'styled-components/native';


export const Container = styled.View`
    flex: 1;
    background-color: #1e3ba1;
    padding-top: 32px;
    position: relative;
`;

export const HeaderContainer = styled.View`
    flex: 1;
    max-lenght: 240px;
    background-color: #1e3ba1;
    align-content: center;
`;

export const HeaderTitle = styled.Text`
font-size: 18px;
line-height: 21px;
color:#fff;
text-align: center;
margin-top: 20px;
`;

export const HeaderContainerHighlight = styled.View`
flex-direction: row;
justify-content: center;
align-items: flex-end;
`;

export const HeaderTextCounterHighlight = styled.Text`
font-size: 68px;
line-height: 80px;
color: #fff;
`;

export const HeaderTextHighlight = styled.Text`
font-size: 18px;
line-height: 21px;
color: #fff;
`;

export const BodyContainer = styled.Text`
flex: 2;
background-color: #fff;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
padding: 10px 20px;
`;

