import { Joi, Segments, validate } from "../config/validation/index";

export const createClient = validate({
  [Segments.BODY]: Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string()
      .email({ tlds: { allow: ["com", "net"] } })
      .required(),
    card_number: Joi.string().min(10).max(10).required(),
    balance: Joi.number().required().required(),
  }),
});
