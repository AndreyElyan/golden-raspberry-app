import styled, { css } from "styled-components";
import Card from "../card";

interface CardProps {
  imageUrl?: string;
}

export const CardComponent = styled(Card)<CardProps>`
  ${({ imageUrl }) =>
    imageUrl &&
    css`
      background-image: linear-gradient(
          to right,
          rgba(255, 255, 255, 0.6),
          rgba(255, 255, 255, 0)
        ),
        url(${imageUrl});
      background-repeat: no-repeat;
      background-position: right;
      background-size: cover;
      background-blend-mode: multiply;
    `}
`;
