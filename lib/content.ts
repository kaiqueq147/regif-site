import type { IconName } from "@/components/Icons";

export type Feature = {
  icon: IconName;
  title: string;
  desc: string;
};

export const features: Feature[] = [
  {
    icon: "replay",
    title: "Volta no tempo",
    desc: "O regif fica de olho na sua tela o tempo todo. Aconteceu algo bom? Ele já tinha gravado — é só salvar.",
  },
  {
    icon: "keyboard",
    title: "Uma tecla e pronto",
    desc: "Escolha a sua tecla favorita e aperte na hora certa. O clipe dos últimos segundos aparece na sua frente.",
  },
  {
    icon: "scissors",
    title: "Ajuste do seu jeito",
    desc: "Corte o começo e o fim, enquadre a cena e deixe do tamanho certo — tudo com o resultado aparecendo na tela na hora.",
  },
  {
    icon: "bolt",
    title: "Pronto num piscar",
    desc: "Seu clipe fica pronto em segundos e leve pra compartilhar. Sem espera, sem travar o computador.",
  },
  {
    icon: "loop",
    title: "Deixe divertido",
    desc: "Acelere, deixe em câmera lenta, inverta ou faça aquele vai-e-volta estilo boomerang. Um clique e pronto.",
  },
  {
    icon: "text",
    title: "Escreva na cena",
    desc: "Adicione aquele texto estilo meme, escolha onde colocar e mande ver. Perfeito pra arrancar risadas.",
  },
  {
    icon: "gallery",
    title: "Tudo num lugar só",
    desc: "Seus clipes ficam guardadinhos numa galeria. Reveja, renomeie, apague ou compartilhe quando quiser.",
  },
  {
    icon: "palette",
    title: "Do seu estilo",
    desc: "Tema claro ou escuro, cores que combinam com você e opção em Português ou Inglês. Você que manda.",
  },
];

// Download direto da release 0.1
export const downloadUrl =
  "https://github.com/kaiqueq147/regif-site/releases/download/0.1/regif.exe";

// Passos da demo animada (FlowDemo). A cena de cada passo está em FlowScenes.tsx.
export type FlowStep = { title: string; desc: string };

export const flowSteps: FlowStep[] = [
  {
    title: "Grava em segundo plano",
    desc: "O regif guarda só os últimos segundos da sua tela na memória, num buffer circular. Quadro novo entra, o mais antigo sai — nada de encher o disco.",
  },
  {
    title: "Aperte a tecla",
    desc: "Rolou a jogada? Aperte o atalho global (você escolhe a tecla), até dentro do jogo. Os últimos segundos viram um clipe na hora.",
  },
  {
    title: "Ajuste no editor",
    desc: "Apare o começo e o fim, recorte a área, desenhe e escreva uma legenda estilo meme. Tudo com preview ao vivo antes de salvar.",
  },
  {
    title: "Salve e compartilhe",
    desc: "Exporte em GIF, WebP, MP4, WebM ou APNG. O arquivo fica no seu PC, leve e pronto pra mandar em qualquer lugar.",
  },
];

// Comparativo "jeito antigo" x regif (Versus.tsx).
export const oldWay: string[] = [
  "Lembrar de ligar o gravador antes",
  "Gravar tudo e lotar o disco de vídeo",
  "Abrir um editor de vídeo pesado",
  "Procurar o trecho e cortar",
  "Exportar e converter pra GIF",
  "Torcer pro arquivo não ficar gigante",
];

export type Format = {
  tag: string;
  desc: string;
};

export const formats: Format[] = [
  {
    tag: "GIF",
    desc: "O queridinho da internet. Cai em qualquer chat, grupo ou fórum.",
  },
  {
    tag: "WebP",
    desc: "Um GIF mais leve e nítido. Ideal pra mandar rapidinho.",
  },
  {
    tag: "MP4",
    desc: "Vídeo com qualidade caprichada, do jeito das redes sociais.",
  },
  { tag: "WebM", desc: "Levinho e moderno, perfeito pra web." },
  { tag: "APNG", desc: "Animação nítida com fundo transparente." },
];

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export const stats: Stat[] = [
  { value: 30, suffix: "s", label: "sempre guardados pra você" },
  { value: 5, label: "formatos pra compartilhar" },
  { value: 1, suffix: " tecla", label: "pra salvar o momento" },
  { value: 0, label: "momentos bons perdidos" },
];

