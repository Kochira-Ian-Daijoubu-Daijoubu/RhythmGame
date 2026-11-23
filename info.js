var currentPage = 0;
var albumArts = ["Hao.png", "Huamn.png", "Cinderella.jpg"]
var descriptions =["Hao is a song written by DECO*27, featuring Hatsune Miku. The song is polished with chinese and retro video game instrumentation. It is about pushis through for your crush when you're emotionally spent.", 
    "Human is a song written by Flavor Foley [Jamie Paige, Vane Lily, Rice Deitey], featuring SF-A2 miki. THe song is a rock style arrangement with lyrics about the singer wanting to be human. Throughout the song, she questions what being human is and by the end, she decieds that being human is the best thing for her. No matter what others say.", 
    "Cinderella is a song written by Cidergirl. The song is the season 1 opening to the anime Komi Can't Communicate. The anime follows a girl named Shoko Komi, who has a severe comunication dissorder. Her biggest dream in life is making 100 freinds."]
document.addEventListener("keydown", brodcast);
function brodcast(event){
    if (event.repeat) return;
    if (event.code == "KeyA"){
        if (currentPage == 0){
            currentPage = 2;
            update();
        } else {
            currentPage--;
            update();        
        }

    } else if (event.code == "KeyD"){
        if (currentPage == 2){
            currentPage = 0;
            update();
        } else {
            currentPage++;
            update();        
        }
    }
};
function update(){
    document.getElementById("AlbumArt").src = albumArts[currentPage];
    document.getElementById("information").textContent = descriptions[currentPage];
}