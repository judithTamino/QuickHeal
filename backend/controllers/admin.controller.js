// Add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    // checking for all data to add doctor
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address) 
      return res.json({ success: false, msg: 'Missing Details' });

    // validating email format
    
    
  } catch (error) {
    console.log(error);
  }
};

export { addDoctor };