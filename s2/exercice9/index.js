// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {
    const newDateDebut1 = new Date(debut1);
    const newDateFin1 = new Date(fin1);
    const newDateDebut2 = new Date(debut2)
    const newDateFin2 = new Date(fin2);
    
    const time1 = newDateDebut1.getTime();
    const time2 = newDateFin1.getTime();
    const time3 = newDateDebut2.getTime();
    const time4 = newDateFin2.getTime();

    const plage1 = time1 + time2;
    const plage2 = time3 + time4;
    
    if(plage1 - plage2 > 0){
        return true;
    } else {
        return false;
    };
    
}