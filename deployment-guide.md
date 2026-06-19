# Eurosia Buildnex Production Deployment Guide

This guide details the step-by-step procedures to deploy the **Eurosia Buildnex Marketing Platform** into enterprise production servers, supporting the consolidated React frontend, the Node.js/Express full-stack engine, and the NestJS PostgreSQL relational blueprints.

---

## 🚀 Deployment Architectures

You can run Eurosia Buildnex under two primary production profiles:

1. **Option A: Full-Stack Express Bundle (Recommended)**  
   Deploys your entire app as a single service on self-contained containers (Vite-optimized React compiled SPA served directly by Node/Express). This is identical to the container running in active staging models inside our Cloud Run preview workspace.
2. **Option B: Distributed NestJS + PostgreSQL Backend**  
   Splits operations. Integrates NestJS controllers with an external PostgreSQL server cluster, serving the React assets from high-speed Content Delivery Networks (CDN) like Vercel, Netlify, or AWS CloudFront.

---

## 📂 System Folder Map
The project architecture has been prepared as follows:
```text
├── /data/                   # Transient Local file database storage
├── /backend/                # Blueprints for NestJS & PostgreSQL entities
│   ├── lead.entity.ts       # Database structures mapping to postgres
│   ├── leads.controller.ts  # NestJS controllers handling client entries
│   └── blog.controller.ts   # Publications creation endpoint
├── /src/                    # Complete React client application
│   ├── pages/               # Multi-page marketing router components
│   ├── components/          # Reusable Navbar, Footer, and SEO elements
│   ├── types.ts             # Type definition structures
│   └── main.tsx             # SPA mounting coordinator
├── server.ts                # Stable full-stack Express server
└── package.json             # Commands, dependencies, and bundle tasks
```

---

## 🛠️ Option A: Full-Stack Express Manual

This setup compiles all source structures inside a single multi-stage Docker environment.

### 1. Unified Environment Variables (`.env`)
Create a `.env` file on your host machine with:
```env
NODE_ENV=production
PORT=3000
GEMINI_API_KEY="your_secure_api_key_variable_if_integrating"
APP_URL="https://eurosia.comm.bd"
```

### 2. Multi-Stage Production Dockerfile (`Dockerfile`)
Write a standard optimized `Dockerfile` in the root:
```dockerfile
# Stage 1: Compiling React assets & server bundles
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Standalone light-weight executor
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server.ts ./
# Compile backend scripts with esbuild if not bundled during Stage 1
COPY --from=builder /app/dist/server.cjs ./dist/server.cjs

EXPOSE 3000
CMD ["npm", "run", "start"]
```

### 3. Build & Launch Containers
```bash
docker build -t eurosia-buildnex:latest .
docker run -d -p 3000:3000 --env-file .env --name buildnex-platform eurosia-buildnex:latest
```

---

## ⚡ Option B: Distributed NestJS Backend (PostgreSQL)

If migrating to an enterprise microservices matrix:

