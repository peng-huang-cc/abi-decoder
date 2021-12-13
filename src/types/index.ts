export type DecodeParams = {
  name?: string;
  value: string | readonly string[];
  type?: string;
};

export type DecodeMethod = {
  name?: string;
  params: DecodeParams[];
};
