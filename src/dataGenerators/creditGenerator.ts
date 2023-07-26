import { faker } from "@faker-js/faker";
import { roles } from "../constants/credit";
import { Credit } from "../types/credit";

export const creditGenerator = (title_id: string): Credit => {
  const sex = faker.person.sexType();
  return {
    id: faker.helpers
      .unique(() => faker.number.int({ min: 0, max: 65535 }))
      .toString(),
    title_id,
    real_name:
      faker.helpers.maybe(() => faker.string.alpha(20), {
        probability: 0.1,
      }) ?? `${faker.person.firstName(sex)} ${faker.person.lastName(sex)}`,
    character_name:
      faker.helpers.maybe(() => faker.string.alpha(15), {
        probability: 0.1,
      }) ?? `${faker.person.firstName(sex)} ${faker.person.lastName(sex)}`,
    role:
      faker.helpers.maybe(() => faker.string.alpha(8), { probability: 0.1 }) ??
      faker.helpers.arrayElement(roles),
  };
};
