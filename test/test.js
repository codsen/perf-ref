import { test } from "uvu";
// eslint-disable-next-line no-unused-vars
import { equal, is, ok, throws, type, not, match } from "uvu/assert";
import { perfRef } from "../perf-ref.esm.js";

test("01", () => {
  equal(perfRef(), "182014283915", "01");
});

test("02 - it's naughty to pass any inputs but let's test anyway", () => {
  equal(perfRef(10), "39", "02");
});

test("03", () => {
  equal(perfRef(999), "728568396", "03");
});
