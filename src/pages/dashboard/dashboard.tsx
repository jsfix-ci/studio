import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
import { useCookies } from 'react-cookie';
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

import { Content } from 'shared/components/content'
import { Header } from 'pages/dashboard/components/header'
import { Sidebar } from 'pages/dashboard/components/sidebar'

import Session from 'supertokens-auth-react/recipe/session'
import * as S from './styles'
import { getStorageItem, setStorageItem } from 'shared/utils/storage';
import { getAnonymousToken } from 'services/resources/token';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export const Dashboard: React.FC = () => {
  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [cookies, setCookie, removeCookie] = useCookies(['name']);

  const onMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  useEffect(() => {
    const request = async () => {
      const sessionExist = await Session.doesSessionExist()

      if (!sessionExist) {
        navigate('/auth')
        return;
      }

      const hasToken = !!getStorageItem('TOKEN')
      const userId = await Session.getUserId()

      if (!hasToken) {
        const token = await getAnonymousToken(userId);

        if (token) {
          setStorageItem('TOKEN', token);
        } else {
          removeCookie('sIRTFrontend' as any, { path: '/' });
          removeCookie('sFrontToken' as any, { path: '/' });
          navigate('/auth')
          return;
        }
      }
    }

    request()
  }, [])

  return (
    <S.Wrapper>
      <Header isOpen={menuIsOpen} onMenuClick={onMenuClick} />

      <Sidebar isOpen={menuIsOpen} />

      <Content padding={2}>
        <DrawerHeader />
        <Outlet />
      </Content>
    </S.Wrapper>
  )
}
