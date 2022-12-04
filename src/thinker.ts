// import Thinker from "thinker-fts";
const Thinker = require("thinker-fts");

export const thinker = new Thinker(
    { characters: /([a-zA-Z0-9åäöÅÄÖÇçĞğIıİiÖöŞşÜü]*)/g }
);

export const initDefaults = () => {
  thinker.ranker = Thinker.rankers.standard({
		// directHit: 1,
		// partialHit: 0.5,
		// eachPartialExpressionFactor: 1.5,
		// eachDirectExpressionFactor: 2,
		fields: {
			0: { weight: 3, boostPercentage: true },
			1: { weight: 2, boostPercentage: true },
			2: { weight: 1, boostPercentage: true },
			3: { weight: 1, boostPercentage: true },
			// 3: { weight: 1, boostPercentage: true },
		}
	}
  );
};
