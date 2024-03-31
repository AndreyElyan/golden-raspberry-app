import styled from "styled-components";
import { Input as InputComponent } from "@/components/ui/input";

export const WrapperInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const StyledInput = styled(InputComponent)`
  max-width: 280px;
  box-sizing: border-box;
`;
