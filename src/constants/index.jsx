import AayushImg from '../assets/img/people/Aayush.jpg'
import AndrewImg from '../assets/img/people/Andrew.jpg'
import SimonImg  from '../assets/img/people/simon.jpg'
import NathanImg from '../assets/img/people/Nathan.jpg'
import HarryImg from '../assets/img/people/Harry.jpg'
import JakeImg from '..//assets/img/people/Jake.png'

import NoImg from '../assets/img/people/no-image.webp'

import VyronovGameImg from '../assets/img/siggdgames/TheVyronovEffect.png'
import SightVinesGameImg from '../assets/img/siggdgames/SightVines.png'
import PlunderTheSeaGameImg from '../assets/img/siggdgames/PlunderTheSea.png'
import NamelessThingsGameImg from '../assets/img/siggdgames/NamelessThings.png'
import EchoesLegacyGameImg from '../assets/img/siggdgames/EchoesLegacy.png'

import GitHubLogo from '../assets/img/logos/GitHub-Mark-Light-120px-plus.png'
import ACMLogo from '../assets/img/logos/ACMLogo.png'
import PurdueCSLogo from '../assets/img/logos/purdueCS.jpg'
import DiscordLogo from '../assets/img/logos/discordLogo.svg'

export const githubLink = 'https://github.com/PurdueSIGGD'
export const purdueCSLink = 'https://www.cs.purdue.edu/'
export const acmLink = 'https://acm.cs.purdue.edu/'
export const discordLink = 'https://discord.gg/qwm3Y8QBPU' 

export const navItems = [
    { label: "About Us", href: "aboutus" },
    { label: "Games", href: "games"},
    { label: "Officers", href: "officers"},
]

export const officers = [
    { 
        name: "Nathan Whitacre",
        role: "President",
        startYear: "2022",
        endYear: "Present",
        img: NathanImg,
        description: "Nathan is a fourth-year Purdue student majoring in Computer Science with a minor in Spanish Language and Culture. This is his fourth year in SIGGD as a gameplay designer and programmer. When he's not jotting down paper designs or coding his next project, you can find him bouldering at the Corec or practicing his Spanish at the Latino Cultural Center. Some of his favorite video games include Overwatch, The Last of Us, and Celeste."
    },
    { 
        name: "Harry Weinberger",
        role: "Vice President",
        startYear: "2024",
        endYear: "Present",
        img: HarryImg,
        description: "Harry is a second-year Purdue student majoring in Business Analytics and Information Management, as well as Creative Writing. This is his second year with SIGGD. He loves watching movies, TV shows, youtube videos, and really anything that moves on a screen. He has always loved video games since playing Super Smash Bros with his brother as a kid, and hopes to one day put that interest into making games of his own as a career. Some of his favorite games include Calamity Terraria, Elden Ring, and Ori and the Will of the Wisps."
    },
    { 
        name: "Jake Bromme",
        role: "Art Lead",
        startYear: "2024",
        endYear: "Present",
        img: JakeImg,
        description: "Jake is a sophomore double majoring in Animation & VFX and Game Development. This is his second year with SIGGD. He has a long history with both digital and traditional art, with a primary focus on illustrating fictional stories. He also loves hiking and discovering new music. His favorite games include World of Warcraft: Wrath of the Lich King, The Legend of Zelda: Breath of the Wild, and Life is Strange."
    },
    { 
        name: "Simon Wang",
        role: "Programming Lead",
        startYear: "2024",
        endYear: "Present",
        img: SimonImg,
        description: "Simon is in his second year studying Game Development. This is his first year on the leadership team. He enjoys playing games of any and all genres. He struggles to decide on a favorite game but some games from he really enjoyed from the last year has been: Deadlock, WH40K Rogue Trader, and Until Then."
    },
    { 
        name: "Aayush Harwadekar",
        role: "Design Lead",
        startYear: "2024",
        endYear: "Present",
        img: AayushImg,
        description: "Aayush is a sophomore majoring in Game Dev/Design and a minor in CS. This is their 2nd year at SIGGD and the first year being on the leadership team. He always loves to play all types of games with friends, he used to play different roblox games every day with friends to truly get new and fun experiences every day. Some of his favorite games include: Pokemon, Bonk.io, and 20 minutes till dawn."
    },
    { 
        name: "Andrew Hanlon",
        role: "Audio Lead",
        startYear: "2022",
        endYear: "Present",
        img: AndrewImg,
        description: "Andrew Hanlon is a Senior who's majoring in Biomedical Health Sciences with a Pre-Med concentration. He has been a part of SIGGD all four years that he's been in college and has developed his musical skills while also picking up on some programming skills. He's a completionist and has had a love for video games his whole life. While he is focused on working in the medical field someday, he is hopeful that game development can be a hobby for him in the future. His favorite games include Terraria, Pokemon, and Hollow Knight."
    },
]

