# Production Database Setup

Your app is deployed but needs a production database. Choose one:

## Option 1: PostgreSQL (Recommended)
1. Create a PostgreSQL database on Digital Ocean, AWS RDS, or similar
2. Update DATABASE_URL in your Digital Ocean environment variables:
   ```
   DATABASE_URL="postgresql://username:password@host:5432/database"
   ```

## Option 2: MySQL
1. Create a MySQL database
2. Update DATABASE_URL:
   ```
   DATABASE_URL="mysql://username:password@host:3306/database"
   ```

## After setting up database:
1. Go to Digital Ocean App Platform
2. Settings → Environment Variables
3. Add/update:
   - DATABASE_URL
   - NEXTAUTH_URL=https://idos-nextjs-qfjo3.ondigitalocean.app
   - NEXTAUTH_SECRET=(generate a secure secret)
4. Redeploy the app

## Generate migrations:
```bash
npx prisma db push
```
