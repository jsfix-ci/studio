import styled from "styled-components";

import Grid from "@mui/material/Grid";

import { StartProcess } from "pages/workflows/dialogs/start-process";

import { Table as SharedTable } from "shared/components/table";

export const Wrapper = styled(Grid).attrs({
  container: true,
  spacing: 2,
  sx: { marginTop: 0 },
})`
  height: calc(100% - 64px);
`;

export const TableContainer = styled(Grid).attrs({
  item: true,
  xs: 12,
})`
  height: calc(100% - 168px);
  overflow-y: auto;
`;

export const Table = styled(SharedTable)``;

export const StartProcessDialog = styled(StartProcess)``;
