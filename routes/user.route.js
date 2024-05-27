const express = require('express');
const router = express.Router();
const { getAllUsers, insertUser, getUserPosts, removeUser, updateUserData } = require('../controllers/user.controller');

const { newMovie, getMovie, updateMovies, movieById } = require('../controllers/movie.controller');
const { createTheatre, findCinema, createShowTime, findShowTime, createSeat, findSeat, insertBooking, getBookingData, updateTheatreData, createManyToMany,  } = require('../controllers/theatre.controller');

router.get('/get-users', getAllUsers);
router.post('/insert-user', insertUser);
router.get('/user-posts', getUserPosts);
router.post("/update-user/:id" , updateUserData);
router.get('/delete-user' , removeUser);

router.post('/newmovie' , newMovie);
router.get('/getmovies' , getMovie);
router.post("/updatemovie/:id" , updateMovies);
router.get("/findbyId" , movieById);


router.post("/create-theatre" , createTheatre);
router.get("/find-cinema" , findCinema);
router.post("/update-cinema/:id" , updateTheatreData);

router.post("/create-showtime" , createShowTime);
router.get("/get-showtime" , findShowTime);

router.post('/create-seat' , createSeat);
router.get("/get-seats" , findSeat);

router.post("/create-booking" , insertBooking);
router.get("/get-booking" , getBookingData);

router.post('/many-to-many' , createManyToMany);


module.exports = router;