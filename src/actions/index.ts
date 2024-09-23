import { defineAction, ActionError } from "astro:actions";

export const server = {
  example: defineAction({
    accept: "form",
    handler: async (_input, _ctx) => {
      if (true) {
        throw new ActionError({ code: "NOT_FOUND", message: "Oops" });
      }
    },
  }),
};
