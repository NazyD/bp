import Review from "./Review.jsx";
import MoveUpButton from "../components/MoveUpButton.jsx";
import styled from "@emotion/styled";

const RankContainer = styled.div`
    margin: 40px 150px;
    text-align: center;
    @media (max-width: 1024px) {
        margin: 20px;
        padding: 15px;
    }
    @media (max-width: 768px) {
        margin: 10px;
        padding: 10px;
    }
    @media (max-width: 425px) {
        margin: 5px 0;
        padding: 5px 0;
    }
`;

const Title = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: ${({theme}) => theme.textColor};
  margin-bottom: 20px;
`;

const RankTable = styled.table`
    width: 100%;
    border: 1px solid ${({theme}) => theme.borderColor};
    border-collapse: collapse;
    background-color: ${({theme}) => theme.componentBackground};
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    @media (max-width: 425px) {
        width: 100%;
    }
`;

const TableHead = styled.thead`
  background-color: ${({theme}) => theme.borderColor};
  color: ${({theme}) => theme.textColor};
    @media (max-width: 768px) {
        display: none;
    }
`;

const TableRow = styled.tr`
  transition: background-color 0.3s ease;
    border: none;
    @media (max-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 425px) {
        display: block;
        padding: 10px 0;
        margin-bottom: 20px;
        border-radius: 10px;
    }
  &:nth-child(even) {
    background-color: ${({theme}) => theme.shortArticleBg};
  }
  &:hover {
    background-color: ${({theme}) => theme.shortArticleBgHover};
  }
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  text-transform: uppercase;
  font-size: 14px;
  border: 1px solid ${({theme}) => theme.borderColor};
  border-bottom: 2px solid ${({theme}) => theme.textColor};
`;

const TableCell = styled.td`
    padding: 12px !important;
    font-size: 16px;
    color: ${({theme}) => theme.textColor};
    text-align: center;
    border-top: none !important;
    border-left: none !important;
    border-right: none !important;
    border-bottom: 1px solid ${({theme}) => theme.borderColor} !important;
    @media (max-width: 768px) {
        text-align: center;
    }
    @media (max-width: 425px) {
        display: flex;
        justify-content: space-between;
        padding: 8px;
    }

    &:first-child {
        text-align: center;
        font-weight: bold;
    }

    &:nth-child(4) {
        font-size: 14px;
        line-height: 1.5;
        text-align: left;
        @media (max-width: 1024px) {
            font-size: 12px;
        }
        @media (max-width: 425px) {
            flex-direction: column;
        }
    }

    &:nth-child(6) {
        font-weight: bold;
        color: #d9534f;
    }
    &:last-child{
        @media (max-width: 768px) {
            text-align: center;
            width: 100%;
        }
    }
`;

const PosterImage = styled.img`
  display: block;
  width: 80px !important;
  height: auto;
  border-radius: 5px;
  margin: 0 auto;
`;

const RankDef = (props) => {

    const getAverageReview = (revs) => {
        const total = revs.reduce((acc, score) => acc + score, 0);
        return (total / revs.length).toFixed(1);
    }

    const sortedData = [...props.rankingData].sort((a, b) => {
        const avgA = parseFloat(getAverageReview(a.reviews));
        const avgB = parseFloat(getAverageReview(b.reviews));
        return avgB - avgA;
    });

    const tableStyle = {
        border: '1px solid black',
        width: '100%',
        borderCollapse: 'collapse'
    };

    const cellStyle = {
        border: '1px solid black',
        padding: '5px'
    };

    return(
        <RankContainer>
            <MoveUpButton/>
            <Title>Žebříček {props.isMovie ? "filmů" : "seriálů"}</Title>

            <RankTable style={tableStyle}>
                <TableHead>
                <tr>
                    <TableHeaderCell>Pořadí</TableHeaderCell>
                    <TableHeaderCell>Plakát</TableHeaderCell>
                    <TableHeaderCell>Název</TableHeaderCell>
                    <TableHeaderCell>Informace</TableHeaderCell>
                    <TableHeaderCell>Ocenění</TableHeaderCell>
                    <TableHeaderCell>Hodnocení</TableHeaderCell>
                    <TableHeaderCell>...</TableHeaderCell>
                </tr>
                </TableHead>
                <tbody>
                {sortedData.map((movie, index) => (
                    <TableRow key={movie.id}>
                        <TableCell style={cellStyle}>{index + 1}</TableCell>
                        <TableCell style={cellStyle}>
                            <PosterImage
                                src={movie.picture}
                                alt={movie.movieTitle}
                                style={{width: '100px'}}/>
                        </TableCell>
                        <TableCell style={cellStyle}>{movie.movieTitle}</TableCell>
                        <TableCell style={cellStyle}>
                            <strong>Rok vydání:</strong> {movie.yearOfRelease} <br/>
                            <strong>Režisér:</strong> {movie.director} <br/>
                            <strong>Scénárista:</strong> {movie.writer} <br/>
                            <strong>Žánr:</strong> {movie.genre.join(', ')} <br/>
                            <strong>Herci:</strong> {movie.actors.join(', ')} <br/>
                        </TableCell>
                        <TableCell style={cellStyle}>N/A</TableCell>
                        <TableCell style={cellStyle}>{getAverageReview(movie.reviews)}</TableCell>
                        <TableCell style={cellStyle}>
                            <Review
                                revType="movies"
                                dataId={movie.id}
                                data={props.rankingData}
                                setData={props.setRankingData}
                            />
                        </TableCell>
                    </TableRow>
                ))}
                </tbody>
            </RankTable>
        </RankContainer>
    );

};

export default RankDef;