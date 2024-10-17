import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import PrivateRoute from "../auth/PrivateRoute";


export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
                path="/"
                element={
                    <PrivateRoute>
                        <MovieList apiPath="movie/now_playing" />
                    </PrivateRoute>
                }
            />
            <Route
                path="movie/:id"
                element={
                    <PrivateRoute>
                        <MovieDetails />
                    </PrivateRoute>
                }
            />
            <Route
                path="movies/popular"
                element={
                    <PrivateRoute>
                        <MovieList apiPath="movie/popular" />
                    </PrivateRoute>
                }
            />
            <Route
                path="movies/top"
                element={
                    <PrivateRoute>
                        <MovieList apiPath="movie/top_rated" />
                    </PrivateRoute>
                }
            />
            <Route
                path="movies/upcoming"
                element={
                    <PrivateRoute>
                        <MovieList apiPath="movie/upcoming" />
                    </PrivateRoute>
                }
            />
            <Route
                path="search"
                element={
                    <PrivateRoute>
                        <Search apiPath="search/movie" />
                    </PrivateRoute>
                }
            />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    )
}