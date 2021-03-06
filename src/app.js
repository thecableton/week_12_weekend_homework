const AstronomyPictures = require ('./models/astronomy_pictures');
const SelectView = require ('./views/select_view');
const PictureView = require ('./views/picture_view');

document.addEventListener('DOMContentLoaded', () => {
    const selectElement = document.querySelector('.datepicker');
    console.log('Select, selectElement');
    const selectView = new SelectView(selectElement);
    selectView.bindEvents();    

    const imageContainer = document.querySelector('.image-container');
    const pictureView = new PictureView(imageContainer);
    pictureView.bindEvents();

    const astronomyPictures = new AstronomyPictures();
    astronomyPictures.bindEvents();
    astronomyPictures.getData('2018-09-14');

});