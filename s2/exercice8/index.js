// Exercice 8: Créer une fonction pour formater une date en heures et minutes
module.exports = function formaterDuree(date) {
    const newDate = new Date(date);

    const timestamp = newDate.getTime();

    const hours = timestamp / (1000*60*60)

    const minutes = hours * 60;

    const result = "La date " + date + " équivaut à " + hours + " heures, soit " + minutes + " minutes écoulées depuis le 01/01/1970.";

    return result;
}