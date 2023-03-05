function vowelsAndConsonants(word= "") {
    


//let word = "javascriptloops"


//console.log("Kelimemiz : " + word)// kelimemizi konsola yazdıralım


const vowels = []//sesli harflerimiz
const newvowels = []

wordnumber = word.length -1// karektersayısı veya index sayısı




for(x=0;x<=wordnumber;x++){

   // console.log(x + " - index = " + word[x]) // her harfi index numarasına göre yazdırdık
    newvowels.push(word[x]) // Javascript kelimesinin harflerini yeni bir dizinin elemanı yaptım 

    var indexa = newvowels.indexOf("a");//index numarasını bulalım
    var indexe = newvowels.indexOf("e");//index numarasını bulalım
    var indexi = newvowels.indexOf("i");//index numarasını bulalım
    var indexo = newvowels.indexOf("o");//index numarasını bulalım
    var indexu = newvowels.indexOf("u");//index numarasını bulalım

    if (indexa !== -1){
        newvowels.splice(indexa, 1);
        vowels.push("a")
    }
	
    if (indexe !== -1){
        newvowels.splice(indexe, 1);
        vowels.push("e")
    }

    if (indexi !== -1){
        newvowels.splice(indexi, 1);
        vowels.push("i")
    }

    if (indexo !== -1){
        newvowels.splice(indexo, 1);
        vowels.push("o")
    }

    if (indexu !== -1){
        newvowels.splice(indexu, 1);
        vowels.push("u")
    }    

}

//console.log(vowels)
//console.log(newvowels) //newvowels = ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't', 'l', 'o', 'o', 'p', 's']


let output = vowels.concat(newvowels)

//console.log(output)

for(x=0;x<=wordnumber;x++){

    console.log(output[x]) // her harfi index numarasına göre yazdırdık
    
}

}