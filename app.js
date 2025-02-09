const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const methodOverride = require('method-override');

const ejs = require('ejs');

const photoController = require('./contorollers/photoControllers');
const pageConroller = require('./contorollers/pageController');

const app = express();

mongoose
  .connect('mongodb://localhost/pcat-demo-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB bağlantısı başarılı'))
  .catch((err) => console.log('MongoDB bağlantı hatası:', err));

//TEMPLATE ENGINE
app.set('view engine', 'ejs');
//MIDDLEWARE
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);
//ROUTES
app.get('/', photoController.getAllPhotos);
app.get('/photos/:id', photoController.getPhoto);
app.post('/photos', photoController.createPhoto);
app.put('/photos/:id', photoController.updatePhoto);
app.delete('/photos/:id', photoController.deletePhoto);

app.get('/about', pageConroller.getAbotPage);
app.get('/add', pageConroller.getAddPage);
app.get('/photos/edit/:id', pageConroller.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu ${port} portunda başlatıldı`);
});
