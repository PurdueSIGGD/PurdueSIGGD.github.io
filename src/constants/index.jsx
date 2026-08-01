import BlankImg from '../assets/img/people/blank.png'
import JasenImg from '../assets/img/people/Jasen.jpg'
import SimonImg  from '../assets/img/people/Simon.png'
import HarryImg from '../assets/img/people/Harry.jpg'
import JakeImg from '..//assets/img/people/Jake.png'

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
        name: "Simon Wang",
        role: "President",
        startYear: "2024",
        endYear: "Present",
        img: SimonImg,
        imgPosition: "50% 40%",
        description: "Simon is in his third year studying Game Development. He is primarily a programmer but he also greatly enjoys ranting about game designs. He struggles to decide on a favorite game but some games he really enjoyed in the last year has been: Overwatch, WH40K Rogue Trader, and Slay the Spire 2."
    },
    { 
        name: "Harry Weinberger",
        role: "Vice President",
        startYear: "2024",
        endYear: "Present",
        img: HarryImg,
        imgPosition: "50% 20%",
        description: "Harry is a third-year Purdue student majoring in Business Analytics and Information Management, as well as Creative Writing. This is his third year with SIGGD. He loves watching movies, TV shows, youtube videos, and really anything that moves on a screen. He has always loved video games since playing Super Smash Bros with his brother as a kid, and hopes to one day put that interest into making games of his own as a career. Some of his favorite games include Calamity Terraria, Elden Ring, and Ori and the Will of the Wisps."
    },
    { 
        name: "Jake Bromme",
        role: "Art Lead",
        startYear: "2024",
        endYear: "Present",
        img: JakeImg,
        imgPosition: "50% 15%",
        description: "Jake is a sophomore double majoring in Animation & VFX and Game Development. This is his second year with SIGGD. He has a long history with both digital and traditional art, with a primary focus on illustrating fictional stories. He also loves hiking and discovering new music. His favorite games include World of Warcraft: Wrath of the Lich King, The Legend of Zelda: Breath of the Wild, and Life is Strange."
    },
    { 
        name: "Pranav Sukesh",
        role: "Programming Lead",
        startYear: "2025",
        endYear: "Present",
        img: BlankImg,
        imgPosition: "50% 50%",
        description: "Pranav is a second-year Purdue student studying Computer Science with a minor in Mathematics and Economics. This is his second year in SIGGD, and he has over 6 years of experience making games. When he's not developing his own games, you can find him cosplaying or composing music in his spare time. He is a big JRPG fan, with some of his favorites including Xenoblade Chronicles 3, Yakuza 0, and Metaphor: Refantazio."
    },
    { 
        name: "Jasen Speaker",
        role: "Design Lead",
        startYear: "2024",
        endYear: "Present",
        img: JasenImg,
        imgPosition: "35% 25%",
        description: "Jasen is a senior double majoring in Game Development and Web Development at the Polytechnic. This is his third year part of SIGGD and his first on the lead team. Games like Mario Maker inspired a deep love of game design and ever since he's enjoyed designing and programming games. Some of his favorite games include Deltarune, UFO 50, and Spark the Electric Jester"
    },
    { 
        name: "Bode",
        role: "Audio Lead",
        startYear: "2025",
        endYear: "Present",
        img: BlankImg,
        imgPosition: "50% 50%",
        description: "I'm Bode. I am a sophomore CS student whose been doing game development for 7 years. Last year, I was apart of SIGGD's programming team during my freshmen year."
    },
]

export const games = [
    {
        name: "Echoes of Isovios: A Legacy Undone",
        img: EchoesLegacyGameImg,
        description: "In a world devastated by the result of your wrong-doings, find redemption by helping the people you once harmed in this action-packed rogue-lite RPG. Tackle brutal enemies and bosses with as many as 7 character kits, and exeperience each character's unique story as you regain their trust! Fully voice acted!",
        download: "https://siggd.itch.io/siggd-game-2024-2025",
        github: "https://github.com/PurdueSIGGD/SIGGD-Game-2024"
    },
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