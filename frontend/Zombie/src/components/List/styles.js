import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#08090B', '#08090B']
  })`
	flex:1;
  `;

export const Header = styled.View`
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