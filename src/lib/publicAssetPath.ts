const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const publicAssetPath = (path: string) => `${basePath}${path}`;
