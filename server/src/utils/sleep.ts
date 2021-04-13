export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms)); // in 4:02:00 demo CSR vs SSR
