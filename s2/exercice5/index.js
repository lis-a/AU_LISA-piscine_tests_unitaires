// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {
    const bissextile = new Date(annee, 1, 29).getDate() === 29;
    
    return bissextile;
}
