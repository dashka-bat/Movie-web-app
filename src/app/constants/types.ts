export type Movie={
    id:number
    title:string
    poster_path:string
    vote_average:number
    backdrop_path:string
    
}
export type movieDetails={
    id:number
    title:string
    poster_path:string
    vote_average:number
    genre_ids:number[]
    overview:string
    release_data:string
    adult: boolean
}