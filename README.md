###xml2json 把xml格式转换成json格式


安装

    npm install zx_xml2json --save

用例

    const xml ="<xml><ToUserName><![CDATA[ww0dc474944cxXXXa3]]></ToUserName><AgentID><![CDATA[]]></AgentID></xml>";
    const xml2json = require('./xml2json');
    xml2json(xml,(err,result) =>{
        if (err){return console.log(err)}
        console.log(result.xml)
    });



