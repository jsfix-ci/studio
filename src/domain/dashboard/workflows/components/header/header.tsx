import { useCallback, useState } from 'react';

import { ModeView } from 'constants/mode-view';

import { Button } from 'shared/components/button'

import * as S from './styles'

type TPayload = {
  modeview: ModeView
}

type Props = {
  initialModeView?: ModeView,
  onChange: (newModelView: ModeView) => void
}

export const Header: React.FC<Props> = ({ initialModeView = ModeView.LIST, onChange }) => {
  const [payload, setPayload] = useState<TPayload>({
    modeview: initialModeView
  })

  const onChangeModeView = useCallback((_, newModeView: ModeView) => {
    setPayload(prev => ({ ...prev, modeview: newModeView }))
    onChange(newModeView)
  }, [onChange])

  return (
    <S.Wrapper>
      <S.Row>
        <S.Title>Workflows</S.Title>
        <Button title='Novo' variant='outlined' />
      </S.Row>
      <S.Row>
        <S.Input
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />

        <S.ToggleContainer value={payload.modeview} onChange={onChangeModeView}>
          <S.Toggle value={ModeView.LIST} aria-label="Show in list mode">
            <S.ListIcon />
          </S.Toggle>

          <S.Toggle value={ModeView.CARDS} aria-label="Show in card mode">
            <S.ModuleIcon />
          </S.Toggle>
        </S.ToggleContainer>
      </S.Row>
    </S.Wrapper>
  );
}