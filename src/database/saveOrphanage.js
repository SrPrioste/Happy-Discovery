
function saveOrphanage(db, orphanage){
    return db.run(`
    INSERT INTO orphanages VALUES (
        NULL,
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"
    );
    `)
}


module.exports = saveOrphanage;