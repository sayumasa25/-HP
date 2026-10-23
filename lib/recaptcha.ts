const RECAPTCHA_VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";

interface RecaptchaVerificationResponse {
  success?: boolean;
  hostname?: string;
  "error-codes"?: string[];
}

interface VerifyRecaptchaTokenOptions {
  token: string;
  remoteIp?: string;
}

export async function verifyRecaptchaToken({
  token,
  remoteIp,
}: VerifyRecaptchaTokenOptions): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY?.trim();
  const normalizedToken = token.trim();

  if (!secret || !normalizedToken) {
    return false;
  }

  const body = new URLSearchParams({
    secret,
    response: normalizedToken,
  });

  if (remoteIp) {
    body.set("remoteip", remoteIp);
  }

  try {
    const response = await fetch(RECAPTCHA_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });

    if (!response.ok) {
      return false;
    }

    const result = (await response.json()) as RecaptchaVerificationResponse;
    if (!result.success) {
      return false;
    }

    const allowedHostnames = process.env.RECAPTCHA_ALLOWED_HOSTNAMES?.split(",")
      .map((hostname) => hostname.trim().toLowerCase())
      .filter(Boolean);

    if (
      allowedHostnames?.length &&
      (!result.hostname ||
        !allowedHostnames.includes(result.hostname.toLowerCase()))
    ) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("reCAPTCHA verification failed:", error);
    return false;
  }
}
