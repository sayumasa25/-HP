import { afterEach, describe, expect, it, vi } from "vitest";

import { verifyRecaptchaToken } from "./recaptcha";

describe("verifyRecaptchaToken", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.unstubAllGlobals();
  });

  it("rejects a missing token", async () => {
    vi.stubEnv("RECAPTCHA_SECRET_KEY", "secret");

    await expect(verifyRecaptchaToken({ token: "" })).resolves.toBe(false);
  });

  it("rejects when the server secret is missing", async () => {
    vi.stubEnv("RECAPTCHA_SECRET_KEY", "");

    await expect(verifyRecaptchaToken({ token: "token" })).resolves.toBe(false);
  });

  it("accepts a successful Google verification", async () => {
    vi.stubEnv("RECAPTCHA_SECRET_KEY", "secret");
    vi.stubEnv("RECAPTCHA_ALLOWED_HOSTNAMES", "www.hs1922.com,localhost");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({ success: true, hostname: "www.hs1922.com" }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        ),
      ),
    );

    await expect(
      verifyRecaptchaToken({ token: "token", remoteIp: "203.0.113.10" }),
    ).resolves.toBe(true);
  });

  it("rejects a response for a different hostname", async () => {
    vi.stubEnv("RECAPTCHA_SECRET_KEY", "secret");
    vi.stubEnv("RECAPTCHA_ALLOWED_HOSTNAMES", "www.hs1922.com");
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue(
        new Response(
          JSON.stringify({ success: true, hostname: "example.com" }),
          {
            status: 200,
            headers: { "Content-Type": "application/json" },
          },
        ),
      ),
    );

    await expect(verifyRecaptchaToken({ token: "token" })).resolves.toBe(false);
  });
});
