# Performance Optimization Tasks

## Image Loading Optimizations
- [x] Add lazy loading to images in components
- [x] Add loading="lazy" to img tags
- [x] Preload critical images (logo, hero background)
- [ ] Add image optimization attributes (sizes, srcset if possible)

## SplashCursor Performance Fixes
- [x] Reduce DYE_RESOLUTION from 1440 to 720
- [x] Reduce SIM_RESOLUTION from 128 to 64
- [x] Reduce PRESSURE_ITERATIONS from 20 to 10
- [ ] Add conditional rendering based on device capabilities

## Component Lazy Loading
- [ ] Implement React.lazy for non-critical components
- [ ] Add Suspense boundaries

## Animation Optimizations
- [x] Reduce animation complexity where possible
- [x] Add will-change CSS property for animated elements
- [x] Optimize scroll handlers with throttling

## Bundle Optimization
- [ ] Check for unused dependencies
- [ ] Ensure proper code splitting
