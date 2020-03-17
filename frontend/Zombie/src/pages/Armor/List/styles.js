import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#262630', '#1B2D4E']
})`
  flex:1;
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

export const Registros = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
`;

export const IconRight = styled.TouchableOpacity``;

export const List = styled.FlatList.attrs({
	paddingHorinzontal: 15,
	paddingVertical: 20
})`
  margin-top: 12px;
`;

