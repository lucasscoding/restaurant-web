/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_HOST: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}