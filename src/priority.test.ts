import { expect, test } from "vitest";
import { isValidPriority } from "./priority.js";

test("優先度2は有効", () => {
    expect(isValidPriority(2)).toBe(true);
})