1️⃣ page.tsx (Server Component) → SEO Optimization & Static Metadata
Ensures SEO is preserved by keeping export const metadata at the top level.
Remains a Server Component to improve performance.
Lightweight, only responsible for rendering the Client Component.

2️⃣ NewsClient.tsx (Client Component) → Handles Hooks & UI Logic
Marked as "use client", so it can use hooks like useLanguage().
Prevents Next.js hydration errors by keeping client-side logic separate from server-side rendering.
Keeps the Server Component (NewsServer.tsx) pure and stateless.

3️⃣ NewsServer.tsx (Server Component) → Fetches Data & Improves Performance
Fetches articles on the server-side for better performance and faster page loads.
Avoids unnecessary client-side requests (improves performance & SEO).

Can use Next.js caching mechanisms (revalidate, fetch options) for optimized data fetching.
4️⃣ ClientPagination.tsx (Client Component) → Handles Interactive Pagination
Uses Suspense for improved UX (<Suspense fallback={<p>Loading...</p>}>).
Keeps pagination interactive without reloading the entire page.
Maintains fast navigation without affecting SEO.

✅ Improved SEO → metadata stays in page.tsx (Server Component).
✅ Optimized Performance → Data fetching is server-side (NewsServer.tsx).
✅ No Hydration Issues → Hooks (useLanguage) are in a Client Component (NewsClient.tsx).
✅ Solid/ Maintainability → Each component has a single responsibility.
✅ Faster Page Loads → Initial articles load server-side, pagination updates client-side.
