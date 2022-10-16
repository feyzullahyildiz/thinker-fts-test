import Thinker from "thinker-fts";

export const thinker = new Thinker();

export const initDefaults = () => {
    thinker.ranker = Thinker.rankers.standard();
}
