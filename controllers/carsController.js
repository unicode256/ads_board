const store = require('../store');
const CarMark = require('../models/carMark');
const BodyType = require('../models/bodyType');
const Currency = require('../models/currency');
const DriveUnit = require('../models/driveUnit');
const Color = require('../models/color');
const InteriorTrimMaterial = require('../models/interiorTrimMaterial');
const InteriorColor = require('../models/interiorColor');
const ExchangeVariant = require('../models/exchangeVariant');
const Region = require('../models/region');
const createOptionsHTML = require('../api/other/HTMLCreators').createOptionsHTML;a

exports.allCarsAdsList = (req, res) => {
    let totalAdsCount = store.ads.length;
    let pageSize = 8;
    let pageCount = Math.ceil(totalAdsCount/pageSize);
    let currentPage;
    let portionOfAds = [];

    if(req.query.page){
        currentPage = req.query.page;
    }
    else {
        currentPage = 1;
    }

    for(let i = pageSize*(currentPage-1); i < pageSize*currentPage; i++){
        if(store.ads[i]){
            portionOfAds.push(store.ads[i]);
        }
    }
    if(req.auth){
        res.render('cars', {
            title: 'Все тачки',
            isAuth: true,
            arrayOfAdsData: portionOfAds
        });
    }
    else {
        res.render('cars', {
            title: 'Все тачки',
            arrayOfAdsData: portionOfAds
        });
    }    
};

exports.specifiedCarsAdsList = (req, res) => {
    if(req.params.car_mark === 'bmw'){
        res.render('cars', {
          title: 'Все BMW',
          arrayOfAdsData: store.ads.filter((ad) => {
            return ad.carMark === 'BMW';
          })
        });
    }
}

exports.showAdCreator = async (req, res) => {
    if(req.auth){
        const carMarks = await CarMark.findAll({
            attributes: ['id', 'name']
        });
        const bodyTypes = await BodyType.findAll({
            attributes: ['id', 'name_ru']
        });
        const currencies = await Currency.findAll({
            attributes: ['id', 'name']
        });
        const driveUnits = await DriveUnit.findAll({
            attributes: ['id', 'name_ru']
        });
        const colors = await Color.findAll({
            attributes: ['id', 'name_ru']
        });
        const interiorTrimMaterials = await InteriorTrimMaterial.findAll({
            attributes: ['id', 'name_ru']
        });
        const interiorColors = await InteriorColor.findAll({
            attributes: ['id', 'name_ru']
        });
        const exchangeVariants = await ExchangeVariant.findAll({
            attributes: ['id', 'name_ru']
        });
        const regions = await Region.findAll({
            attributes: ['id', 'name_ru']
        });

        res.render('add_cars', {
            title: ' Создать объявление',
            carMarks: createOptionsHTML(carMarks),
            bodyTypes: createOptionsHTML(bodyTypes),
            currencies: createOptionsHTML(currencies),
            driveUnits: createOptionsHTML(driveUnits),
            colors: createOptionsHTML(colors),
            interiorTrimMaterials: createOptionsHTML(interiorTrimMaterials),
            interiorColors: createOptionsHTML(interiorColors),
            exchangeVariants: createOptionsHTML(exchangeVariants),
            regions: createOptionsHTML(regions)
        });
    }
    else {
        res.redirect('/login');
    }
}

exports.addAd = (req, res) => {
    if(req.auth){
        res.send(req.body.city);
    }
    else {
        res.redirect('/login');
    }
}