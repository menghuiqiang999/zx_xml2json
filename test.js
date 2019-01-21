/**
 * Created by Administrator on 2019/1/21.
 */


const xml ="<xml><ToUserName><![CDATA[ww0dc474944cxXXXa3]]></ToUserName><Encrypt><![CDATA[qHPGsoIq1aiUyIgs9TXN4b7AnYQZg0aJfZYsnh553qVpNBGeEZa+s+Zr7Q0Rn6A9rQ73jWowNzDby9biwNrqLb4kbJ7aJ7DE3g2XQ6KvxMJCBS5jNtwUNdOqNNIAqH5/wrb3hiQvpNUnu8p9CqHWAghK5Vop27kIUdGbI70cmZjC6MX0tK636G9M9J8958qWKIuN063sbajUvra8Ak1keQgKctukqSzbnsjgaMtjg+TD94L4Sv9sAIHaltEKwpb51MMPRU4Obv48S+DQY8/f9BvopDJH9XoupPyG9RxZFJHHQm0eW9iHE4xcAnxats//ISTtXNzlxhBkTSQyxaSF0u54sj5MTN97fJaNEkkbdLtWJGNbINQ+Lq7RqCEBT0/d]]></Encrypt><AgentID><![CDATA[]]></AgentID></xml>";


const xml2json = require('./xml2json');
xml2json(xml,(err,result) =>{
    if (err){return console.log(err)}
    console.log(result.xml)
});



