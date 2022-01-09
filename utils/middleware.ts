import type { NextApiRequest, NextApiResponse } from 'next';

export default function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse<any>,
  fn: any,
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}
