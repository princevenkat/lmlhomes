// these are all just placeholders. Layer will look at them and handle all drawing
export function LayerImage({ src, x, y, width, height, hAlign, vAlign, rot }) {
    return null;
}

export function LayerText({ text, x, y, font, hAlign, vAlign }) {
    return null;
}

export function LayerRaw({ cells, drawFunc }) {
    return null;
}

export function LayerPassthrough({ layer }) {
    return null;
}