document.addEventListener("DOMContentLoaded", function () {
    // Array of words, descriptions, and pronunciations for each day of the week
    const words = [
        {
			//Sunday
            word: "walk-on",
            description: "1 A minor role in which the actor has no speaking lines.",
            pronunciation: "ˈwok'on'"
        },
        {
			//Monday
            word: "Ungula",
            description: "1 A hoof 2 A claw.",
            pronunciation: "ˈun-gyoo-le"
        },
        {
			//Tuesday
            word: "Speculum",
            description: "1 A mirror, especially one of polished metal used as a reflector in a telescope.",
            pronunciation: "ˈspek'yoo-lem"
        },
        {
			//Wednesday
            word: "rusk",
            description: "1 A piece of sweet, raised bread or cake toasted in an oven.",
            pronunciation: "ˈrusk"
        },
        {
			//Thursday
            word: "Quip",
            description: "A witty or sarcastic expression.",
            pronunciation: "ˈkwip"
        },
        {
			//Friday
            word: "Neuritis",
            description: "1 Inflammation of a nerve or nerves. 2 With pain and muscle tenderness.",
            pronunciation: "ˈnoo-ri-tis"
        },
        {
			//Saturday
            word: "Obfuscate",
            description: "1 To darken. 2 To confuse 3 bewilder",
            pronunciation: "ˈob-fus-kat"
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