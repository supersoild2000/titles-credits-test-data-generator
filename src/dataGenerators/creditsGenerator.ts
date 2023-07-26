import { faker } from "@faker-js/faker";
import { Title } from "../types/title";
import { Credit } from "../types/credit";
import { creditGenerator } from "./creditGenerator";

export const creditsGenerator = (titles: Title[], maxPerEachTitle: number) => {
  const credits: Credit[] = [];
  titles.forEach((title) =>
    credits.push(
      ...faker.helpers.multiple(() => creditGenerator(title.id), {
        count: { min: 1, max: maxPerEachTitle },
      }),
    ),
  );
  return credits;
};
