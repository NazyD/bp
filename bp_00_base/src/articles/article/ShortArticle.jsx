import {Link} from 'react-router-dom';
const ShortArticle = () => {

    return(
        <div className="short-article">
            <div className="short-article-title">
                <h3><Link to="/articles-list/article">článek 1 - zároven jako odkaz na článek</Link></h3>
            </div>
            <div className="short-article-text">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus faucibus molestie nisl. Ut tempus purus at lorem.
                    Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a
                    sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                    consequatur aut perferendis doloribus asperiores repellat.
                    Temporibus autem quibusdam et aut officiis debitis aut rerum
                    necessitatibus saepe eveniet ut et voluptates repudiandae sint
                    et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit
                    amet, feugiat eu, orci. Sed elit dui, pellentesque <Link to="/articles-list/article">více</Link></p>
            </div>
            <div className="short-article-footer">
                <div className="short-article-author">
                    Autor A.
                </div>
                <div className="short-article-creation">
                    datum a čas
                </div>
                <div className="short-article-topics">
                    filmy, komedie, americké, nové, atd
                </div>
                <div className="short-article-review">
                    hvezdicky
                </div>
            </div>
        </div>
    );

};

export default ShortArticle;