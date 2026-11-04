declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development'| 'production' | 'test';
        readonly PUBLIC_API_CRYPTO: string;
        readonly DATABASE_URL: string;

    }
}

declare module '*.svg' {
    import React from 'react';
    const svg: React.FC<React.SVGProps<SVGSVGElement>>;
    export default svg; 
}