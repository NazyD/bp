import styled from "@emotion/styled";

export const NavbarContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: ${({theme}) => theme.componentBackground};
    transition: background-color 0.5s ease, color 0.5s ease;
    border-bottom: 1px solid ${({theme}) => theme.borderColor};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: relative;
    z-index: 10;
`;

export const NavbarLeft = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;

    .navbar-title {
        text-decoration: none;
        font-size: 20px;
        color: ${({theme}) => theme.textColor};
        font-weight: bold;
        display: flex;
        align-items: center;
        height: 100%;
    }
`;

export const NavbarCenter = styled.div`
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
`;

export const NavItem = styled.li`
    position: relative;
    margin: 0 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        font-size: 16px;
        color: ${({theme}) => theme.textColor};
        padding: 0 10px;
        height: 100%;
        min-width: 130px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({theme}) => theme.componentBackground};
        transition: background-color 0.5s ease, color 0.5s ease;

        &:hover {
            background-color: ${({theme}) => theme.componentBackgroundHover};
            border-radius: 5px;
            transition: background-color 0.5s ease, color 0.5s ease;
        }
    }

    &:hover > ul {
        display: block;
        flex-direction: column; /* Stack items in a column */
        opacity: 1; /* this need to be here for submenu to be shown */
        visibility: visible; /* this need to be here for submenu to be shown */
        height: auto; /* This allows it to grow properly */
    }
`;

export const Submenu = styled.ul`
    display: none;
    position: absolute;
    opacity: 0;
    visibility: hidden; /* this need to be here for submenu to be hidden */
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    background-color: ${({theme}) => theme.componentBackground};
    transition: background-color 0.5s ease, color 0.5s ease;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    list-style: none;
    padding: 0;
    z-index: 20;
    min-width: 100%;

    li {
        height: 60px;
        display: flex;
        align-items: center;
        text-align: center;
        white-space: nowrap;

        a {
            text-decoration: none;
            color: ${({theme}) => theme.textColor};
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.2s ease;

            &:hover {
                background-color: ${({theme}) => theme.componentBackgroundHover};
                transition: background-color 0.5s ease, color 0.5s ease;
            }
        }
    }
`;

export const NavbarRight = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`;

export const ThemeToggleButton = styled.button`
    padding: 5px 10px;
    border: 1px solid ${({theme}) => theme.borderColor};
    background-color: ${({theme}) => theme.buttonBackgroundColor};
    transition: background-color 0.5s ease, color 0.5s ease;
    color: ${({theme}) => theme.textColor};
    cursor: pointer;
    border-radius: 5px;

    &:hover {
        background-color: ${({theme}) => theme.buttonBackgroundColorHover};
        transition: background-color 0.5s ease, color 0.5s ease;
    }
`;

