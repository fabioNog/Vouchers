const restful = require('node-restful')
const mongoose = restful.mongoose

// {
//     "_id" : "22LKAfhBsGW8jfJPn",
//     "start" : ISODate("2017-04-20T00:00:00.000Z"), //Data de início 
//     "end" : ISODate("2018-01-01T00:00:00.000Z"), //Data final
//     "unlimited" : true, //Acesso ilimitado
//     "justNew" : true,  //Apenas novos usuários/
//     "services" : [], //Serviços que se pode usar ‘Unhas’, ‘Depilação’
//     "code" : "7c10tzern", //Código que deve ser utilizado
//     "usedBy" : [], //Quem já usou ‘Vinicius’, ‘Mateus’,
//     "campaign" : "member get member", //Dia dos pais
//     "locations" : [], //Em quais cidades pode ser utilizado, ‘São Paulo’, ‘Rio de Janeiro’
//     "usedTimes" : 0, //Quantidade de vezes utilizado
//     "timesByUser" : 1, //Quantidade de vezes que pode ser utilizado por um cliente
//     "type" : "P", //P para porcentagem e V para valor fixo
//     "value" : 25,
//     "maxTimes" : 0 //Máximo de utilizações
// }

const ServicesSchema = new mongoose.Schema({
    service: { type: String, required: true },
})

// const UsedBySchema = new mongoose.Schema({
//     usedbys: { type: String, required: true },
// })
// const locationsSchema = new mongoose.Schema({
//     locations: { type: String, required: true },
// })

const VauncherSchema = new mongoose.Schema({
   
    start_day: { type: Number, min: 1, max: 31, required: true },
    start_month: { type: Number, min: 1, max: 12, required: true },
    start_year: { type: Number, min: 1970, max: 2100, required: true },
    end_day: { type: Number, min: 1, max: 31, required: true },
    end_month: { type: Number, min: 1, max: 12, required: true },
    end_year: { type: Number, min: 1970, max: 2100, required: true },    
    // // unlimited : { type: Boolean, required: true },
    // // justNew : { type: Boolean, required: true },
    services : [ServicesSchema], //Serviços que se pode usar ‘Unhas’, ‘Depilação’
    code : { type: String, required: true }, //Código que deve ser utilizado
    // usedBy : [usedbys],
    // // campaign : { type: Boolean, required: true }, //se for Dia dos pais então true
    // location : [locations], //Em quais cidades pode ser utilizado, ‘São Paulo’, ‘Rio de Janeiro’
    // usedTimes : { type: Number, min: 0, required: [true, 'Informe o quantidade de vezes usada!'] }, //Quantidade de vezes utilizado
    // timesByUser : { type: Number, min: 1, required: [true, 'Informe o quantidade de vezes que podera ser usatilizado por cliente!'] }, //Quantidade de vezes que pode ser utilizado por um cliente
    // type : "P", //P para porcentagem e V para valor fixo
    // value : { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
    // maxTimes: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] }, //Máximo de utilizações
});


// const creditSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     value: { type: Number, min: 0, required: true }
// })

// const debtSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     value: { type: Number, min: 0, required: [true, 'Informe o valor do débito!'] },
//     status: { type: String, required: false, uppercase: true,
//         enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
// })

// const billingCycleSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     month: { type: Number, min: 1, max: 12, required: true },
//     year: { type: Number, min: 1970, max: 2100, required: true },
//     credits: [creditSchema],
//     debts: [debtSchema]
// })

module.exports = restful.model('Vouchers2', VauncherSchema)