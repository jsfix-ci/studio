import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { requestToken } from 'services/loginService';

import { 
    Box, 
    Button, 
    Grid, 
    FormControl, 
    IconButton, 
    OutlinedInput, 
    InputAdornment,
    InputLabel
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material'

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleSetEmail = (event) => {
        if(!event.target)  return

        setEmail(event.target.value)
    }

    const handleSetPassword = (event) => {
        if(!event.target) return

        setPassword(event.target.value)
    }

    const handleLogin = async () => {
        await requestToken()

        navigate('/')
    }

    return (
        <Grid 
            container
            alignItems="center"
            justifyContent="center"
            sx={{
                height: '100vh',
                background: (theme) => theme.palette.background.default
            }}
        >
            <Box
                sx={{
                    width: 320
                }}
            >   
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 4
                    }}
                >
                    <svg width="300" height="98" viewBox="0 0 300 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M195.433 97.9096C202.038 97.9096 205.736 94.906 205.736 89.6416C205.736 84.1673 201.925 82.7301 197.629 81.6966L195.417 81.1637C193.059 80.5985 191.59 80.0495 191.59 78.1763C191.59 76.4322 192.865 75.5441 195.514 75.5441C198.469 75.5441 200.746 76.6583 202.555 78.6446L205.703 74.3007C203.297 71.7654 199.938 70.5381 195.724 70.5381C189.248 70.5381 185.421 73.4448 185.421 78.58C185.421 83.1661 188.409 85.5561 193.479 86.751L195.659 87.2678C198.114 87.8491 199.567 88.4305 199.567 90.3198C199.567 92.08 198.001 92.9036 195.465 92.9036C192.559 92.9036 190.056 91.8216 187.666 89.577L184.614 93.9532C187.359 96.6177 191.105 97.9096 195.433 97.9096Z" fill="#2D77EF"/>
                        <path d="M221.061 92.4514C220.254 92.6452 219.64 92.7259 218.929 92.7259C217.266 92.7259 216.749 92.193 216.749 90.4167V81.8742H221.271V77.1428H216.749V71.1194L210.936 72.0399V77.1428H208.304V81.8742H210.936V91.4664C210.936 95.7941 213.003 97.6835 217.202 97.6835C218.51 97.6835 219.979 97.522 221.432 97.086L221.061 92.4514Z" fill="#2D77EF"/>
                        <path d="M237.32 90.3037C236.577 91.9993 235.188 92.9359 233.46 92.9359C231.442 92.9359 230.602 91.8701 230.602 89.8515V77.1428H224.789V90.013C224.789 95.4227 227.05 97.9096 231.603 97.9096C234.462 97.9096 236.48 96.7792 237.788 94.2923L238.24 97.409H243.133V77.1428H237.32V90.3037Z" fill="#2D77EF"/>
                        <path d="M260.082 79.1775C259.016 77.4334 257.288 76.6422 254.995 76.6422C249.246 76.6422 246.355 81.2283 246.355 87.2032C246.355 93.1296 249.085 97.9096 254.656 97.9096C257.449 97.9096 259.597 96.7307 260.679 94.3085L261.309 97.409H265.895V69.5207H260.082V79.1775ZM256.545 93.275C253.913 93.275 252.653 91.0949 252.653 87.3001C252.653 83.5214 253.945 81.2929 256.626 81.2929C258.273 81.2929 259.5 82.1972 260.082 84.0381V90.6428C259.452 92.4191 258.144 93.275 256.545 93.275Z" fill="#2D77EF"/>
                        <path d="M273.258 74.8012C275.438 74.8012 276.746 73.6224 276.746 71.8138C276.746 70.0213 275.438 68.8425 273.258 68.8425C271.094 68.8425 269.77 70.0213 269.77 71.8138C269.77 73.6224 271.094 74.8012 273.258 74.8012ZM276.164 97.409V77.1428H270.351V97.409H276.164Z" fill="#2D77EF"/>
                        <path d="M289.549 97.9096C295.944 97.9096 299.513 93.8886 299.513 87.2516C299.513 80.647 295.944 76.626 289.549 76.626C283.155 76.626 279.586 80.647 279.586 87.2516C279.586 93.8886 283.155 97.9096 289.549 97.9096ZM289.549 93.3557C287.062 93.3557 285.658 91.6601 285.658 87.2516C285.658 82.9562 287.062 81.1798 289.549 81.1798C292.02 81.1798 293.441 82.9562 293.441 87.2516C293.441 91.6601 292.02 93.3557 289.549 93.3557Z" fill="#2D77EF"/>
                        <path d="M6.13638 97.4994V86.9545H16.9235V82.223H6.13638V76.1512H18.2315V71.1291H0V97.4994H6.13638Z" fill="white"/>
                        <path d="M27.0505 97.8062C28.4716 97.8062 29.4082 97.6124 30.2802 97.3056L30.2156 93.1393C28.5362 93.3815 27.6319 93.1554 27.6319 91.5406V69.6111H21.8185V92.1542C21.8185 96.4659 24.0631 97.8062 27.0505 97.8062Z" fill="white"/>
                        <path d="M41.9676 98C48.3623 98 51.9311 93.979 51.9311 87.342C51.9311 80.7374 48.3623 76.7164 41.9676 76.7164C35.5728 76.7164 32.004 80.7374 32.004 87.342C32.004 93.979 35.5728 98 41.9676 98ZM41.9676 93.4461C39.4807 93.4461 38.0758 91.7505 38.0758 87.342C38.0758 83.0466 39.4807 81.2702 41.9676 81.2702C44.4383 81.2702 45.8593 83.0466 45.8593 87.342C45.8593 91.7505 44.4383 93.4461 41.9676 93.4461Z" fill="white"/>
                        <path d="M65.1571 97.4994L67.3856 87.6004C67.6763 86.2439 67.9185 84.8552 68.1446 83.4826H68.193C68.4191 84.8552 68.6775 86.2439 68.9681 87.6004L71.1966 97.4994H78.4472L82.9365 77.2332L77.3976 77.2493L75.4275 87.8911C75.1207 89.5705 74.8623 91.2984 74.5716 93.0101H74.5393C74.2648 91.3145 73.9741 89.5705 73.6189 87.8749L71.4065 77.2332H64.9472L62.7187 87.8749C62.3796 89.5705 62.0728 91.3145 61.8144 93.0101H61.7821C61.5076 91.2984 61.2331 89.5705 60.9262 87.8911L58.94 77.2493L53.4173 77.2332L57.9065 97.4994H65.1571Z" fill="white"/>
                        <path d="M97.036 76.7326C94.6622 76.7326 92.7082 77.653 91.481 79.6877V69.6111H85.6676V97.4994H90.2537L90.8189 94.6572C91.9977 96.8696 94.0486 98 96.5838 98C101.767 98 104.981 93.7045 104.981 87.0514C104.981 80.3498 101.929 76.7326 97.036 76.7326ZM95.0336 93.3492C93.3865 93.3492 92.1269 92.4449 91.481 90.6363V84.2093C92.1269 82.2714 93.4672 81.3833 95.1305 81.3833C97.8757 81.3833 98.9254 83.854 98.9254 87.2774C98.9254 91.0885 97.6173 93.3492 95.0336 93.3492Z" fill="white"/>
                        <path d="M120.653 90.3941C119.911 92.0897 118.522 93.0263 116.794 93.0263C114.775 93.0263 113.936 91.9605 113.936 89.9419V77.2332H108.122V90.1034C108.122 95.5131 110.383 98 114.937 98C117.795 98 119.814 96.8696 121.122 94.3827L121.574 97.4994H126.467V77.2332H120.653V90.3941Z" fill="white"/>
                        <path d="M133.807 74.8916C135.987 74.8916 137.295 73.7128 137.295 71.9042C137.295 70.1117 135.987 68.9329 133.807 68.9329C131.643 68.9329 130.319 70.1117 130.319 71.9042C130.319 73.7128 131.643 74.8916 133.807 74.8916ZM136.714 97.4994V77.2332H130.9V97.4994H136.714Z" fill="white"/>
                        <path d="M146.384 97.8062C147.805 97.8062 148.742 97.6124 149.614 97.3056L149.549 93.1393C147.87 93.3815 146.966 93.1554 146.966 91.5406V69.6111H141.152V92.1542C141.152 96.4659 143.397 97.8062 146.384 97.8062Z" fill="white"/>
                        <path d="M165.064 79.2679C163.998 77.5238 162.27 76.7326 159.977 76.7326C154.228 76.7326 151.338 81.3187 151.338 87.2936C151.338 93.22 154.067 98 159.638 98C162.432 98 164.58 96.8211 165.661 94.3989L166.291 97.4994H170.877V69.6111H165.064V79.2679ZM161.528 93.3654C158.895 93.3654 157.636 91.1853 157.636 87.3905C157.636 83.6118 158.928 81.3833 161.608 81.3833C163.255 81.3833 164.483 82.2876 165.064 84.1285V90.7332C164.434 92.5095 163.126 93.3654 161.528 93.3654Z" fill="white"/>
                        <path d="M135.984 43.0608H130.429L130.429 10.1247L135.984 10.1247L135.984 43.0608Z" fill="#2D77EF"/>
                        <path d="M161.381 4.17245C161.381 2.8575 162.447 1.79153 163.762 1.79153H173.285C174.6 1.79153 175.666 2.8575 175.666 4.17245V13.6961C175.666 15.0111 174.6 16.077 173.285 16.077H163.762C162.447 16.077 161.381 15.0111 161.381 13.6961V4.17245Z" fill="#2D77EF"/>
                        <path d="M147.492 24.4103C147.492 23.0953 148.558 22.0293 149.873 22.0293H159.397C160.712 22.0293 161.778 23.0953 161.778 24.4103V33.9339C161.778 35.2489 160.712 36.3148 159.397 36.3148H149.873C148.558 36.3148 147.492 35.2489 147.492 33.9339V24.4103Z" fill="#2D77EF"/>
                        <path d="M126.064 48.2194C126.064 44.2746 129.262 41.0767 133.206 41.0767C137.151 41.0767 140.349 44.2746 140.349 48.2194C140.349 52.1643 137.151 55.3622 133.206 55.3622C129.262 55.3622 126.064 52.1643 126.064 48.2194Z" fill="#2D77EF"/>
                        <path d="M131.704 0.697355C132.634 -0.232452 134.141 -0.232451 135.071 0.697355L141.805 7.43161C142.735 8.36141 142.735 9.86893 141.805 10.7987L135.071 17.533C134.141 18.4628 132.634 18.4628 131.704 17.533L124.97 10.7987C124.04 9.86893 124.04 8.36141 124.97 7.43161L131.704 0.697355Z" fill="#2D77EF"/>
                        <path d="M159 12.1088L130.826 12.1088L130.826 6.55337L159 6.55337V12.1088Z" fill="#2D77EF"/>
                        <path d="M145.111 32.3466H132.016L132.016 26.7911L145.111 26.7911V32.3466Z" fill="#2D77EF"/>
                        <path d="M136.809 48.3185C136.809 50.3413 135.17 51.9811 133.147 51.9811C131.124 51.9811 129.484 50.3413 129.484 48.3185C129.484 46.2957 131.124 44.6559 133.147 44.6559C135.17 44.6559 136.809 46.2957 136.809 48.3185Z" fill="#151521"/>
                    </svg>
                </Box>
                <FormControl fullWidth sx={{ mb: 2 }}>
                    <InputLabel htmlFor="email">E-mail</InputLabel>
                    <OutlinedInput
                        id="email"
                        type="email"
                        placeholder='Digite seu e-mail'
                        label='E-mail'
                        required
                        value={email}
                        onChange={handleSetEmail}
                    />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }} >
                    <InputLabel htmlFor="password">Senha</InputLabel>
                    <OutlinedInput 
                        id="password"
                        label='Senha'
                        type={showPassword ? 'text' : 'password'}
                        required
                        placeholder='Digite sua senha'
                        value={password}
                        onChange={handleSetPassword}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton 
                                    edge='end'
                                    aria-label='toggle password visibility'
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {
                                        showPassword ? <VisibilityOff /> : <Visibility />
                                    }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button variant='contained' fullWidth onClick={handleLogin}>Login</Button>
            </Box>
        </Grid>
    );
};

export default Login;
