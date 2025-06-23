const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'landing-page', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const envScript = `
<!-- Vercel: Inject Supabase env variables at build time -->
<script>
  window.SUPABASE_URL = "${process.env.SUPABASE_URL}";
  window.SUPABASE_ANON_KEY = "${process.env.SUPABASE_ANON_KEY}";
</script>
`;

// Replace the existing env script block
html = html.replace(
  /<!-- Vercel: Inject Supabase env variables at build time -->[\s\S]*?<script>[\s\S]*?window\.SUPABASE_URL.*?\n[\s\S]*?window\.SUPABASE_ANON_KEY.*?\n[\s\S]*?<\/script>/,
  envScript
);

fs.writeFileSync(htmlPath, html);
console.log('Injected Supabase env vars into index.html'); 