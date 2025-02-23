import ShortArticle from '../article/ShortArticle.jsx';
import CreateForm from "../creation/CreateForm.jsx";
import TopicManagement from "../../topics/TopicManagement.jsx";
import {useState} from "react";
import SmallCardIcon from "/assets/icons/grid-card.png";
import BigCardIcon from "/assets/icons/big-card.png";
import styled from "@emotion/styled";

// Styled Components
const ArticlesContainer = styled.div`
  padding: 0 30px;
    @media (max-width: 768px) {
        margin: 3px 0;
        padding: 3px 0;
        width: 100%;
    }
    @media (max-width: 425px) {
        margin: 3px 0;
        padding: 3px 0;
        width: 100%;
    }
`;

const ToolsContainer = styled.div`
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SearchInput = styled.input`
  width: 400px;
  height: 36px;
  padding: 5px 10px;
  font-size: 14px;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.componentBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 20px;
  box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
  transition: border-color 0.5s ease, box-shadow 0.5s ease;
    @media (max-width: 768px) {
        width: 250px;
    }
    
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.textColor};
    box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
`;

const ViewButtons = styled.div`
  height: 50px;
  display: flex;
  gap: 5px;
`;

const ViewButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 2px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.5s ease, border-color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
  }

  img {
    height: 40px;
    width: 40px;
  }
`;

const ActionButtons = styled.div`
  height: 50px;
  display: flex;
  gap: 5px;
`;

const ActionButton = styled.button`
  height: auto;
  padding: 8px 12px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.buttonBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.5s ease, border-color 0.5s ease;

  &:hover {
    background-color: ${({ theme }) => theme.buttonBackgroundColorHover};
  }
`;

const ArticlesListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow wrapping to next line for small cards */
  gap: 10px; /* Space between articles */
  justify-content: center; /* Center articles on the page */
`;

// Styled Components for Popup
const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PopupWindow = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    max-width: 900px;
    height: auto;
    max-height: 78%;
    background-color: ${({theme}) => theme.componentBackground};
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    z-index: 1000;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ArticlesList = (props) => {
    const [searchString , setSearchString] = useState("");
    const [cardSize, setCardSize] = useState("small");

    const normalizeString = (str) => {
        return str
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
    }

    const filteredArticles = props.articlesData.filter((article) =>
        normalizeString(article.title).includes(normalizeString(searchString)));

    function getArticlesList(articlesData) {
        return articlesData.map((article) => {
            return <ShortArticle
                article={article}
                topicsData={props.topicsData}
                cardSize={cardSize}/>
        })
    }

    console.log(props.articlesData);

    return (
        <ArticlesContainer>
            <ToolsContainer>
                {/* Search Bar */}
                <SearchInput
                    type="text"
                    placeholder="hledaaaat..."
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />

                {/* View Buttons */}
                <ViewButtons>
                    <ViewButton onClick={() => setCardSize("small")}>
                        <img src={SmallCardIcon} alt="Small Cards" />
                    </ViewButton>
                    <ViewButton onClick={() => setCardSize("big")}>
                        <img src={BigCardIcon} alt="Big Cards" />
                    </ViewButton>
                </ViewButtons>

                {props.creationForms ? (
                    <ActionButtons>
                        <ActionButton onClick={props.setVisibility}>
                            Vytvořit článek
                        </ActionButton>
                        <ActionButton onClick={props.setTopVisibility}>
                            Kategorie
                        </ActionButton>
                    </ActionButtons>
                ) : null}

                {props.visiblePopUp && (
                    <>
                        <PopupOverlay onClick={props.setVisibility}></PopupOverlay>
                        <PopupWindow>
                            <CreateForm
                                articlesData={props.articlesData}
                                setVisibility={props.setVisibility}
                                setArticlesData={props.setArticlesData}
                                topicsData={props.topicsData}
                            />
                        </PopupWindow>
                    </>
                )}
                {/* Popup for Topic Management */}
                {props.topVisibility && (
                    <>
                        <PopupOverlay onClick={props.setTopVisibility}></PopupOverlay>
                        <PopupWindow>
                            <TopicManagement
                                setTopVisibility={props.setTopVisibility}
                                setTopicsData={props.setTopicsData}
                                setArticlesData={props.setArticlesData}
                                articlesData={props.articlesData}
                                topicsData={props.topicsData}
                            />
                        </PopupWindow>
                    </>
                )}
            </ToolsContainer>

            {/* Articles List */}
            <ArticlesListContainer>
                {getArticlesList(filteredArticles)}
            </ArticlesListContainer>
        </ArticlesContainer>

    );

};

export default ArticlesList;