export interface FaqItem {
  q: string;
  a: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é o Zuxo Player e como funciona?",
    a: "O Zuxo Player é uma solução avançada de streaming IPTV que combina um reprodutor ultra veloz com mais de 35.000 canais ao vivo, filmes de cinema e séries completas em 4K, Full HD e HD. Ao solicitar seu acesso via WhatsApp, você recebe as credenciais de ativação (Xtream Codes / M3U) com tutorial de instalação para começar a assistir em menos de 5 minutos.",
  },
  {
    q: "O Zuxo Player trava durante os jogos de futebol ou horários de pico?",
    a: "Não. O Zuxo Player opera com servidores de alta capacidade e rotas CDN otimizadas no Brasil, aliados à compressão avançada H.265 (HEVC). Essa arquitetura reduz o atraso (delay), elimina travamentos e mantém a transmissão estável mesmo durante finais de campeonatos e horários de alto tráfego.",
  },
  {
    q: "Em quais dispositivos e televisores posso usar o Zuxo Player?",
    a: "O Zuxo Player é compatível com uma ampla gama de dispositivos: Smart TVs (Samsung Tizen, LG webOS, Roku TV e Android TV), TV Box, Amazon Fire TV Stick, smartphones e tablets Android e iOS, além de computadores Windows e Mac.",
  },
  {
    q: "Posso solicitar um teste grátis do Zuxo Player?",
    a: "Sim! Disponibilizamos um teste grátis sem compromisso para que você possa comprovar na prática a velocidade de troca de canais, a qualidade de imagem em 4K e a estabilidade da grade de conteúdo antes de escolher qualquer plano.",
  },
  {
    q: "Como recebo o acesso e o suporte de instalação?",
    a: "O atendimento e suporte do Zuxo Player são realizados diretamente pelo WhatsApp. Assim que seu pedido é confirmado, você recebe seu login, senha, URL do servidor ou lista M3U, além de um guia detalhado com suporte humano para qualquer ajuste.",
  },
  {
    q: "Quais as formas de pagamento aceitas?",
    a: "Aceitamos Pix com liberação automática imediata, cartões de crédito e boleto bancário de forma 100% segura.",
  },
];

export const FULL_FAQ: FaqItem[] = [
  ...HOME_FAQ,
  {
    q: "Quantas telas posso conectar simultaneamente?",
    a: "O plano padrão do Zuxo Player acompanha 1 conexão simultânea de alta qualidade. Se você deseja conectar múltiplas TVs ou compartilhar com sua família em outros aparelhos, basta solicitar pontos adicionais com desconto pelo WhatsApp.",
  },
  {
    q: "Qual a velocidade de internet recomendada para o Zuxo Player?",
    a: "Recomendamos no mínimo 10 Mbps para canais em HD e 30 Mbps estáveis para transmissões em 4K Ultra HD. Recomendamos conectar a Smart TV ou TV Box via cabo de rede (Ethernet) ou na rede Wi-Fi 5 GHz para máxima performance.",
  },
  {
    q: "Consigo organizar canais favoritos e controle dos pais?",
    a: "Com certeza. O Zuxo Player conta com sistema intuitivo de favoritos, busca inteligente de conteúdos por gênero ou ator, guia eletrônico de programação (EPG) e controle parental com senha para canais adultos.",
  },
  {
    q: "Como renovar minha assinatura do Zuxo Player?",
    a: "A renovação é rápida e sem burocracia. Próximo à data de vencimento, você pode renovar diretamente pelo nosso WhatsApp. Seu acesso é prolongado sem perda de configurações ou listas salvas.",
  },
];
