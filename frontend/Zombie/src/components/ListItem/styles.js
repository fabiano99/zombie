import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#FFF', '#FFF']
})`
  flex:1;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 7px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0,0,0,.4)
`;


export const Record = styled(LinearGradient).attrs({
  colors: ['#FFF', '#FFF']
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1px 5px;
  padding: 10px;
  border-radius: 10px
`;

export const Action = styled(LinearGradient).attrs({
  colors: ['#FFF', '#FFF']
})`
  flex-direction: row;
  align-items: center;
  margin: 1px 5px;
  padding: 10px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const ItemText = styled.Text`
  color: #666;
  font-size: 20px;
  font-weight: bold;
`;

export const ItemSubText = styled.Text`
  color: #AAA;
  font-size: 14px;
  font-weight: bold;
`;

export const IconActions = styled.TouchableOpacity`
  margin-left: 10px;
`;