### 1. Register NestJS Modules
Register our included blueprints inside your master `app.module.ts`:
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactLeadEntity, DemoRequestEntity, BlogPostEntity } from './backend/lead.entity';
import { WebMarketingController } from './backend/leads.controller';
import { BlogController } from './backend/blog.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 5432,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE || 'buildnex_db',
      entities: [ContactLeadEntity, DemoRequestEntity, BlogPostEntity],
      synchronize: true, // Turn off in high critical production models
    }),
    TypeOrmModule.forFeature([ContactLeadEntity, DemoRequestEntity, BlogPostEntity]),
  ],
  controllers: [WebMarketingController, BlogController],
})
export class AppModule {}
```

### 2. Configure Dynamic Cors & Proxy
Ensure your React static files contain a proxy rule inside `vite.config.ts`, or that your NestJS has CORS enabled:
```typescript
// inside main.ts of NestJS:
app.enableCors({
  origin: ['https://eurosia.com.bd', 'http://localhost:3000'],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
});
```

---

## 🔒 Security & Support Maintenance SLA

1. **Firewalls & Nginx Routing**  
   Always reverse-proxy traffic behind Nginx or Cloudflare layers, with standard SSL bindings:
   ```nginx
   server {
       listen 443 ssl;
       server_name eurosia.com.bd;
       
       ssl_certificate /path/to/fullchain.pem;
       ssl_certificate_key /path/to/privkey.pem;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
2. **Backups**  
   Configure database dumps using cron parameters for high safety indices, archiving files weekly:
   ```bash
   pg_dump -U postgres -d buildnex_db | gzip > /backups/db_$(date +%F).sql.gz
   ```

---

## 📱 PWA & Offline-First Enterprise Architecture

Eurosia Buildnex has been reinforced with a fully installable Progressive Web App (PWA) architecture. This setup ensures that general contractors, subcontractors, and prospective clients experience uninterrupted access to workflows even when working in muddy excavation basements with zero network access.

### 1. Progressive Installation Flow
- **Multi-OS Install Compatibility**: Support for Android, iPhone, iPad, Windows, macOS, and Linux.
- **Trigger Points**: Custom install buttons integrated inside the main `<Header />`, the `MobileMenu` sidebar, bottom promo banners, and interactive modal instruction dialogs specialized for iOS Safari clients.

### 2. Service Worker Storage Matrix
The service worker uses targeted caches based on resource attributes:
1. `STATIC_CACHE`: Offline-fallback pages, branding vectors, icons, critical scripts.
2. `IMAGE_CACHE`: Project galleries, team avatars, layout mockups.
3. `API_CACHE`: Network-first caching layer for dynamic read actions (`/api/*`).

### 3. Progressive Synchronization Engine Blueprints (Requirement 17)
To scale this PWA to a full native/desktop replacement, Eurosia Buildnex utilizes a three-tier local storage strategy:

```text
┌──────────────────────────────────────────────────────────────┐
│                  Browser Runtime (Main UI)                   │
└──────────────────────────────┬───────────────────────────────┘
                               │ Writes events
                               ▼
┌──────────────────────────────────────────────────────────────┐
│     SQLite WASM + IndexedDB (Local AES-256 Event Store)      │
└──────────────────────────────┬───────────────────────────────┘
                               │ Reads/Syncs
                               ▼
┌──────────────────────────────────────────────────────────────┐
│     Service Worker Background Sync / Sync Queue Buffer       │
└──────────────────────────────┬───────────────────────────────┘
                               │ Flushes on connection
                               ▼
┌──────────────────────────────────────────────────────────────┐
│              Eurosia Cloud API (Postgres / NestJS)           │
└──────────────────────────────────────────────────────────────┘
```

#### A. Offline Sync Queue Implementation Code snippet (Client-Side)
```typescript
interface SyncEvent {
  id: string;
  action: 'CREATE_LEAD' | 'BOOK_DEMO' | 'UPDATE_LEDGER';
  payload: any;
  timestamp: number;
}

export class OfflineSyncQueue {
  private static STORAGE_KEY = 'buildnex-sync-queue';

  static async enqueue(action: SyncEvent['action'], payload: any) {
    const queue = this.getQueue();
    const event: SyncEvent = {
      id: `evt-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      action,
      payload,
      timestamp: Date.now()
    };
    queue.push(event);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(queue));
    
    // Register background sync task if available
    if ('serviceWorker' in navigator && 'SyncManager' in window) {
      const reg = await navigator.serviceWorker.ready;
      await (reg as any).sync.register('buildnex-sync-flush');
    }
  }

  static getQueue(): SyncEvent[] {
    const raw = localStorage.getItem(this.STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  static clearQueue() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
  }
}
```

#### B. Service Worker Flush Handler Callback
```javascript
// Inside service-worker.js:
self.addEventListener('sync', (event) => {
  if (event.tag === 'buildnex-sync-flush') {
    event.waitUntil(flushPendingTransactions());
  }
});

async function flushPendingTransactions() {
  const queue = await getLocalQueueFromIndexedDB();
  for (const item of queue) {
    try {
      const response = await fetch(`/api/sync/${item.action.toLowerCase()}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item.payload)
      });
      if (response.ok) {
        await dequeueEvent(item.id);
      }
    } catch (err) {
      console.error('Retrying sync event block during next heartbeat:', err);
      break; // Preserve order, retry later
    }
  }
}
```

### 4. Push Notification Readiness (Requirement 11)
To active Firebase Cloud Messaging (FCM) on top of the built-in PWA notification callbacks, use the client-side subscription workflow:

```typescript
export async function subscribeUserToPush() {
  if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    return;
  }
  
  const registration = await navigator.serviceWorker.ready;
  const existingSubscription = await registration.pushManager.getSubscription();
  if (existingSubscription) return existingSubscription;

  // Subscribe using VAPID keys generated by Firebase Admin console
  const subscription = await registration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(process.env.VITE_FCM_VAPID_PUBLIC_KEY)
  });

  // Post subscription object details to backend to catalog the device push token
  await fetch('/api/admin/push-subscribe', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(subscription)
  });

  return subscription;
}
```

---
*Developed & Maintained by Eurosia Corporate Engineering Division.*
