/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
    readonly DB_PASSWORD: string;
    readonly ICHARMS_API_KEY: string;
    readonly ICHARMS_URL: string;
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }