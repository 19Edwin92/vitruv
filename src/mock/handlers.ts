import { rest } from "msw";
import { SecondClass, totalList } from "./mockData/data";

export const handlers = [

  rest.get(`http://localhost:3000/api/totaldata`,
    async (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          success: true,
          status: 200,
          data: totalList,
        })
      );
    }
  ),
  rest.get(`http://localhost:3000/api/classdata`,
  async (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        success: true,
        status: 200,
        data: SecondClass,
      })
    );
  }
),


  // /api/classdata
];
