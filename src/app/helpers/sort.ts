import { CoreEntity } from "../../types/entities.types";

export const sortEntities = <T extends CoreEntity>(entities: T[]) => {
    const sortedEntity = entities
      .slice()
      .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
    return sortedEntity;
  };