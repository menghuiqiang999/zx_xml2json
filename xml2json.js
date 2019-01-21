/**
 * Created by Administrator on 2019/1/21.
 */


const parseString = require("xml2js").parseString;
function xml2json(xml,callback){
    parseString(xml,(err,result) => {
        if(err){return callback(err)}
        callback(null,result)
    });
}
module.exports = xml2json;