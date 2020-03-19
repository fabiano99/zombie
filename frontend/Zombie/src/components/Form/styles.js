import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#08090B', '#08090B']
})`
  flex:1;
  align-items: center;
`;

export const Input = styled.TextInput`
  background: #FFF;
  color: #222;
  font-size: 17px;
  border-radius: 7px;
  width: 90%;
  margin-top: 25px;
  margin-bottom: 15px;
  padding: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-radius: 20px
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #222;
`;

export const TitleText = styled.Text`
  width: 90%;
  font-size: 26px
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
  margin-right: 20px;
  margin-top: 10px;
`;

export const TextError = styled.Text`
  color: #EF230C;
`;

export const IconRight = styled.TouchableOpacity``;