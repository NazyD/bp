import styled from "@emotion/styled";

// Styled Components for Form Elements
export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px 16px;
    color: ${({theme}) => theme.textColor};
`;

export const FormTitle = styled.h1`
    font-size: 34px;
    color: var(--text-color);
    margin: 0;
`;

export const OneInputContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px; /* Adjust as needed */
`;

export const FormLabel = styled.label`
    position: absolute;
    left: 10px;
    top: 0;
    background-color: ${({theme}) => theme.componentBackground};
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    padding: 5px;
    color: ${({theme}) => theme.textColor};
    font-size: 12px;
    z-index: 999;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: 16px 14px;
    font-size: 16px;
    color: ${({theme}) => theme.textColor};
    background-color: ${({theme}) => theme.componentBackground};
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    box-sizing: border-box;
`;

export const FormTextarea = styled.textarea`
    width: 100%;
    position: relative;
    padding: 16px 14px;
    background-color: ${({theme}) => theme.componentBackground};
    font-size: 16px;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    color: ${({theme}) => theme.textColor};
    resize: none; 
    min-height: 150px;
    box-sizing: border-box;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end; /* Align buttons to the right */
    gap: 10px;
`;

export const FormButton = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-radius: 5px;
    background-color: ${({theme}) => theme.buttonBackgroundColor};
    color: ${({theme}) => theme.textColor};
    cursor: pointer;
    transition: background-color 0.5s ease, border-color 0.5s ease;

    &:hover {
        background-color: ${({theme}) => theme.buttonBackgroundColorHover};
    }
`;
export const CloseButton = styled.button`
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
    border: 1px solid white;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.componentBackground};
    color: ${({ theme }) => theme.textColor};
    cursor: pointer;
    transition: background-color 0.5s ease, border-color 0.5s ease;

    &:hover {
        background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    }
`;

export const AutocompleteContainer = styled.div`
    width: 100%;
    position: relative;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const AutocompleteLabel = styled.label`
    position: absolute;
    left: 10px;
    top: 0;
    background-color: ${({ theme }) => theme.componentBackground};
    transform: translateY(-50%);
    transition: all 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
    color: ${({ theme }) => theme.textColor};
    font-size: 12px;
    z-index: 999;
`;

export const InputWithDropdown = styled.div`
    position: relative;
`;

export const AutocompleteInput = styled.input`
    width: 100%;
    padding: 16px 14px;
    background-color: ${({ theme }) => theme.componentBackground};
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-radius: 5px;
    color: ${({ theme }) => theme.textColor};
    box-sizing: border-box;
`;

export const SelectedTopics = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    width: max-content;
    margin-bottom: 10px;
    position: absolute;
    top: 50%;
    left: 10px;
    right: 10px;
    transform: translateY(-50%);
    z-index: 999;
`;

export const TopicChip = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.componentBackgroundHover};
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 14px;
    color: ${({ theme }) => theme.textColor};
    margin-right: 5px;
`;

export const RemoveButton = styled.span`
    margin-left: 5px;
    cursor: pointer;
    font-size: 16px;
`;

export const Dropdown = styled.div`
    position: absolute;
    top: 90%;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.componentBackground};
    border: 1px solid ${({ theme }) => theme.borderColor};
    border-top: none;
    max-height: 150px;
    overflow-y: auto;
    z-index: 10;
`;

export const DropdownItem = styled.div`
    padding: 10px;
    cursor: pointer;
    font-size: 14px;
    background-color: ${({ selected, theme }) => selected ? theme.buttonBackgroundColorHover : 'transparent'};

    &:hover {
        background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
    }
`;