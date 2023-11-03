// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
    const newDate1 = new Date(date1);
    const newDate2 = new Date(date2);
    
    const result = (newDate2 - newDate1) / (1000*60*60*24);

    return result;
}