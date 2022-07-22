

function getPicUrl(gifList){
    const rando = Math.round(Math.random() * 25);
    return gifList.data.data[rando].embed_url;
}   

$('#submit').on("click", async function(){
    const userInput = document.querySelector('#txtbox').value;
    try{
    const gifs = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=3K0t58ddWC29skf7YaH7Yb38fkZbWhuE&q=${userInput}&limit=25&offset=0&rating=g&lang=en`);
    const newUrl = getPicUrl(gifs);
    $('#pictures').append($("<iframe></iframe>").attr("frameBorder","0").attr("src",newUrl));
    getPicUrl(gifs);}

    catch{
        alert("no search results");
    }

})

$('#remove').on("click", function(){
    document.querySelector('#pictures').remove();
    $('body').append($("<div></div>").attr("id","pictures"));
});