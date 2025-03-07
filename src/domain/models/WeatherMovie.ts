enum GenreEnum {
    Action = 28,
    Adventure = 12,
    Animation = 16,
    Comedy = 35,
    Crime = 80,
    Documentary = 99,
    Drama = 18,
    Family = 10751,
    Fantasy = 14,
    History = 36,
    Horror = 27,
    Music = 10402,
    Mystery = 9648,
    Romance = 10749,
    ScienceFiction = 878,
    TVMovie = 10770,
    Thriller = 53,
}

export type WeatherCondition = {
    name: string;
    genres: GenreEnum[];
    description: string;
    reason: string;
}

enum WeatherMovieRecommendation {
    Thunderstorm = "Thunderstorm",
    Drizzle = "Drizzle",
    Rain = "Rain",
    Snow = "Snow",
    Atmosphere = "Atmosphere",
    Clear = "Clear",
    Clouds = "Clouds"
}

export const weatherMovieMap: Record<string, WeatherCondition> = {
    [WeatherMovieRecommendation.Thunderstorm]: {
        name: "Orage",
        genres: [GenreEnum.Thriller, GenreEnum.Horror, GenreEnum.Mystery],
        description: "Ciel sombre, éclairs et tonnerre.",
        reason: "L'ambiance sombre et le suspense renforcent l'expérience immersive des thrillers et films d'horreur."
    },
    [WeatherMovieRecommendation.Drizzle]: {
        name: "Bruine",
        genres: [GenreEnum.Drama, GenreEnum.Romance],
        description: "Pluie fine et atmosphère humide.",
        reason: "Légèrement mélancolique, ce temps convient parfaitement aux drames introspectifs et aux romances touchantes."
    },
    [WeatherMovieRecommendation.Rain]: {
        name: "Pluie",
        genres: [GenreEnum.Action, GenreEnum.Adventure, GenreEnum.ScienceFiction, GenreEnum.Fantasy],
        description: "Pluie modérée à forte, parfois accompagnée de vent.",
        reason: "L'envie d'évasion se fait sentir, rendant les films d'aventure et de science-fiction particulièrement attrayants."
    },
    [WeatherMovieRecommendation.Snow]: {
        name: "Neige",
        genres: [GenreEnum.Family, GenreEnum.Animation, GenreEnum.Comedy],
        description: "Paysage enneigé, air froid et festif.",
        reason: "Parfait pour se réchauffer devant un film en famille ou retrouver la magie des films d'animation."
    },
    [WeatherMovieRecommendation.Atmosphere]: {
        name: "Brouillard et brume",
        genres: [GenreEnum.Mystery, GenreEnum.Crime, GenreEnum.Thriller, GenreEnum.Documentary],
        description: "Faible visibilité, ambiance mystique.",
        reason: "L'aspect mystérieux du brouillard complète parfaitement les intrigues criminelles et les thrillers captivants."
    },
    [WeatherMovieRecommendation.Clear]: {
        name: "Ciel dégagé",
        genres: [GenreEnum.Comedy, GenreEnum.Music, GenreEnum.TVMovie],
        description: "Grand soleil, ciel bleu.",
        reason: "Une belle journée ensoleillée mérite des films légers, joyeux et remplis de bonne humeur."
    },
    [WeatherMovieRecommendation.Clouds]: {
        name: "Nuages",
        genres: [GenreEnum.ScienceFiction, GenreEnum.History],
        description: "Ciel gris, nuages denses.",
        reason: "L'atmosphère calme et réfléchie favorise les récits historiques ou les voyages futuristes intrigants."
    }
}