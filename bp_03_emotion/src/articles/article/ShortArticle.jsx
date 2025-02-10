import {Link} from 'react-router-dom';
import TopicsList from "../../topics/TopicsList.jsx";
import styled from "@emotion/styled";
import {useEffect, useState} from "react";

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
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.5s ease;
    position: relative;
    overflow: hidden;

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
      transform: translateY(-2px) translateX(-1px); 
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15); 
  }
    &:hover .sliding-image{
        right: 0; 
        opacity: 0.5; 
        mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 95%);
    }
`;

const ImageSlide = styled.img`
    position: absolute;
    top: 0;
    right: -50%; 
    height: 100%;
    width: auto;
    z-index: 1; 
    transition: right 0.9s ease, opacity 0.8s ease; 
    opacity: 0; 
    mask-image: linear-gradient(to left, rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 95%);
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
  line-height: 1.5;
  max-height: calc(1.5em * 8);
  white-space: normal;
    position: relative;
    z-index: 2;
    background: transparent;

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
    position: relative;
    z-index: 2;
    background: transparent;
`;

const ShortArticle = (props) => {
    const [articleText, setArticleText] = useState("");

    useEffect(() => {
        if (props.article.text && props.article.text.startsWith('/articles/')) {
            console.log(props.article.text);
            // Fetch the text file
            fetch(props.article.text)
                .then((response) => response.text())
                .then((data) => setArticleText(data))
                .catch((error) => console.error("Error fetching article text:", error));
        } else {
            setArticleText(props.article.text);
        }
    }, [props.article.text]);

    const cutText = articleText.substring(0, props.cardSize === 'big' ? 1400 : 400) +
        `<a href="/articles-list/article/${props.article.idArticle}" style="text-decoration: none; color: inherit;"> ...</a>`;


    return(
        <ShortArticleContainer className={props.cardSize === "big" ? "big-card" : "small-card"}>

            <ImageSlide src={props.article.picture}
                        alt="..."
                        className="sliding-image"/>

            <ShortArticleTitle>
                <Link to={`/articles-list/article/${props.article.idArticle}`}>
                    {props.article.title}
                </Link>
            </ShortArticleTitle>
            <ShortArticleText>
                <div className="article-content" dangerouslySetInnerHTML={{__html: cutText}}/>
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