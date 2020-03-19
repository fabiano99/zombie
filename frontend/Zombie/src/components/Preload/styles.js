import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Background = styled(LinearGradient).attrs({
    colors: ['#08090B', '#08090B']
})`
  flex: 1;
`; 

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;
`;
