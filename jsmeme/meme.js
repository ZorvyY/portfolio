//encase = 
//(self => (x, y) => `${x}${self}(\'${self}\')("${x}","${y}")${y}`)('(self => (x, y) => `${x}${self}(\'${self}\')("${x}","${y}")${y}`)')("start "," end")
//(self => (x, y) => `${x}${self}(\'${self}\')("${x}","${y}")${y}`)(`(self => (x, y) => \${x}${self}(\'${self}\')("${x}","${y}")${y}\`)`)("start "," end")



// Y = f => 
//     (g => (...args) => f(g(g))(...args))
//     (g => (...args) => f(g(g))(...args))

//(f => (x => x(x))(g => (...args) => f(g(g))(...args)))(fn => (x, y) => `${x}${}${y}`)



//http://raganwald.com/2018/08/30/to-grok-a-mockingbird.html 
//http://raganwald.com/2018/09/10/why-y.html
// const M =
//   fn => fn(fn);

// const Y =
//   fn =>
//     M(m => a => fn(m(m))(a));


//trace = f => (...args) => console.log(args) || f(...args);
// When trace is composed with fac, we get something that will
// first print its arguments, and then execute.

//tee = f => (...args) => (x => console.log(x) || x)(f(...args))

// class fancyNumber extends Number {
//     toJSON() {
//         return 'five';
//     }
// }


// module.exports = {
//     fac,
//     mockingbird
// };


// (self => (x, y) => `${x}${self}("${self}")(${x},${y})${y}`)("(self => (x, y) => `${x}${self}('${self}')(${x},${y})${y}`)")(1,2)
// (self => (x, y) => `${x}${self}('${self}')(${x},${y})${y}`)("(self => (x, y) => `${x}${self}('${self}')(${x},${y})${y}`)")(1,2)
// //(self => (x, y) => `${x}${self}('${self}')(${x},${y})${y}`)('(self => (x, y) => `${x}${self}('${self}')(${x},${y})${y}`)')(1,2)



//v1 & v4(self => `(${self})(${self.toString()})`)(self => `(${self})(${self.toString()})`)
//vfinal
//(self => `(${self})(${self})`)(self => `(${self})(${self})`)

//((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`)((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`, "start", "end")
//v2(self => self + '(`' + self + '`)')(`(self => self + '(`' + self + '`)')`)
//v3(self => self + '(`' + self + '`)')("self => self + '(`' + self + '`)'")

//eval(unescape(escape`挮睩摴栽㘴㭦潲⡩㴳攳㭩ⴭ㭸⹦楬汒散琨堬夬ㄬㄩ⥘㵩┶㐬夽椾㸶Ɱ㵵孩崽⡍慴栮牡湤潭⠩⨨畛楝⭵孩⬱崫畛椫㘳崫畛椫㘴崫㔩㸾ㄩ⬨堾ㄳ♘㰴㠦堥㐾ㄦ夾ㄳ♙㰲ㄦ琦ㄩ⨶〬砮晩汬却祬攽刨測港㌬港㘩`.replace(/u(..)/g,"$1%")))

//unescape('((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`)((self, x, y) => `${x} (${self})(${self},"${x}","${y}") ${y}`, "start", "end")')

function escapeAll(str) {
    return "%" + str.split("").map(c => c.charCodeAt(0).toString(16)).join("%");
}
