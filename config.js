/* =============================================================
   config.js — Nosso Cantinho
   Fica na raiz do repositório, ao lado do index.html.

   As chaves abaixo são públicas por natureza: quem abrir o site
   as vê. O que protege os dados é o RLS no Postgres.

   NUNCA coloque aqui a chave que começa com sb_secret_.
   ============================================================= */

window.APP_CONFIG = {

  SUPABASE_URL: 'https://apvaxjiseqnjimzzujut.supabase.co',

  // Chave anônima (JWT legado). Compatível com o SDK 2.45.4 usado no index.
  // Se um dia você desligar as "legacy API keys" no painel, troque pela
  // publishable (sb_publishable_...) e atualize o SDK para a versão mais nova.
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwdmF4amlzZXFuamltenp1anV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyMjU2NDQsImV4cCI6MjEwODgwMTY0NH0.gbRNm-5F5T7N6Eu8xyNPmS05smepcG_HAlWFEuGkFBE',

  SPACE_ID: '00000000-0000-0000-0000-000000000001',

  LOGIN_POR_USUARIO: false

};
