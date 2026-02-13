
export type Market = {
  id: string;
  symbol: string;
  name: string;
  image: string;

  current_price: number;
  market_cap: number;
  total_volume: number;

  high_24h: number;
  low_24h: number;

  price_change_24h: number;
  price_change_percentage_24h: number;

  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;

  circulating_supply: number;
  total_supply: number;
  max_supply: number | null;

  last_updated: string; // iso time
  price_change_percentage_24h_in_currency: number;
};


export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterSection = {
  title?: string;
  links: FooterLink[];
};
export const footerSections = [
    {
        title: "Company",
        links: [
            { label: "About", href: "#", external: true },
            { label: "Careers", href: "#", external: true },
            { label: "Contact", href: "#", external: true },
        ],
    },
    {
        title: "Help & Support",
        links: [
            { label: "Learn", href: "#", external: true },
            { label: "Guide", href: "#", external: true },
            { label: "Support", href: "#", external: true },
            { label: "Documentation", href: "#", external: true },
        ],
    },
    {
        title: "Learn",
        links: [
            {
                label: "Solana Wallet",
                href: "#",
                external: true,
            },
            {
                label: "Sui Wallet",
                href: "#",
                external: true,
            },
            {
                label: "Monad Wallet",
                href: "#",
                external: true,
            },
        ],
    },
    {
        title: "Token Price",
        links: [
            { label: "Solana Price", href: "#" },
            { label: "Bitcoin Price", href: "#" },
            { label: "Ethereum Price", href: "#" },
            { label: "Sui Price", href: "#" },
            { label: "Monad Price", href: "#" },
        ],
    },
];

export const socialLinks = [
    {
        href: "#",
        icon: "https://backpack.exchange/x-bw.svg",
        alt: "X",
        size: 20,
    },
    {
        href: "#",
        icon: "https://backpack.exchange/discord-bw.svg",
        alt: "Discord",
        size: 26,
    },
    {
        href: "#",
        icon: "https://backpack.exchange/linkedin2.svg",
        alt: "LinkedIn",
        size: 20,
    },
    {
        href: "#",
        icon: "https://backpack.exchange/reddit2.svg",
        alt: "Reddit",
        size: 20,
    },
];
