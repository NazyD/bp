import {useParams, useNavigate} from "react-router-dom";

import TopicsList from "../../topics/TopicsList.jsx";
import EditForm from "../edit/EditForm.jsx";
import {useEffect, useState} from "react";
import MoveUpButton from "../../components/MoveUpButton.jsx";
import styled from "@emotion/styled";

const ArticleContainer = styled.div`
    max-width: 900px;
    margin: 20px auto;
    padding: 20px;
    background-color: ${({ theme }) => theme.componentBackground};
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    @media (max-width: 768px) {
        margin: 10px;
        padding: 10px;
    }
`;

const ArticleTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 425px) {
        flex-direction: column;
        align-items: center;
    }
`;

const ArticleTitleLeft = styled.div`
    padding-right: 10px;
    font-size: 32px;
    font-weight: bold;
    text-align: right;
    color: ${({ theme }) => theme.textColor};
    h1{
        margin: 0;
        @media (max-width: 768px) {
            font-size: 32px;
        }
    }
`;

const ArticleTitleImage = styled.div`
  img{
      height: 300px;
      width: auto;
      @media (max-width: 1024px) {
          width: 220px;
          height: auto;
      }
      @media (max-width: 768px) {
          width: 170px;
          height: auto;
      }
      @media (max-width: 425px) {
          width: 160px;
          height: auto;
      }
  }
`;

const ArticleTitleRight = styled.div`
    display: flex;
    margin-left: 10px;
    justify-content: end;
`;

const ArticleTitleMetadata = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;
    text-align: left;
    justify-content: end;
    color: ${({ theme }) => theme.borderColor};
`;

const ArticleText = styled.div`
    display: flex;
    gap: 20px;
    padding: 50px;
    flex: 2;
    text-align: justify;
    font-size: 18px;
    line-height: 1.8;
    overflow: auto;
    @media (max-width: 425px) {
        margin: 5px 0;
        padding: 5px 0;
        font-size: 12px;
    }
`;

const ArticleContent = styled.div`
    color: ${({ theme }) => theme.textColor}
`;

const ArticleFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 20px;
`;

const ArticleUpdateButton = styled.div`
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #5cb85c; /* Green */
    color: white;
    :hover{
        background-color: #4cae4c;
    }
`;

const ArticleDeleteButton = styled.div`
    padding: 10px 15px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    background-color: #d9534f; /* Red */
    color: white;
    :hover{
        background-color: #c9302c;
    }
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

const Article = (props) => {
    const [articleText, setArticleText] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    const article = props.articlesData.find(article => article.idArticle === parseInt(id));
    const articleTopics = article.topics.map((topic) => {
        return props.topicsData.find(top => top.idTopic === topic);
    });

    useEffect(() => {
        if (article.text && article.text.startsWith('/articles/')) {
            // Fetch the text file
            fetch(article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(article.text);
        }
    }, [article.text]);


    const handleDelete = () => {
        const updatedArticles = props.articlesData.filter(
            (article) => article.idArticle !== parseInt(id)
        );

        props.setArticlesData(updatedArticles);
        localStorage.setItem("articles.json", JSON.stringify(updatedArticles));

        navigate("/articles-list")
    }

    return (
        <ArticleContainer>
            <MoveUpButton/>

            {/* Article Title Section */}
            <ArticleTitle>
                <ArticleTitleLeft>
                    <h1>{article.title}</h1>
                </ArticleTitleLeft>
                <ArticleTitleImage>
                    <img src={article.picture} alt="article image"/>
                </ArticleTitleImage>
                <ArticleTitleRight>
                    <ArticleTitleMetadata>
                        <span >Autor:</span>
                        <span >{article.author}</span>
                        <span >Vytvořeno:</span>
                        <span >{article.creationDate}</span>
                        <span >Kategorie:
                            <TopicsList topicsList={article.topics} topicsData={props.topicsData}/>
                        </span>
                    </ArticleTitleMetadata>
                </ArticleTitleRight>
            </ArticleTitle>

            {/* Article Text Section */}
            <ArticleText>
                <ArticleContent dangerouslySetInnerHTML={{__html: articleText}}/>
            </ArticleText>

            {/* Footer Buttons Section */}
            <ArticleFooter>
                <ArticleUpdateButton onClick={props.setVisibleEditPopup}>
                    Upravit
                </ArticleUpdateButton>
                {props.visibleEditPopUp && (
                    <>
                        <PopupOverlay onClick={props.setVisibleEditPopup}/>
                        <PopupWindow>
                            <EditForm
                                article={article}
                                articleTopics={articleTopics}
                                articlesData={props.articlesData}
                                setVisibleEditPopup={props.setVisibleEditPopup}
                                setArticlesData={props.setArticlesData}
                                topicsData={props.topicsData}
                            />
                        </PopupWindow>
                    </>
                )}

                <ArticleDeleteButton onClick={handleDelete}>
                    Odstranit
                </ArticleDeleteButton>
            </ArticleFooter>

        </ArticleContainer>
    );

};

export default Article;