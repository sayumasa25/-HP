// 新しいAPIキーをここに直接貼り付けてテストしてください
const NEW_API_KEY = "Czc17HiThdnnKSKaGyX0fA8rUQNoNGDEOmsJ";

async function quickTest() {
  const url = "https://hashimoto.microcms.io/api/v1/news";

  try {
    const response = await fetch(url, {
      headers: {
        "X-MICROCMS-API-KEY": NEW_API_KEY,
      },
    });

    console.log("Status:", response.status);

    if (response.ok) {
      const data = await response.json();
      console.log("✅ SUCCESS!");
      console.log("Data:", JSON.stringify(data, null, 2));
    } else {
      const error = await response.text();
      console.log("❌ Error:", error);
    }
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}

quickTest();
