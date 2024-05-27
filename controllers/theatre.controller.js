const { generalResponse } = require("../helpers/response.helper");
const { insertTheatre, findScreens, insertShowTime, getShowTime, AddSeat, getseats, newBooking, getBooking, updateCinema, updateTheatre, ManyToMany } = require("../repositories/movie.repository");

// ---> Theatre & Screen(Create With Association).
exports.createTheatre = async(req , res) => {
  try {
    const details = req.body;

    const data = await insertTheatre(details);
    return generalResponse(res , data , "Theatre Inserted Successfully" , true);
  } catch (error) {
      return generalResponse(res , { success:false } , "Error while insert" , "error" , true);
    }
}

exports.findCinema = async(req , res) => {
  try {
    const data = await findScreens();
    // console.log(data);
    return generalResponse(res , data , "Data Found..." , true);
  } catch (error) {
    return generalResponse(res , { success:false } , "Error While Fetching Data" ,
      "error" , true);
  }
}
exports.updateTheatreData = async(req , res) => {
  const data = req.body;
  const dataId = req.params.id;

  const updateData = await updateTheatre(data , dataId);
  return generalResponse(res , updateData , "Data Updated SuccessFull" , true);
}

// ---> ShowTime
exports.createShowTime = async(req , res) => {
  try {
    const details = req.body;
    const showData = await insertShowTime(details);
    return generalResponse(res , showData , "Data Inserted Success" , true);
  } catch (error) {
    return generalResponse(res , { success:false } , "Some Error" , "error" , true);
  }
}
exports.findShowTime = async(req , res) => {
try {
  const data = await getShowTime();
  // console.log(data);
  return generalResponse(res , data , "Data Found" , true);
} catch (error) {
  return generalResponse(res , { success:false } , "Some Error" , "error" , true);
}
}

// ---> Seat
exports.createSeat = async(req , res) => {
 try {
  const seatData = req.body;
  const details = await AddSeat(seatData);
  return generalResponse(res , details , "seatsData Inserted SucessFully.." , true);
 } catch (error) {
  return generalResponse(res , { success:false } , "Some Error" , "error" , true);
 }
}
exports.findSeat = async(req , res) => {
  try {
    const data = await getseats();
    return generalResponse(res , data , "Data Found" , true);
  } catch (error) {
    return generalResponse(res , { success:false } , "Something went-Wrong" , 
      "Error" , true
    );
  }
}

// ---> NewBooking
exports.insertBooking = async(req , res) => {
  try {
    const data = req.body;
    const bookingDetails = await newBooking(data);
    
    return generalResponse(res , bookingDetails , "Data Inserted Success" , true);
  } catch (error) {
    return generalResponse(res , { success:false } , "Some Error while Insertion" ,
      "Error" , true);
  }
};

exports.getBookingData = async(req , res) => {
  try {
    const data = await getBooking();
    return generalResponse(res , data , "Data Found SucessFully" , true);
  } catch (error) {
    return generalResponse(res , { success:false } , "Data Not Found" , true);
  }
}

exports.createManyToMany = async(req , res) => {
  try {
    const details = req.body;
    const data = await ManyToMany(details);

    // console.log(data);

    return generalResponse(res , data , "Inserted Successfully" , true);
  } catch (error) {
    return generalResponse(res , { success:false } , "some Error while Insert" , "error" , true);
  }
}