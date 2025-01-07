## TechCart 🤖
A simple, SEO-focused, full-stack e-commerce test application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker
Install docker - [get docker](https://docs.docker.com/get-started/get-docker/)
```bash
docker build -t tech-cart .
```
```bash
docker run -p 4000:4000 tech-cart
```
Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Technical decisions
For optimal SEO performance, SSR (Server-Side Rendering) and SSG (Static Site Generation) approaches were utilized instead of CSR (Client-Side Rendering).

To simplify the setup, manual hydration on the client side (e.g., using async state managers like React Query or SWR) was omitted, although implementing it could enhance the user experience.

A RESTful API was created using Next.js route handlers. However, since we leverage Server Components [SC](https://react.dev/reference/rsc/server-components), [API routes are unnecessary](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them#using-route-handlers-with-server-components)

## Time spent
10 hours 👨🏻‍💻

## TODO
- Finish pagination
- Accessibility considerations
- Unit tests for key components