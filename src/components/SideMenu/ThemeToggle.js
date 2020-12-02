import { useContext } from 'react';
import { LightDarkModeContext } from '../../providers/LightDarkModeProvider';
import styled from 'styled-components';
import { Switch } from 'antd';

export const ModeSwitch = styled(Switch)`
    margin-left: 0.5rem;
`;

export const ThemeSwitchContainer = styled.div`
    margin-right: 1rem;
    display: flex;
    justify-content: flex-end;
`;

function ThemeToggle() {
  const { mode, setMode } = useContext(LightDarkModeContext);

  return (
    <ThemeSwitchContainer>
        Tema: 
        <ModeSwitch 
            checkedChildren="light" 
            unCheckedChildren="dark" 
            defaultChecked
            checked={mode === 'light'} 
            onChange={(checked) => setMode((checked) ? 'light' : 'dark')}
        />
    </ThemeSwitchContainer>
  );
}

export default ThemeToggle;