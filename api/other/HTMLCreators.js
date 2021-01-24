exports.createOptionsHTML = (array) => {
    let optionsStr = '';
    let options = array.map((item) => {
        let name;
        if(item.name){
            name = item.name
        }
        else if(item.name_ru){
            name = item.name_ru;
        }
        return '<option value="' + item.id + '">' + name + '</option>'
    });
    options.forEach((item) => {
        optionsStr += item;
    })
    return optionsStr;
}