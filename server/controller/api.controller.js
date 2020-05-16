const request = require('request-promise')
    /*sirve para analizar el cuerpo html */
const cheerio = require('cheerio')
const axios = require('axios')

const _ = require('lodash')
const contr = {};
var obj = [];
var resul = [];
var array1 = [];

async function obtenr() {
    axios.get('https://www.worldometers.info/coronavirus/').then(response => {
        const $ = cheerio.load(response.data);
        const body = $('#main_table_countries_today  tr td').toArray().
        map(item => {
            const $item = $(item)
            array1.push($item.text())
        })
        resul = _.chunk(array1, 15)

        for (let pais of resul) {
            obj.push({
                "id": pais[0],
                "country": pais[1],
                "total_cases": pais[2],
                "new_cases": pais[3],
                "total_death": pais[4],
                "new_death": pais[5],
                "total_recovered": pais[6],
                "active_cases": pais[7],
                "serious_critical": pais[8]
            })
        }

    });
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