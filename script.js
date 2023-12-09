document.addEventListener("DOMContentLoaded", function () {
    // Array of words, descriptions, and pronunciations for each day of the week
    const words = [
        {
            //Sunday
            word: "re-hash",
            description: "1 To talk over or discuss again 2 to present or use again in another form without substantial change or improvement.",
            pronunciation: "'re-,hash"
        },
        {
            //Monday
            word: "May-Day",
            description: "1 an international radio-telephone signal word used as a distress call.",
            pronunciation: "'mae-dae"
        },
        {
            //Tuesday
            word: "Dobro",
            description: "1 used for an accoustic guitar having a metal resonator.",
            pronunciation: "do-bro"
        },
        {
            //Wednesday
            word: "cropper",
            description: "1 A severe fall. 2 a sudden failure or collapse.",
            pronunciation: "cro-p-per"
        },
        {
            //Thursday
            word: "Continental Drift",
            description: "A slow movement of the continents on a deep-seated viscous zone within the earth.",
            pronunciation: "kon-tin-ent-al dru-fte"
        },
        {
            //Friday
            word: "haven",
            description: "1 Harbor, port. 2 A place of safety, refuge. ",
            pronunciation: "hay-ven"
        },
        {
            //Saturday
            word: "posh",
            description: "1 Elegant, fashionable. 2 Typical or intended for the upper classes.",
            pronunciation: "ˈ'pash"
        }
    ];

    // Get the current day (0 is Sunday, 1 is Monday, ..., 6 is Saturday)
    const today = new Date().getDay();

    // Display the word, description, and pronunciation for the current day
    const wordContainer = document.getElementById("wordContainer");
    const currentWord = words[today];
    wordContainer.innerHTML = `
        <p><strong>Word:</strong> ${currentWord.word}</p>
        <p><strong>Description:</strong> ${currentWord.description}</p>
        <p><strong>Pronunciation:</strong> ${currentWord.pronunciation}</p>
    `;
});