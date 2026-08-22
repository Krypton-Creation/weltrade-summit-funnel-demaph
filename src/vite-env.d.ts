/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_N8N_WEBHOOK_URL?: string
  readonly VITE_META_PIXEL_ID?: string
  readonly VITE_WHATSAPP_GROUP_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
