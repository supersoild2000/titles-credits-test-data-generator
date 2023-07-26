import { faker } from "@faker-js/faker";
import { Title } from "../types/title";
import { age_certifications, genres } from "../constants/title";

export const titleGenerator = (): Title => {
  return {
    id: faker.helpers
      .unique(() => faker.number.int({ min: 0, max: 65535 }))
      .toString(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    release_year: (
      faker.helpers.maybe(() => faker.number.int({ min: 1230, max: 1715 }), {
        probability: 0.05,
      }) ?? faker.date.past({ years: 60 }).getFullYear()
    ).toString(),
    age_certification:
      faker.helpers.maybe(() => faker.string.alpha(3), { probability: 0.1 }) ??
      faker.helpers.arrayElement(age_certifications),
    runtime: (
      faker.helpers.maybe(() => faker.number.int({ min: -50, max: 0 }), {
        probability: 0.05,
      }) ?? faker.number.int({ min: 10, max: 300 })
    ).toString(),
    genres:
      faker.helpers.maybe(() => faker.string.alpha(6), {
        probability: 0.05,
      }) ?? faker.helpers.arrayElements(genres, { min: 1, max: 4 }).join(),
    production_country: faker.location.countryCode("alpha-3"),
    seasons: (
      faker.helpers.maybe(() => 0, { probability: 0.4 }) ??
      faker.number.int({ min: 0, max: 12 })
    ).toString(),
  };
};
