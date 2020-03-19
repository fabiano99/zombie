import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#08090B', '#08090B']
})`
  flex:1;
  justify-content: space-between;
`;

export const Title = styled.Text`
  color: #DDD;
  font-size: 18px;
  font-style: italic;
`;

export const Link = styled.TouchableOpacity`
  background-color: #222;
  border-radius: 50px;
  width: 80%;
  height: 100px;
  margin: 20px;
  padding: 10px;
  align-items: center;
  justify-content: center;
`;

export const ButtonLogout = styled.TouchableOpacity`
  height: 100px;
  margin: 10px;
  padding: 10px
`;


export const AreaLink = styled.View`
  justify-content: center;
  align-items: center;
`;

export const AreaLogout = styled.View`
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-end;
  margin: 10px
`;

