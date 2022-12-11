import supertest from "supertest";
import app from "../index";

const request = supertest(app);

describe("Endpoint Testing", (): void => {
  it("HomePage", async () => {
    const response: supertest.Response = await request.get("/");

    expect(response.status).toEqual(200);
  });

  it("No Arguments Is Added ", async () => {
    const response: supertest.Response = await request.get("/api/images");

    expect(response.status).toEqual(200);
  });
  it("Displaying Main Images With No Errors ", async () => {
    const response: supertest.Response = await request.get(
      "/api/images?filename=santamonica"
    );

    expect(response.status).toBe(200);
  });

  it("Displaying New Image After Applying Sharp Resizing", async () => {
    const response: supertest.Response = await request.get(
      "/api/images?filename=santamonica&width=199&height=199"
    );

    expect(response.status).toEqual(200);
  });

  it("Width Have -Ve Value ", async () => {
    const response: supertest.Response = await request.get(
      "/api/images?filename=santamonica&width=-200&height=200"
    );

    expect(response.status).toEqual(200);
  });
});
