const mapping = {
    "ء": "א",
    "ا": "א",
    "ب": "בּ",
    "ت": "ת",
    "ث": "ת'",
    "ج": "ג'",
    "ح": "ח",
    "خ": "ח'",
    "د": "ד",
    "ذ": "ד'",
    "ر": "ר",
    "ز": "ז",
    "س": "ס",
    "ش": "ש",
    "ص": "צ",
    "ض": "צ'",
    "ط": "ט",
    "ظ": "ט'",
    "ع": "ע",
    "غ": "ע'",
    "ف": "פ",
    "ق": "ק",
    "ك": "כּ",
    "ل": "ל",
    "م": "מ",
    "ن": "נ",
    "ه": "ה",
    "و": "ו",
    "ي": "י",
    "ى": "א",
    "آ": "אַא",
    "ة": "ה",
    "إ": "א",
    "أ": "א",
    "ؤ": "ו",
    "ئ": "י",
    "ى": "א",
    "؟": "?",
};


const textarea = document.getElementById("input_container");
const output = document.getElementById("output");

function mapString(input) {
    let result = "";
    for (let char of input) {
    if (mapping[char]) {
        result += mapping[char];
    } else {
        result += char; // If no mapping exists, keep the original character
    }
    }
    return result.replace("\n","\r\n");
  }


if (textarea) {
  textarea.addEventListener("input", () => {
    const inputValue = textarea.value;
    console.log(mapString(inputValue));
    output.textContent = mapString(inputValue);
  });
}
