import axios from "axios";

export function getAnimeName(response){
    return response.data.documents.map(anime => ({title:anime.titles.en, id:anime.id}));
}

export function getAnime(animeList, animeTitle){
    return animeList.find(
        anime => anime.title.toLowerCase() == animeTitle.toLowerCase().trim()
    )
}

export async function getAnimeFromApi(animeList, animeTitle, handleList){
    let response = await axios.get(`https://api.aniapi.com/v1/anime?title=${animeTitle}`);
    handleList(response.data.data.documents.map((anime => ({title:anime.titles.en, id:anime.id}))));
}

export function getAnimeDesc(response){
    return response.data.data
}

export function removeHtmlTags (str, replacer="") {
	const regex = /<(\/*?)(?!(em|p|br\s*\/|strong))\w+?.+?>/gim
    return str ? str.replaceAll(regex, replacer) : "";
}