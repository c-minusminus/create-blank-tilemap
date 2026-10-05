namespace tiles {
    /**
     * Creates a blank tilemap
     * @param w The width of the tilemap
     * @param h The height of the tilemap
     * @param s The tile size
     * @returns A blank tilemap
    */
    //% blockId=tiles_create_blank_tilemap block="create blank tilemap with width %w height %h and tile size %s"
    //% blockNamespace="scene" group="Tilemaps"
    //% s.defl=TileScale.Sixteen
    //% weight=209
    export function createBlankTilemap(w: number, h: number, s: TileScale) {
        let buf = Buffer.create(w * h + 4)

        buf.setNumber(NumberFormat.UInt16LE, 0, w)
        buf.setNumber(NumberFormat.UInt16LE, 2, h)

        const z = 1 << s
        return new TileMapData( // faster than createTilemap: https://github.com/microsoft/pxt-common-packages/blob/4e894460f0fb988c5df2fc39fb73c0b96709eebe/libs/game/tilemap.ts#L596
            buf,
            image.create(w, h),
            [image.create(z, z)],
            s
        )
    }
}