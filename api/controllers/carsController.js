const CarModel = require('../../models/carModel');
const createOptionsHTML = require('../other/HTMLCreators').createOptionsHTML;

exports.getCarModelsByCarMark = (req, res) => {
    if(req.query.MARK_ID){
        CarModel.findAll({
            attributes: ['id', 'name'],
            where: {
                mark_id: req.query.MARK_ID
            }
        })
        .then(result => {
            res.send(createOptionsHTML(result));
        })
        .catch(error => {
            console.log('Error has occured: ', error);
        });
    }
}
