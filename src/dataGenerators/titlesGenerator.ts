import { faker } from "@faker-js/faker";
import { titleGenerator } from "./titleGenerator";

export const titlesGenerator = (min: number, max: number) =>
  faker.helpers.multiple(titleGenerator, {
    count: { min, max },
  });
