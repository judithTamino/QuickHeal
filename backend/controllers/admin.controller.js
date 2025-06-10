import validator from 'validator';
import bcrypt from 'bcrypt';
import { v2 as cloudinary } from 'cloudinary';
import Doctor from '../models/doctor.model.js';
import jwt from 'jsonwebtoken';

// Add Doctor
const addDoctor = async (req, res) => {
  try {
    const { name, email, password, speciality, degree, experience, about, fees, address } = req.body;
    const imageFile = req.file;

    // checking for all data to add doctor
    if (!name || !email || !password || !speciality || !degree || !experience || !about || !fees || !address)
      return res.json({ success: false, msg: 'Missing Details' });

    // validating email format
    if (!validator.isEmail(email))
      return res.json({ success: false, msg: 'Please enter a valid email' });

    // validating strong password
    if (password.length < 8)
      return res.json({ success: false, msg: 'Please enter a strong password' });

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // upload image to cloudinary
    const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: "image" });
    const imageUrl = imageUpload.secure_url;

    const doctor = { name, email, image: imageUrl, password: hashedPassword, speciality, degree, experience, about, fees, address: JSON.parse(address), date: Date.now() };

    const newDoctor = new Doctor(doctor);
    await newDoctor.save();

    res.status(201).json({ success: true, msg: 'Doctor Added' });

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

// Admin Login
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_TOKEN);
      res.json({ success: true, token });
    } else
      res.json({ success: false, msg: 'Invalid admin' });

  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
}

export { addDoctor, loginAdmin };