export type Plan = {
  name: string;
  price: string;
  per: string;
  desc: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    name: "Grátis",
    price: "0",
    per: "/sempre",
    desc: "GIFs ilimitados pra sempre. Os 10 primeiros saem sem marca d'água.",
    features: [
      "GIFs ilimitados, sem cota mensal",
      "Primeiros 10 GIFs sem marca d'água",
      "Depois disso, GIFs com marca d'água",
      "Clipes de até 15 segundos",
      "Corte, enquadre e legendas",
      "Galeria com todos os seus GIFs",
    ],
    cta: "Baixar grátis",
    href: "#download",
  },
  {
    name: "Premium",
    price: "9,99",
    per: "/30 dias",
    desc: "Remova a marca d'água e libere clipes mais longos. Pix ou cartão, sem renovação automática.",
    features: [
      "Sem marca d'água em nenhum GIF",
      "Clipes de até 30 segundos",
      "Câmera lenta, reverso e boomerang",
      "Corte, legendas e enquadre completos",
      "Galeria com todos os seus GIFs",
      "Atendimento prioritário",
    ],
    cta: "Baixar e liberar o Premium",
    href: "#download",
    featured: true,
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const faqs: Faq[] = [
  {
    q: "O regif deixa meu computador lento?",
    a: "Não! Ele trabalha de leve em segundo plano e só entra em ação quando você aperta a tecla. Enquanto isso, você joga e usa o PC normalmente.",
  },
  {
    q: "Preciso apertar gravar antes do momento acontecer?",
    a: "Essa é a melhor parte: não precisa. O regif já está guardando os últimos segundos o tempo todo. Você só decide salvar depois que a cena boa acontece.",
  },
  {
    q: "Funciona com jogos?",
    a: "Sim! Funciona com jogos, vídeos, chamadas e qualquer coisa que aparecer na sua tela.",
  },
  {
    q: "Em quais formatos posso salvar?",
    a: "GIF (o mais usado), além de vídeo e outras opções, pra você mandar em qualquer lugar — grupos, redes sociais ou onde quiser.",
  },
  {
    q: "Meus clipes vão parar na internet?",
    a: "Nunca. Seus GIFs ficam só no seu computador. Sua conta guarda apenas quantos GIFs você fez e se você é Premium — nada dos seus vídeos.",
  },
  {
    q: "Preciso criar conta?",
    a: "Sim, e leva alguns segundos com o Google. Assim sua cota fica ligada a você — reinstalar o programa ou trocar de PC não zera nada.",
  },
  {
    q: "O que acontece depois dos 10 GIFs grátis?",
    a: "Nada de bloqueio! Você continua criando GIFs ilimitados de graça — só que a partir daí eles saem com uma marca d'água. Para remover a marca, é só liberar o Premium (R$9,99 por 30 dias).",
  },
  {
    q: "Como pago e quando o Premium libera?",
    a: "Dentro do app, no botão Assinar Premium, você abre o checkout seguro da Cakto e paga com Pix, cartão ou PicPay. Assim que o pagamento é aprovado, o app libera o Premium na sua conta automaticamente — é só tocar em Atualizar se demorar um instante.",
  },
  {
    q: "E se eu não renovar o Premium?",
    a: "Cada pagamento vale 30 dias. Depois disso, você volta ao plano grátis (com marca d'água nos GIFs) e paga de novo quando quiser reativar. Não há cobrança automática: ninguém é cobrado sem querer.",
  },
  {
    q: "É difícil de instalar?",
    a: "Nada disso. É baixar, abrir e entrar com o Google no Windows 10 ou 11. Sem complicação, sem programas extras.",
  },
];

export const nav = {
  links: [
    { href: "#recursos", label: "Recursos" },
    { href: "#como-funciona", label: "Como funciona" },
    { href: "#formatos", label: "Formatos" },
    { href: "#precos", label: "Preços" },
    { href: "#faq", label: "FAQ" },
  ],
};

// 3 passos usados pelo HowItWorks (estático, opcional).
export const steps = [
  {
    n: 1,
    title: "Deixe rodando",
    desc: "O regif grava sua tela em segundo plano o tempo todo, sem atrapalhar.",
  },
  {
    n: 2,
    title: "Aperte uma tecla",
    desc: "Aconteceu algo bom? Aperta a tecla e os últimos segundos viram clipe.",
  },
  {
    n: 3,
    title: "Salve e compartilhe",
    desc: "Corta, enquadra, adiciona legenda e exporta em GIF ou vídeo na hora.",
  },
];
