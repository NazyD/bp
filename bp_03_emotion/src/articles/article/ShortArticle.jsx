import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";
import styled from "@emotion/styled";

const ShortArticleContainer = styled.div`
  background-color: ${({ theme }) => theme.componentBackground};
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 10px;
  padding: 15px;
  margin: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.5s ease, border-color 0.5s ease;

  &.small-card {
    width: 400px;
    height: 300px;
  }

  &.big-card {
    width: 100%; /* Full width */
    height: 300px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.componentBackgroundHover};
    border-color: ${({ theme }) => theme.textColor};
  }
`;

const ShortArticleTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.textColor};
  text-align: left;

  a {
    color: ${({ theme }) => theme.textColor};
    text-decoration: underline;

    &:visited,
    &:hover {
      color: ${({ theme }) => theme.textColor};
    }
  }
`;

const ShortArticleText = styled.div`
  flex: 1;
  margin: 10px 0;
  color: ${({ theme }) => theme.textColor};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  line-height: 1.5;
  max-height: calc(1.5em * 8);
  white-space: normal;

  p {
    margin: 0;
    font-size: 14px;
  }
`;

const ShortArticleFooter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 12px;
  color: ${({ theme }) => theme.textColor};
`;

const ShortArticle = (props) => {

    return(
        <ShortArticleContainer className={props.cardSize === "big" ? "big-card" : "small-card"}>
            <ShortArticleTitle>
                <Link to={`/articles-list/article/${props.article.idArticle}`}>
                    {props.article.title}
                </Link>
            </ShortArticleTitle>
            <ShortArticleText>
                <p>
                    {props.article.text}{" "}
                </p>
            </ShortArticleText>
            <ShortArticleFooter>
                <div>{props.article.author}</div>
                <div>{props.article.creationDate}</div>
                <div>
                    <TopicsList
                        topicsList={props.article.topics}
                        topicsData={props.topicsData}
                    />
                </div>
                <div>{props.article.review}</div>
            </ShortArticleFooter>
        </ShortArticleContainer>
    );

};

export default ShortArticle;