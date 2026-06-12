#!/bin/bash
export PATH=$PATH:/usr/local/bin:/opt/homebrew/bin
cd /Users/admin/Downloads/mahaswi-site-ready
npx --yes vercel --prod --yes >> /Users/admin/Downloads/mahaswi-site-ready/deploy.log 2>&1
