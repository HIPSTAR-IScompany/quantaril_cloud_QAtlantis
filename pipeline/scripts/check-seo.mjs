import {existsSync, readdirSync, readFileSync} from 'node:fs';
import {join} from 'node:path';

const root = process.cwd();
const blogDir = join(root, 'blog');
const requiredFields = ['title', 'description', 'keywords', 'image'];
const socialCard = join(root, 'static', 'img', 'quantaril-social-card-atlantis.png');
const failures = [];

for (const filename of readdirSync(blogDir).filter((name) => /\.mdx?$/.test(name)).sort()) {
  const source = readFileSync(join(blogDir, filename), 'utf8');
  const match = source.match(/^---\n([\s\S]*?)\n---/);

  if (!match) {
    failures.push(`${filename}: front matterがありません`);
    continue;
  }

  for (const field of requiredFields) {
    if (!new RegExp(`^${field}:\\s*\\S`, 'm').test(match[1])) {
      failures.push(`${filename}: ${field}がありません`);
    }
  }
}

if (!existsSync(socialCard)) {
  failures.push('static/img/quantaril-social-card-atlantis.png: SNSカードがありません');
}

if (failures.length > 0) {
  console.error('SEO公開前検査に失敗しました。');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('SEO公開前検査: blog metadataとSNSカードを確認しました。');
