import { getClientIP } from "../src";

test("requestIp has getClientIP function", () => {
  expect(getClientIP).not.toBeUndefined();
  expect(getClientIP).toBeDefined();
});
