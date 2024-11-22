import {useState} from "react";

const SearchPanel = (props) => {
    const [searchString , setSearchString] = useState("");

    const handleChange = (e) => {
        setSearchString(e.target.value);
    }

    const handleSearch = (event) => {
        event.preventDefault();
        let searchStringLow = searchString.toLowerCase();

        const resultData = props.artData.filter((article) => {
            if(searchString === "") {
                console.log("neni takovy clanek");
                return article;
            } else if (article.title.toLowerCase().includes(searchStringLow)){
                console.log("nalezen článek");
                return article;
            }
        });

        console.log(props.artData, resultData);
        // zeptat se chata jak to tady dat aby mi po vyhledani ukazalo jen list s vysledky vyhledani a po odstraneni nebo updatu stranky zase vsechny
    }

    const clearSearchInput = (e) =>  {
        setSearchString("");
    }

    console.log(props.artData);

    return (
        <div>
            Vyhledávání:
            <div className="search-panel">
                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        id="search"
                        type="search"
                        className="input"
                        name="search"
                        placeholder="hledat..."
                        value={searchString}
                        onChange={handleChange}/>
                    <button id="searchb" type="submit" className="searchb">Vyhledat</button>
                    <button id="clear" className="clear-search" onClick={clearSearchInput}>X</button>
                </form>
            </div>
        </div>
    );

};

export default SearchPanel;