/**
 * Monta o link de WhatsApp com o sufixo dinâmico da palavra-chave.
 * Sempre substitui o final da mensagem pela keyword contextual.
 */
export const WHATSAPP_PHONE = "5562982658713";

export function whatsappUrl(keyword: string = "Zuxo Player"): string {
  const message = `Olá, Gostaria de falar sobre o ${keyword}`;
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
}
