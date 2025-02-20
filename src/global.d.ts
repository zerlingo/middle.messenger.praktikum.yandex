declare module '*.css' {
    const classes: { [key: string]: string };
    export default classes;
}

declare module '*.less' {
    const data: string;
    export default data;
}

declare module '*.hbs' {
    const data: string;
    export default data;
}

declare module '*.hbs?raw' {
    const data: string;
    export default data;
}

declare module '*.png' {
    const data: string;
    export default data;
}

declare module '*.jpg' {
    const data: string;
    export default data;
}

declare module '*.svg' {
    const data: string;
    export default data;
}
