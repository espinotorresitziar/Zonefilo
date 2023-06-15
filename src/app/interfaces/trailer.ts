export interface Video {
    id:      number;
    results: Resulta[];
}

export interface Resulta {
    iso_639_1:    ISO639_1;
    iso_3166_1:   ISO3166_1;
    name:         string;
    key:          string;
    published_at: string;
    site:         Site;
    size:         number;
    type:         Type;
    official:     boolean;
    id:           string;
}

export enum ISO3166_1 {
    Us = "US",
}

export enum ISO639_1 {
    En = "en",
}

export enum Site {
    YouTube = "YouTube",
}

export enum Type {
    BehindTheScenes = "Behind the Scenes",
    Clip = "Clip",
    Featurette = "Featurette",
    Teaser = "Teaser",
    Trailer = "Trailer",
}

