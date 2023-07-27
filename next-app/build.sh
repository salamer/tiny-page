export NODE_ENV=production
npm install
npm run build
cp -R .next/static .next/standalone/.next/static
cp -R public .next/standalone/public
# rm -rf ./.next/cache
# ln -s /tmp/cache ./.next/cache
ln -sf /tmp/cache ./.next/cache