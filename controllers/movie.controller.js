const { where } = require("sequelize");
const { generalResponse } = require("../helpers/response.helper");
const {
  createMovie,
  getMovies,
  updateMovie,
  findmovie,
} = require("../repositories/movie.repository");

exports.newMovie = async (req, res) => {
  const movieData = req.body;

  const movie = await createMovie(movieData);
  return generalResponse(res, movie, "Movie Added Success...", true);
};

exports.getMovie = async (req, res) => {
  try {
    const movies = await getMovies();
    return generalResponse(res, movies, "Movie Found...", true);
  } catch (error) {
    console.error("Error fetching Movies:", error);
    return generalResponse(
      res,
      { success: false },
      "Something went wrong while fetching Movies!",
      "error",
      true
    );
  }
};

exports.updateMovies = async (req, res) => {
  try {
    const moviedata = req.body;
    const movieId = req.params.id;
    const update = await updateMovie(moviedata, movieId);

    console.log("Movie id is: " + movieId);

    return generalResponse(res, update, "Updated Suceessfully", true);
  } catch (error) {
    console.error("Some Error Occured " + error);
    res,
      { success: false },
      "Something went wrong while Updating Movies!",
      "error",
      true;
  }
};

exports.movieById = async (req, res) => {
  try {
    const movieId = req.query.id;
    const dt = await findmovie(movieId);

    return generalResponse(res, dt, "data Found", true);
  } catch (error) {
    console.error("Some Error: " + error);
  }
};
