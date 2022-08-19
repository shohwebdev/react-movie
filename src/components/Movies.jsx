import Movie from "./Movie";
import NotFound from "./NotFound";

export default function Movies(props){
    const {movies = []} = props;
    return(
        <div className="movies">
            {movies.length ? movies.map(movie => (
                <Movie key={movie.imdbID} {...movie}/>
            )) : <NotFound/>}
        </div>
    )
}
//  NotFound yo'q videoni qidirilganda chiqadigan 404 animatsiya uni orniga h4 ni ichiga nothing found deb yozib qoysa ham boladi