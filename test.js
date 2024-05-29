const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

// create Schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

// create a Photo
/*Photo.create({
    title: 'Photo Ttile 1',
    description: 'Photo Description 1'
})*/

// find Data
/*async function readPhotos() {
  try {
    const data = await Photo.find({});
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readPhotos();*/

// findByIdAndUpdate
const id = '66522b6b7b28c88f45766634';
async function updateData() {
  await Photo.findOneAndUpdate(
    { _id: id },
    {
      title: 'Photo 1 title update 111',
      description: 'Photo Description 1 update 111',
    },
    { new: true }
  );
}
updateData();
