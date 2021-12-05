export default class MapperResponse_General {
    ListaUtenti = (api) => {
        let dataResponse = []
        api.results.forEach(element => {
            let obj = {
                id: element.login.uuid,
                sesso: element.gender,
                nome: element.name.first,
                cognome: element.name.last,
                titolo: element.name.title,
                nomeEsteso: element.name.first + " " + element.name.last,
                indirizzo: {
                    civico: element.location.street.number,
                    via: element.location.street.name,
                    indirizzo: element.location.street.number + " " + element.location.street.name,
                    citta: element.location.city,
                    stato: element.location.state,
                    nazione: element.location.country,
                    cap: element.location.postcode,
                    latitudine: element.location.coordinates.latitude,
                    longitudine: element.location.coordinates.longitude,
                    time_zone_offset: element.location.timezone.offset,
                    time_zone_descrizione: element.location.timezone.description,
                },

                email: element.email,
                dati_login: {
                    uuid: element.login.uuid,
                    username: element.login.username,
                    password: element.login.password,
                    salt: element.login.salt,
                    md5: element.login.md5,
                    sha1: element.login.sha1,
                    sha256: element.login.sha256,
                },
                data_di_nascita: element.dob.date,
                eta: element.dob.age,
                data_regitrazione: element.registered.date,
                anni_regitrazione: element.registered.age,
                telefono: element.phone,
                cellulare: element.cell,
                IdName: element.id.name,
                IdValue: element.id.value,
                avatar: {
                    grande: element.picture.large,
                    media: element.picture.medium,
                    piccola: element.picture.thumbnail,
                },
                siglaNazione: element.nat
            }
            dataResponse.push(obj);            
        });
        return dataResponse;
    }
}
