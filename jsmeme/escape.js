str = '((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`)((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`, "start", "end")'
encodedStr = `⠨獥汦Ⱐ砬⁹⤠㴾⁠⑻硽 ⑻獥汦紩⠤筳敬晽Ⱒ⑻硽∬∤筹索⤠⑻祽怩⠨獥汦Ⱐ砬⁹⤠㴾⁠⑻硽 ⑻獥汦紩⠤筳敬晽Ⱒ⑻硽∬∤筹索⤠⑻祽怬•獴慲琢Ⱐ≥湤∩`;
// eval(unescape(escape`⠨獥汦Ⱐ砬⁹⤠㴾⁠⑻硽 ⑻獥汦紩⠤筳敬晽Ⱒ⑻硽∬∤筹索⤠⑻祽怩⠨獥汦Ⱐ砬⁹⤠㴾⁠⑻硽 ⑻獥汦紩⠤筳敬晽Ⱒ⑻硽∬∤筹索⤠⑻祽怬•獴慲琢Ⱐ≥湤∩`.replace(/u(..)/g,"$1%")))

magic = ((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`)((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`,"start","end")


function escapeAll(str) {
    return "%" + str.split("").map(c => c.charCodeAt(0).toString(16).toUpperCase()).join("%");
}


function encodeWithUtf8(str) {
    return unescape(("%" + str.split("").map(c => c.charCodeAt(0).toString(16).toUpperCase()).join("%")).replace(/%(..)%(..)/g,"\%u$1$2"));
}

unescape(("%" + `(${s})(${s},"${x}","${y}")`.split("").map(c => c.charCodeAt(0).toString(16).toUpperCase()).join("%")).replace(/%(..)%(..)/g,"\%u$1$2"))

((self, x, y) => `${x} (unescape(escape(encodeWithUtf8((${self})(${self},"${x}","${y}")) ${y}`)((self, x, y) => `${x} (unescape(escape(encodeWithUtf8((${self})(${self},"${x}","${y}")) ${y}`,"start","end")

eval(unescape(escape(encodeWithUtf8(str)).replace(/u(..)/g,"$1%"))) // This one liner is the evaluated expansion of str. 
eval(unescape(escape(encodeWithUtf8((${self})(${self},"${x}","${y}"))).replace(/u(..)/g,"$1%")))

((self, x, y) => (encoded => `${x} eval(unescape(escape('${encoded}').replace(/u(..)/g,"$1%"))) ${y}`)(encodeWithUtf8(`(${self})(${self},"${x}","${y}")`)))((self, x, y) => (encoded => `${x} eval(unescape(escape('${encoded}').replace(/u(..)/g,"$1%"))) ${y}`)(encodeWithUtf8(`(${self})(${self},"${x}","${y}")`)),"start","end")


//eval(unescape(escape`挮睩摴栽㘴㭦潲⡩㴳攳㭩ⴭ㭸⹦楬汒散琨堬夬ㄬㄩ⥘㵩┶㐬夽椾㸶Ɱ㵵孩崽⡍慴栮牡湤潭⠩⨨畛楝⭵孩⬱崫畛椫㘳崫畛椫㘴崫㔩㸾ㄩ⬨堾ㄳ♘㰴㠦堥㐾ㄦ夾ㄳ♙㰲ㄦ琦ㄩ⨶〬砮晩汬却祬攽刨測港㌬港㘩`.replace(/u(..)/g,"$1%")))
starter = "In JavaScript, they don't say 'I love you', they say '"
ender = "' and I think that's beautiful."
//in Japan they don't say "I love you" they say "ロボットシンジの中に入る" and I think that's beautiful.



//MINIFIED
((s, x, y) => (e => `${x}eval(unescape(escape('${e}').replace(/u(..)/g,"$1%")))${y}`)(encodeWithUtf8(`(${s})(${s},"${x}","${y}")`)))((s, x, y) => (e => `${x}eval(unescape(escape('${e}').replace(/u(..)/g,"$1%")))${y}`)(encodeWithUtf8(`(${s})(${s},"${x}","${y}")`)),starter,ender)


//MINIFIED WITH DEPENDENCIES REMOVED
((s, x, y) => (e => `${x}eval(unescape(escape('${e}').replace(/u(..)/g,"$1%")))${y}`)(unescape(("%" + `(${s})(${s},"${x}","${y}")`.split("").map(c => c.charCodeAt(0).toString(16).toUpperCase()).join("%")).replace(/%(..)%(..)/g,"\%u$1$2"))))((s, x, y) => (e => `${x}eval(unescape(escape('${e}').replace(/u(..)/g,"$1%")))${y}`)(unescape(("%" + `(${s})(${s},"${x}","${y}")`.split("").map(c => c.charCodeAt(0).toString(16).toUpperCase()).join("%")).replace(/%(..)%(..)/g,"\%u$1$2"))),"In JavaScript, they don't say 'I love you', they say '","' and I think that's beautiful.")

//FINAL STRING HOLY MOTHERFUCKING SHIT
`In JavaScript, they don't say 'I love you', they say 'eval(unescape(escape('⠨猬⁸Ⱐ礩‽㸠⡥‽㸠怤筸絥癡氨畮敳捡灥⡥獣慰攨✤筥紧⤮牥灬慣攨⽵⠮⸩⽧Ⱒ␱┢⤩⤤筹絠⤨畮敳捡灥⠨∥∠⬠怨⑻獽⤨⑻獽Ⱒ⑻硽∬∤筹索⥠⹳灬楴⠢∩⹭慰⡣‽㸠挮捨慲䍯摥䅴⠰⤮瑯却物湧⠱㘩⹴潕灰敲䍡獥⠩⤮橯楮⠢┢⤩⹲数污捥⠯┨⸮⤥⠮⸩⽧Ⱒ尥甤ㄤ㈢⤩⤩⠨猬⁸Ⱐ礩‽㸠⡥‽㸠怤筸絥癡氨畮敳捡灥⡥獣慰攨✤筥紧⤮牥灬慣攨⽵⠮⸩⽧Ⱒ␱┢⤩⤤筹絠⤨畮敳捡灥⠨∥∠⬠怨⑻獽⤨⑻獽Ⱒ⑻硽∬∤筹索⥠⹳灬楴⠢∩⹭慰⡣‽㸠挮捨慲䍯摥䅴⠰⤮瑯却物湧⠱㘩⹴潕灰敲䍡獥⠩⤮橯楮⠢┢⤩⹲数污捥⠯┨⸮⤥⠮⸩⽧Ⱒ尥甤ㄤ㈢⤩⤬≉渠䩡癡卣物灴Ⱐ瑨敹⁤潮❴⁳慹‧䤠汯癥⁹潵✬⁴桥礠獡礠✢Ⱒ✠慮搠䤠瑨楮欠瑨慴❳⁢敡畴楦畬⸢)').replace(/u(..)/g,"$1%")))' and I think that's beautiful.`

