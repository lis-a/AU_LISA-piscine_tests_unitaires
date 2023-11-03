// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
module.exports = function dateIlYADixAns() {
    const currentDate = new Date();

    const tenYearsAgo = new Date(currentDate);
    tenYearsAgo.setFullYear(currentDate.getFullYear() - 10);

    const formattedDate = tenYearsAgo.toISOString().split('T')[0];

    return formattedDate;
}
