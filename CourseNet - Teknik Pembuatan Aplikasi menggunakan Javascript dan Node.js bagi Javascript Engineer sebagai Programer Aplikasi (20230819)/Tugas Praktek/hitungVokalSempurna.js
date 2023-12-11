var inputs = process.argv;

var sentence = [];
inputs.forEach((val, index) => {
    if (index > 1) sentence.push(val);
 });

 console.log("\nKalimat : " + sentence.join(" ") + "\n");

//  Fungsi Hitung Vokal
function hitungVokal(params){
    console.log("Jumlah huruf vokal\n------------------------");
    let a = 0;
    let i = 0;
    let u = 0;
    let e = 0;
    let o = 0;
    let t = 0;

    params.forEach((val, index) => {
        var x = val.match(/[aeiou]/ig);
        x.forEach((vak, indek) => {
            switch (vak) {
                case 'a':
                    a++; t++;
                    break;
                case 'i':
                    i++; t++;
                    break;
                case 'u':
                    u++; t++;
                    break;
                case 'e':
                    e++; t++;
                    break;
                case 'o':
                    o++; t++;
                    break;
            }
        });

    });

    console.log("A : " + a);
    console.log("I : " + i);
    console.log("U : " + u);
    console.log("E : " + e);
    console.log("O : " + o);
    console.log("Total : " + t);

    console.log("\n CREATED BYRUDDY")
}

// AUTO CALL FUNCTION
hitungVokal(sentence);