const { where, Association, Op } = require('sequelize');
const db = require('../models/index');
const { raw } = require('mysql2');

const { movies , theatre , screens , showTime ,
  seatDetails , bookingDetails , bookedSeats , User ,
 } = db;

exports.createMovie = async(moviePayload) => {
 try {
  const movie = await movies.create(moviePayload);
  return movie;
 } catch (error) {
  console.error("some Error Occured" + error);
  throw error;
 }
}

exports.getMovies = async() => {
 try {
  const moviesData = await movies.findAll();
  return moviesData;
 } catch (error) {
  console.error("some Error Occured" + error);
  throw error;
 }
}

exports.updateMovie = async(payload , id) => {
try {
  const data = await movies.update(payload , { where:{ id: id }});
  return data;
} catch (error) {
  console.error("some Error Occured" + error);
  throw error;
}
}
exports.findmovie = async(movieid) => {
  try {
    const data = await movies.findByPk(movieid);
    
    return data;
  } catch (error) {
    console.error("Some Error" + error);
    throw error;
  }
}


// Insert Theatres and Screens(Create With Association).
const scrn = theatre.hasMany(screens , { as: 'screendata'} );
exports.insertTheatre = async(payload) => {
  try {
    const theatreData = await theatre.create(payload , {
      include:[
        {
          association:scrn,
          as:'screendata'
        }
      ]
    }
  );
    return theatreData;
  } catch (error) {
    console.error("Some Error while Insert " + error);
    throw error;
  }
}

exports.updateTheatre = async(payload , id) => {
  const data = await theatre.update(payload ,
    {
      include:[
      {
        association:scrn,
        as:'screendata'
      }
    ]
  },
  { where:{ id:id } });
    return data;
};


exports.findScreens = async() => {
try {
  const findData = await screens.findAll({
    include:[ { 
      model:theatre , 
      attributes:[ 'theatreName' , 'totalScreens' , 'location']} ],
  });
  return findData;
} catch (error) {
    console.error("Some Error " + error);
    throw error;
  }
}


// Create ShowTime
exports.insertShowTime = async(payload) => {
 try {
    const data = await showTime.create(payload);
    return data;
 } catch (error) {
    console.error("Some Error: " + error);
    throw error;
 }
}

exports.getShowTime = async() => {
try {
    const getData = await showTime.findAll({ include:'screen'} );
    return getData;
} catch (error) {
    console.error("Some Error" + error);
    throw error;
  }
}

// ---> SeatsData
exports.AddSeat = async(payload) => {
  try {
    const data = await seatDetails.create(payload);
    return data;
  } catch (error) {
    console.error("Some Error Occured");
    throw error;
  }
}
exports.getseats = async() => {
  try {
    const data = await seatDetails.findAll({ include:'screen' , raw:true });
    return data;
  } catch (error) {
    console.error("error Occurd" + error);
    throw error;
  }
}

// ---> New Booking
exports.newBooking = async(payload) => {
  try {
    const bookingData = await bookingDetails.create(payload);
    return bookingData;
  } catch (error) {
    console.error("Some Error while Insert " + error);
    throw error;
  }
}



exports.getBooking = async() => {
  try {
    const data = await bookingDetails.findAll({ 
        attributes:['bookingDate' , 'bookingAmount' , 'paymentStatus' ],
        include:['User' , 'showTime'],

        where:{ bookingAmount:{ [Op.lt]:500 } }
        // raw:true 
      } );
  
    return data;
  } catch (error) {
    console.error("Some error" , error);
    throw error;
  }
}


exports.ManyToMany = async(payload) => {
    try {
      const users = await User.create(payload);
      const showData = await showTime.create(payload);
      let data;

      if((users && users.id) && (showData && showData.id)){
        data = await bookingDetails.create({
        userId:users.id,
        showtimeId:showData.id,
        bookingDate:"05/10/2023",
        bookingAmount:420,
        paymentStatus:1
       })
      };

      return data;
    } catch (error) {
      console.error("Some Error Occured" + error);
    }
};