import styled from 'styled-components/native';

export const AreaPicker = styled.View`
  width: 90%;
  padding-top: 0;
  flex-direction: row;
  font-size: 26px
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
`;

export const PickerItem = styled.Picker`
  height: 50px;
  width: 100%;
  background-color: rgba(255,255,255, 0.9);
  margin-top: 20px;
  font-size: 16px;
  border-radius: 20px;
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
  border-radius: 10px
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
