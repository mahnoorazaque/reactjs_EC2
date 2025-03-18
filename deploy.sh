#!/bin/bash
cd backend
npm install
pm2 restart server || pm2 start server.js --name backend

cd ../frontend
npm install
npm run build
pm2 serve dist --name frontend --spa --port 3000
