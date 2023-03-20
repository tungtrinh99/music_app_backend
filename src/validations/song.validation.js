module.exports.songDataValidate = {
    title: {
        exists: {
            errorMessage: "title song is required",
            options: { checkFalsy: true },
        },
        isString: { errorMessage: "title song should be string" },
    },
    image: {
        isString: { errorMessage: "image should be string" }
    },
    lyric: {
        exists: { errorMessage: "lyric is required" },
        isString: { errorMessage: "lyric should be string" }
    },
    url_song: {
        isString: { errorMessage: "image should be string" }
    },
    artist_id: {
        isInt: true,
        toInt: true,
    },
    album_id: {
        isInt: true,
        toInt: true,
    },
    category_id: {
        isInt: true,
        toInt: true,
    },
    release_date: {
        isDate: { errorMessage: "release date should be string" },
    },
}