# Bundle Size Optimization TODO

## Approved Plan Steps:

- [x] Step 1: Update vite.config.ts with manualChunks for vendors (react, recharts, etc.)
- [x] Step 2: Refactor AdminRouter.tsx - Replace static page imports with React.lazy() and wrap Routes in Suspense
- [x] Step 3: Refactor SuperAdminRouter.tsx - Replace static page imports with React.lazy() and wrap Routes in Suspense
- [x] Step 4: Fix vite.config.ts manualChunks syntax error and verify pnpm build chunk sizes (chunks now <500kB max, pages split ~2-50kB, vendor-charts ~240kB, main ~373kB recharts-related - warnings resolved)
- [ ] Step 5: Test lazy loading in dev server
- [ ] Step 6: Update TODO.md with completion and attempt_completion

## Completed
