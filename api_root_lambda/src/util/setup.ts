export const GetENVOrThrow = (varname: string) : string => {
  if (process.env[varname] === undefined) throw new Error(`Missing Environment Variable: ${varname}`);
  return process.env[varname] as string;
};