export const games = [
    {
        name: "Nameless Things",
        img: NamelessThingsGameImg,
        description: "When a deep-sea asset recovery mission goes terribly wrong, you are left stranded at the bottom of the ocean with only your glowing exo-suit to light your way. Equipped with a growing arsenal of robotic defenders, you must battle through waves of mutated ocean creatures to escape this action-packed underwater nightmare.",
        download: "https://drive.google.com/file/d/1iEwiljSnc4jQNggTWgvC-MRz7zu_xbUJ/view?usp=sharing",
        github: "https://github.com/PurdueSIGGD/SIGGD-Game-2023",
    },
    {
        name: "The Vyronov Effect",
        img: VyronovGameImg,
        description: "In the aftermath of a science experiment gone wrong, do your best to avoid enemies and escape the complex in this procedurally generated stealth game. A third person dungeon crawling stealth game. This is the first SIGGD game to include a story and voice acting! ",
        download: "https://drive.google.com/file/d/1JRGWIvUz0XN6MvT_H7uPHJaAozMGp61q/view?usp=share_link",
        github: "https://github.com/PurdueSIGGD/SIGGD-game-2022",
    },
    {
        name: "Sight-Vines",
        img: SightVinesGameImg,
        description: "Use stealth mechanics and items to fight enemies in this boss-fighting game. A top-down stealth boss-fighting game. Sneak through hidden paths, find equipment, and plan your attacks carefully!",
        download: "https://drive.google.com/file/d/14WcEJ18FGlzzU22Je3fF82CX1GSI5gLM/view?usp=sharing",
        github: "https://github.com/PurdueSIGGD/SIGGD-game-2021",
    },
    {
        name: "Plunder The Sea",
        img: PlunderTheSeaGameImg,
        description: "Procedurally generated dungeon crawler + fishing game + rhythm game. Fish to fight, and fight to fish! Unfortunately, thanks to the pandemic, game was developed almost entirely remotely, but we ended up creating an exciting game with lots of surprise.",
        download: "https://drive.google.com/file/d/1PBoHv1jDrXvbmjHgiilQhaYf5E64lKeh/view?usp=sharing",
        github: "https://github.com/PurdueSIGGD/Plunder-the-Sea",
    },
    {
        name: "Echoes of Isovios: A Legacy Undone",
        img: EchoesLegacyGameImg,
        description: "In a world devastated by the result of your wrong-doings, find redemption by helping the people you once harmed in this action-packed rogue-lite RPG. Tackle brutal enemies and bosses with as many as 7 character kits, and exeperience each character's unique story as you regain their trust! Fully voice acted!",
        download: "https://siggd.itch.io/siggd-game-2024-2025",
        github: "https://github.com/PurdueSIGGD/SIGGD-Game-2024"
    }
]

export const footerIcons = [
    {
        link: githubLink,
        img: GitHubLogo,
    },
    {
        link: acmLink,
        img: ACMLogo,
    },
    {
        link: purdueCSLink,
        img: PurdueCSLogo,
    },
    {
        link: discordLink ,
        img: DiscordLogo,
    },
]