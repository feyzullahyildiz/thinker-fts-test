// declare module 'thinker-fts';

declare module 'thinker-fts' {
    export default class Thinker {
        constructor(){}
        ranker: any
        feed: (d: any) => Void
        static rankers: any
    }
}
