import bcrypt from "bcrypt";

export const getHashedPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(12);

  const hashedPassword = await bcrypt.hash(password, salt);

  return { salt, hashedPassword };
};
