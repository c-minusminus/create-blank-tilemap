const width = 40, height = 30
tiles.setCurrentTilemap(tiles.createBlankTilemap(width, height, TileScale.Four))
for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
        const i = img`
            7 9 6 8 
            5 7 9 6 
            4 5 7 9 
            2 4 5 7 
        `
        if (x % 2 == 0) i.flipX()
        if (y % 2 == 0) i.flipY()
        tiles.setTileAt(tiles.getTileLocation(x, y), i)
    }
}
