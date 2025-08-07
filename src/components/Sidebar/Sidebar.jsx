import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faChartLine,
  faChartColumn,
  faWallet,
  faChartPie,
  faEnvelope,
  faSliders,
  faPhoneVolume,
  faAngleLeft,
  faAngleRight,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo.png';
import PropTypes from 'prop-types';

const themeVariables = {
  light: {
    bg: 'var(--color-sidebar-background-light-default)',
    bgHover: 'var(--color-sidebar-background-light-hover)',
    bgActive: 'var(--color-sidebar-background-light-active)',
    text: 'var(--color-text-light-default)',
    textHover: 'var(--color-text-light-hover)',
    textActive: 'var(--color-text-light-active)',
    logoColor: 'var(--color-text-logo-light-default)',
    btnBgDefault: 'var(--color-button-background-light-default)',
    btnBgActive: 'var(--color-button-background-light-active)',
  },
  dark: {
    bg: 'var(--color-sidebar-background-dark-default)',
    bgHover: 'var(--color-sidebar-background-dark-hover)',
    bgActive: 'var(--color-sidebar-background-dark-active)',
    text: 'var(--color-text-dark-default)',
    textHover: 'var(--color-text-dark-hover)',
    textActive: 'var(--color-text-dark-active)',
    logoColor: 'var(--color-text-logo-dark-default)',
    btnBgDefault: 'var(--color-button-background-dark-default)',
    btnBgActive: 'var(--color-button-background-dark-active)',
  },
};

const routes = [
  { title: 'Dashboard', icon: faHouse, path: '/' },
  { title: 'Sales', icon: faChartLine, path: '/sales' },
  { title: 'Costs', icon: faChartColumn, path: '/costs' },
  { title: 'Payments', icon: faWallet, path: '/payments' },
  { title: 'Finances', icon: faChartPie, path: '/finances' },
  { title: 'Messages', icon: faEnvelope, path: '/messages' },
];

const bottomRoutes = [
  { title: 'Settings', icon: faSliders, path: '/settings' },
  { title: 'Support', icon: faPhoneVolume, path: '/support' },
];


const SidebarContainer = styled.div`
  position: fixed;
  width: ${(props) => (props.$opened ? '170px' : '60px')};
  background-color: ${(props) => themeVariables[props.color].bg};
  color: ${(props) => themeVariables[props.color].text};
  transition: width 0.3s ease;
  height: 100vh;
  display: flex;
  flex-direction: column;
  border: 4px double ${(props) => themeVariables[props.color].btnBgActive};
  border-radius: 15px;
  box-sizing: border-box;
`;

const TextWrapper = styled.span`
  white-space: nowrap;
  overflow: hidden;
  position: relative;
  transition:
    opacity 0.2s ease,
    max-width 0.2s ease,
    transform 0.2s ease;
  opacity: ${(props) => (props.$opened ? 1 : 0)};
  max-width: ${(props) => (props.$opened ? '170px' : '0')};
  transform: ${(props) => (props.$opened ? 'translateX(0)' : 'translateX(20px)')};
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  padding-right: 0;
`;

const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-weight: 600;
    color: ${(props) => themeVariables[props.color].logoColor};
    font-size: 15px;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 19px;
  left: ${(props) => (props.$opened ? '153px' : '63px')};
  width: 20px;
  height: 20px;
  padding: 0;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  background-color: ${(props) =>
    props.$opened
      ? themeVariables[props.color].btnBgActive
      : themeVariables[props.color].btnBgDefault};
  border-radius: 50%;
  transition:
    left 0.2s ease,
    transform 0.2s ease,
    background-color 0.2s ease;

  svg {
    width: 10px;
    height: 10px;
    padding-bottom: 1px;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: inherit;
  padding-left: 10px;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.$opened ? '115px' : '12px')};
  height: 12px;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  font-size: 12px;
  color: inherit;
  transition: 
    background-color 0.2s ease,
    width 0.2s ease;

  &:hover {
    background-color: ${(props) => themeVariables[props.color].bgHover};
    color: ${(props) => themeVariables[props.color].textHover};
  }

  ${(props) =>
    props.$active &&
    css`
      background-color: ${themeVariables[props.color].bgActive};
      color: ${themeVariables[props.color].textActive};
  `}

  svg {
    padding-right: 10px;
  }
`;

const Sidebar = ({ color = 'light' }) => {
  const [isOpened, setIsOpened] = useState(true);
  const [theme, setTheme] = useState(color);

  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;  

  const handleToggleSidebar = () => setIsOpened((prev) => !prev);
  const handleToggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <SidebarContainer color={theme} $opened={isOpened}>
      <TopSection>
        <LogoWrapper color={theme}>
          <img src={logo} alt="Logo" />
          <TextWrapper $opened={isOpened}>TensorFlow</TextWrapper>
        </LogoWrapper>
        <ToggleButton color={theme} $opened={isOpened} onClick={handleToggleSidebar}>
          <FontAwesomeIcon icon={isOpened ? faAngleLeft : faAngleRight} />
        </ToggleButton>
      </TopSection>

      <MenuWrapper>
      <Menu>
        {routes.map(({ title, icon, path }) => (
          <Item
            key={path}
            color={theme}
            $opened={isOpened}
            $active={pathname === path}
            onClick={() => navigate(path)}
          >
            <FontAwesomeIcon icon={icon} />
            <TextWrapper $opened={isOpened}>{title}</TextWrapper>
          </Item>
        ))}
      </Menu>
      <Menu>
        {bottomRoutes.map(({ title, icon, path }) => (
          <Item
            key={path}
            color={theme}
            $opened={isOpened}
            $active={pathname === path}
            onClick={() => navigate(path)}
          >
            <FontAwesomeIcon icon={icon} />
            <TextWrapper $opened={isOpened}>{title}</TextWrapper>
          </Item>
        ))}

        <Item color={theme} $opened={isOpened} onClick={handleToggleTheme}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
          <TextWrapper $opened={isOpened}>{theme === 'light' ? 'Dark Theme' : 'Light Theme'}</TextWrapper>
        </Item>
      </Menu>
      </MenuWrapper>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
    color: PropTypes.string,
};

export default Sidebar;
