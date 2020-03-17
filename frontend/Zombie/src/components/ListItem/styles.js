import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#fff', '#fff']
})`
  flex:1;
  border-radius: 5px;
  margin-bottom: 12px;
  padding: 7px;
  z-index: 3;
  box-shadow: 2px 2px rgba(0,0,0,.4)
`;

export const AreaSaldo = styled.View`
  align-items: center;
  margin: 30px 0 30px 0;  
`;

export const SaldoTitle = styled.Text`
  color: #DDD;
  font-size: 18px;
  font-style: italic;
`;

export const Saldo = styled.Text`
  color: #FFF;
  font-size: 28px;
  font-weight: bold;
`;

export const Record = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 1px 5px;
  padding: 10px;
  background-color: white
`;

export const Action = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 1px 5px;
  padding: 10px;
  background-color: white
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

