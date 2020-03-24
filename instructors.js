const fs = require('fs')
const data = require('./data.json')
const { age, date } = require('./utils')


//SHOW - Mostrar instrutor por ID
exports.show = function(req, res) {
    //req.params
    const { id } = req.params
    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id
    })
    if (!foundInstructor) return res.send("Instructor not found!")


    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
    }

    return res.render('instructors/show', { instructor })
}

//POST - Criação dos clientes
exports.post = function(req, res) {
    /* const keys = Object.keys(req.body)
     for (key of keys) {
         if (req.body[key] == "") {
             return res.send("Preencha todos os campos!")
         }
     }*/
    let { cultura2, area2, opt_name, nome_cliente, CPF_cliente, regional, nome_consultor, area_cpr, qnt_sacas, no_cpr, local_entrega, local_lavoura, obs, area, prod_esperada, prod_total, variedade, cultura, potencial, talhao } = req.body
        //birth = Date.parse(req.body.birth)
    const created_at = Date.now()
        // const age = Number((created_at - birth) / 31536000000);
    const cod_cliente = Number(data.clientes.length + 1);

    data.clientes.push({
        cod_cliente,
        opt_name,
        nome_cliente,
        CPF_cliente,
        regional,
        nome_consultor,
        area_cpr,
        qnt_sacas,
        no_cpr,
        local_entrega,
        local_lavoura,
        plan_cliente: [{
            cultura,
            area,
            prod_esperada,
            prod_total,
        }],
        projecao: [{
            cultura2,
            area2,
            variedade,
            potencial,
            talhao,

        }],
        obs,
        created_at,
    })


    fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
        if (err) return res.send("Write file Error!")

        return res.redirect("/instructors/create")

    })



}

//EDIT
exports.edit = function(req, res) {
    //req.params
    const { id } = req.params
    const foundInstructor = data.instructors.find(function(instructor) {
        return instructor.id == id
    })
    if (!foundInstructor) return res.send("Instructor not found!")

    date(foundInstructor.birth)
    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth)

    }
    console.log(foundInstructor.birth)
    return res.render('instructors/edit', { instructor })
}