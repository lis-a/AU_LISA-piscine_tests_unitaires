// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    const newDate = new Date(date);

    newDate.setDate(newDate.getDate() + jours)
    
    const formattedDate = newDate.toISOString().split('T')[0];

    return formattedDate;
}
