const City = require('../../models/city');
const createOptionsHTML = require('../other/HTMLCreators').createOptionsHTML;

exports.getCitiesByRegion = (req, res) => {
    if(req.query.REGION_ID){
        City.findAll({
            attributes: ['id', 'name_ru'],
            where: {
                region_id: req.query.REGION_ID
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
