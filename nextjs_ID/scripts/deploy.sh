#!/bin/bash
echo "Running pre-deployment setup..."
npx prisma generate || true
npm run build
