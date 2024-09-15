import Comment from "../comment/Comment.jsx";

const Article = () => {

    return (
        <div className="article">
            <div className="article-title">
                <h3>článek </h3>
            </div>
            <div className="article-text">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus faucibus molestie nisl.
                    Ut tempus purus at lorem. Maecenas aliquet accumsan leo. Itaque earum rerum hic tenetur a sapiente
                    delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                    repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et
                    voluptates repudiandae sint et molestiae non recusandae. Fusce dui leo, imperdiet in, aliquam sit amet,
                    feugiat eu, orci. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Aliquam ornare wisi eu
                    metus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc tincidunt ante vitae massa.
                    Cras elementum. Proin in tellus sit amet nibh dignissim sagittis. Itaque earum rerum hic tenetur a
                    sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Duis risus.

                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque
                    porta. Integer vulputate sem a nibh rutrum consequat. Aliquam erat volutpat. Aenean fermentum risus id
                    tortor. Integer pellentesque quam vel velit. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. In enim a arcu imperdiet malesuada. Curabitur bibendum justo
                    non orci. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                    maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Pellentesque ipsum.
                    Proin mattis lacinia justo.

                    Sed ac dolor sit amet purus malesuada congue. Vivamus ac leo pretium faucibus. Nunc auctor. Duis
                    condimentum augue id magna semper rutrum. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos hymenaeos. Suspendisse sagittis ultrices augue. Nunc auctor.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Fusce tellus. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                    sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Mauris suscipit,
                    ligula sit amet pharetra semper, nibh ante cursus purus, vel sagittis velit mauris vel metus.
                    Integer pellentesque quam vel velit. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias
                    consequatur aut perferendis doloribus asperiores repellat. Etiam egestas wisi a erat. Nullam rhoncus aliquam metus. </p>
            </div>
            <div className="article-footer">
                <div className="article-author">
                    Autor A.
                </div>
                <div className="article-creation">
                    datum a čas
                </div>
                <div className="article-topics">
                    filmy, komedie, americké, nové, atd
                </div>
                <div className="article-review">
                    hvezdicky
                </div>
            </div>
            <div className="article-comments">
                <Comment />
            </div>
        </div>
    );

};

export default Article;