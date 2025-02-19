declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.hbs' {
    export default string;
}

declare module '*.hbs?raw' {
    export default string;
}

declare module '*.png' {
    export default any;
}

declare module '*.jpg' {
    export default any;
}

declare module '*.svg' {
    export default any;
}