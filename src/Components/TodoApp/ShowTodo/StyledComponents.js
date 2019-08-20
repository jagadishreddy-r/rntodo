import styled from "styled-components";
import { Dimensions } from "react-native";
const screenHeight = Math.round(Dimensions.get("window").height) - 195;
export const Scroller = styled.ScrollView`
  height: ${screenHeight};
  background: #fff;
`;
