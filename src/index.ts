export function initGuard() {
  console.log("🔥 GUARD STARTED");

  if (typeof window !== "undefined") return;

  const required = [
    "MONGO_URI",
    "JWT_SECRET",
    "EMAIL_USER",
    "EMAIL_PASSWORD",
    "WEBSITE_URL",
  ];

  const missing = required.filter(
    (k) => !process.env[k]
  );

  if (missing.length > 0) {
    console.error("❌ Missing environment variables:");
    missing.forEach(k => console.error(` - ${k}`));
    process.exit(1);
  }

  console.log("✅ Guard Passed");
}
