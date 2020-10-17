const database = require('./db');
const saveOrphanage = require('./saveOrphanage');

database.then(async function(db){
    
    
    // inserir dado na tabela
    /* await saveOrphanage(db, {
        id:"1",
        lat:"-22.471674",
        lng:"-44.4660387",
        name: " lar das crianças",
        about:"Prestar assistência a crianças de 06 a 15 anos que se encontre em situação de risco e ou vulnerabilidade social.",
        whatsapp:"(21)912345678",
        images: [
            "https://images.unsplash.com/photo-1563465814437-b1a057a461ed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
          ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência.",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "1"
    }) */
    
    // consultar dado na tabela
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    //console.log(selectedOrphanages)

    const orphanage = await db.all('SELECT * FROM orphanages ')
    console.log(orphanage)    
    // deletar dado na tabela
    //await db.run("DELETE FROM orphanages WHERE id = '1' ")
    
    
}) 