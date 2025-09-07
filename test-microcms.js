const { createClient } = require('microcms-js-sdk');
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

async function testMicroCMS() {
  console.log('Service Domain:', process.env.MICROCMS_SERVICE_DOMAIN);
  console.log('API Key (first 10 chars):', process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY.substring(0, 10) + '...' : 'Not set');
  console.log('API Key length:', process.env.MICROCMS_API_KEY ? process.env.MICROCMS_API_KEY.length : 0);
  console.log('Full URL would be: https://' + process.env.MICROCMS_SERVICE_DOMAIN + '.microcms.io/api/v1/news');
  
  // 複数のサービスドメインとエンドポイントをテスト
  const domains = ['hashimoto', 'hashimoto-hashimoto'];
  const endpoints = ['news', 'events', 'productList', 'voice', 'faq'];
  
  for (const domain of domains) {
    console.log(`\n=== Testing domain: ${domain} ===`);
    
    for (const endpoint of endpoints) {
      try {
        const url = `https://${domain}.microcms.io/api/v1/${endpoint}`;
        console.log(`\nTesting: ${domain}/${endpoint}`);
        console.log(`URL: ${url}`);
        
        const response = await fetch(url, {
          headers: {
            'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY,
          },
        });
        
        console.log(`Response status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log(`✅ SUCCESS with ${domain}/${endpoint}!`);
          console.log(`Data count: ${data.contents ? data.contents.length : 'N/A'}`);
          if (data.contents && data.contents.length > 0) {
            console.log(`First item title: ${data.contents[0].title || 'No title'}`);
          }
          return; // 成功したら終了
        } else {
          const errorText = await response.text();
          console.log(`❌ Failed: ${errorText}`);
        }
      } catch (error) {
        console.error(`❌ Fetch error:`, error.message);
      }
    }
  }
}

testMicroCMS();
