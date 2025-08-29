const songName = document.querySelector("#song") 
const singer = document.querySelector("#singer") 
const search = document.querySelector("#search") 
const lyric = document.querySelector("#lyric")


async function getData(singer,song) {
try {
        const responce = await fetch(`https://api.lyrics.ovh/v1/${singer}/${song}`, {})
        const data = await responce.json()
        lyric.textContent = data.lyrics
    }
    catch (error) {
        return error
    }
}

search.addEventListener("click", (e) => {
	e.preventDefault()
	const singerInp = singer.value
    const songInp = songName.value
    getData(singerInp, songInp)
})
