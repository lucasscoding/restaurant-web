/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_URL_HOST_PROD: string
  readonly VITE_URL_HOST_DEV: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}