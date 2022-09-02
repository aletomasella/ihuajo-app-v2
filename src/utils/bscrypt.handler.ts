import { hash, compare } from "bcryptjs";

const encrypt = async (password: string) => {
  const passwordHash = await hash(password, 10);
  return passwordHash;
};

const comparePassword = async (password: string, hash: string) => {
  const isMatch = await compare(password, hash);
  return isMatch;
};

export { encrypt, comparePassword };
