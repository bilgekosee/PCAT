const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect db
mongoose.connect('mongodb://localhost/pcat-demo-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});

const Photo = mongoose.model('Photo', PhotoSchema);

//create a photo
/* Photo.create({
  title: 'Photo title 2',
  description: 'Photo description 2 lorem ipsum',
}); */

//read photo
/* async function getPhotos() {
  try {
    const photos = await Photo.find({});
    console.log(photos);
  } catch (error) {
    console.error('Error fetching photos:', error);
  }
}

getPhotos(); */

//update a photo
/* const id = '679ca5a90504a6f577729fe0';
async function updatePhoto() {
  try {
    const updatedPhoto = await Photo.findByIdAndUpdate(
      id,
      {
        title: 'photo 1 title updated',
        description: 'photo description updated',
      },
      { new: true } // Güncellenmiş dokümanı döndürmek için
    );

    console.log('Updated Photo:', updatedPhoto);
  } catch (error) {
    console.error('Error updating photo:', error);
  } finally {
    mongoose.connection.close(); // Bağlantıyı kapat
  }
}

updatePhoto(); */

//delete a photo

const id = '679ca5a90504a6f577729fe0';
async function deletePhoto() {
  try {
    const deletedPhoto = await Photo.findByIdAndDelete(
      id,
      {
        title: 'photo 1 title updated',
        description: 'photo description updated',
      },
      { new: true } // Güncellenmiş dokümanı döndürmek için
    );

    console.log('deleted Photo:', deletedPhoto);
  } catch (error) {
    console.error('Error updating photo:', error);
  } finally {
    mongoose.connection.close(); // Bağlantıyı kapat
  }
}

deletePhoto();
