const zod = require("zod");

const validateInput = (obj) => {
  const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
  });

  const response = schema.safeParse(obj);
  console.log(response);
};

validateInput({
  email: "sasjatvs@gmail.com",
  password: "zzzzzzzzzzzzz",
});
