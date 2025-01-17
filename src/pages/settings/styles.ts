import styled from "styled-components";

import { Button as BaseButton } from "shared/components/button";

import { Form as BaseForm } from "pages/settings/components/form";

import Box from "@mui/material/Box";

export const Wrapper = styled(Box).attrs({
  sx: {
    height: 1000,
    marginTop: -4,
    paddingLeft: 2,
    paddingTop: 2,
    background: (theme) => theme.palette.background.default,
  },
})`
  width: "100vw";
  height: "100vh";
`;

export const Title = styled.h1`
  color: #fff;
  margin: 2rem 1rem;
`;

export const Form = styled(BaseForm)``;

export const Button = styled(BaseButton)`
  width: 6rem;
  height: 3.5rem;
`;
