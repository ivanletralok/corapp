const request = require('request-promise')
    /*sirve para analizar el cuerpo html */
const cheerio = require('cheerio')

const _ = require('lodash')
const contr = {};
var obj = [];
var resul = [];
var array1 = [];

async function obtenr() {
    const $ = await request({
        url: 'https://www.worldometers.info/coronavirus/',
        transform: body => cheerio.load(body)
    })
    const body = $('#main_table_countries_today tbody td').each((j, el) => {
        array1.push($(el).text())
    });
    resul = _.chunk(array1, 13);

    for (let pais of resul) {
        obj.push({
            "country": pais[0],
            "total cases ": pais[1],
            "new cases": pais[2],
            "total death": pais[3],
            "new death": pais[4],
            "total recovered": pais[5],
            "active cases": pais[6],
            "seious critical": pais[7]
        })
    }

}

contr.getapi = (req, resp) => {
    obtenr();
    resp.json(obj);
}

contr.getpais = async(req, resp) => {
    let a = req.params
    console.log(a)
    const ob = _.filter(obj, a);
    resp.json(ob[0])
}

module.exports = contr;