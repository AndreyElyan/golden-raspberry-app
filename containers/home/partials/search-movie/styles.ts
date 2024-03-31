import styled from "styled-components";
import { Input as InputComponent } from "@/components/ui/input";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const StyledInput = styled(InputComponent)`
  max-width: 280px;
  box-sizing: border-box;
`;
