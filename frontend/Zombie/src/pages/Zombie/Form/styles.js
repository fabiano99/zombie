import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Container = styled(LinearGradient).attrs({
  colors: ['#262630', '#1B2D4E']
})`
  flex:1;
  align-items: center;
`;

export const Input = styled.TextInput.attrs({
  placehodlerTextColor: '#222'
})`
  height: 50px;
  width: 90%;
  background-color: rgba(255,255,255, 0.9);
  margin-top: 30px;
  font-size: 16px;
`;



export const SubmitButton = styled.TouchableOpacity`
  height: 50px;
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const AreaPicker = styled.View`
  width: 90%;
  padding-top: 0;
  flex-direction: row;
  font-size: 26px
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  text-align: center;
`;

export const PickerItem = styled.Picker`
  height: 50px;
  width: 70%;
  background-color: rgba(255,255,255, 0.9);
  margin-top: 20px;
  font-size: 16px;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50px;
  width: 18%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const RemoveButton = styled.TouchableOpacity`
  height: 50px;
  width: 50%;
  margin-top: 0px;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
`;

export const SubmitText = styled.Text`
  font-size: 20px;
  color: #222;
`;

export const DefenseSlider = styled.Slider`
  width: 90%;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
`;

export const DefenseText = styled.Text`
  width: 90%;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const TitleText = styled.Text`
  width: 90%;
  font-size: 26px
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  color: white;
`;

export const AreaEquipment = styled.View`
  width: 100%;
  padding-top: 0;
  flex-direction: row;
  font-size: 26px
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  text-align: center;
`;

export const ViewEquipment = styled.View`
  width: 90%;
  height: 100px;
  padding: 10px;
  padding-top: 0;
  flex-direction: row;
  font-size: 26px
  margin-top: 5px;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
  background-color: white;
`;



export const Label = styled.View`
  width: 90%;
  flex-direction: row;
  font-size: 26px
  margin-top: 5px;
  align-items: flex-start;
  justify-content: flex-start;
  font-weight: bold;
`;

export const TextError = styled.Text`
  color: #EF230C;
`;