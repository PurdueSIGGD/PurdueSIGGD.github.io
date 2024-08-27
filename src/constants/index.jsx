import IvanImg from '../assets/img/people/Ivan.jpg'
import AndrewImg from '../assets/img/people/Andrew.jpg'
import AnshImg from '../assets/img/people/Ansh.jpg'
import NathanImg from '../assets/img/people/Nathan.jpg'
import JacobImg from '../assets/img/people/Jacob.jpg'

import NoImg from '../assets/img/people/no-image.webp'

import VyronovGameImg from '../assets/img/siggdgames/TheVyronovEffect.png'
import SightVinesGameImg from '../assets/img/siggdgames/SightVines.png'
import PlunderTheSeaGameImg from '../assets/img/siggdgames/PlunderTheSea.png'

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
    { label: "Game Jams", href: "gamejams"},
]

export const officers = [
    { 
        name: "Ivan Yang",
        role: "President",
        startYear: "2022",
        endYear: "Present",
        img: IvanImg,
        description: "Ivan Yang is currently majoring Computer Science and Physics and minoring in Chemistry and Mathematics. This is his third year in SIGGD and his first year as the President. He enjoys watching lots of TV shows and movies. He doesn't spend a lot of time playing games, but he is passionate about creating games!"
    },
    { 
        name: "Andrew Hanlon",
        role: "Vice President",
        startYear: "2022",
        endYear: "Present",
        img: AndrewImg,
        description: "Andrew Hanlon is a junior who’s majoring in Biomedical Health Sciences with a Pre-Med concentration. This is his third year in SIGGD and first year on the leadership staff. He’s always had a love for video games and has been working to develop his musical and programming skills during his time in the club. While someday working in the field of medicine is his big focus, he is hopeful that game development can be a hobby for him in the future."
    },
    { 
        name: "Alex Ashby",
        role: "Art Lead",
        startYear: "2022",
        endYear: "Present",
        img: NoImg,
        description: "Alex Ashby is a junior majoring in Game Development & Design with a focus on the creative side of game dev. This is their second year in SIGGD and their first year on the leadership team as the Art Lead. They've always loved both video games and the arts and aspire to be a concept artist at a major studio. They enjoy creating art and writing in their free time… oh, and of course, playing games. Their 3 favorite games are Destiny, Terraria and Death Must Die"
    },
    { 
        name: "Ansh Agrawal",
        role: "Programming Lead",
        startYear: "2023",
        endYear: "Present",
        img: AnshImg,
        description: "Ansh Agrawal is in their third and final year at Purdue, on track to graduate early with a major in Computer Science and minor in Mathematics. This will be his second year in SIGGD and first year as a Programming Lead. He has skills in variety of programming languages and tools. By incorporating his computer science technical ability with game development projects, he aspires to enter the gaming industry and start his own indie game studio some day."
    },
    { 
        name: "Nathan Whitacre",
        role: "Design Lead",
        startYear: "2022",
        endYear: "Present",
        img: NathanImg,
        description: "Nathan is a third-year Purdue student majoring in Computer Science and minoring in Spanish Language and Culture. This is his third year with SIGGD and his second year as Design Lead. When he's not jotting down paper designs or coding his next project, you can find him bouldering at the Corec or practicing his Spanish at the Latino Cultural Center. Some of his favorite video games include Overwatch, The Last of Us, and Celeste."
    },
    { 
        name: "Jacob Aldridge",
        role: "Audio Lead",
        startYear: "2022",
        endYear: "Present",
        img: JacobImg,
        description: "Jacob is a senior studying Computer Science with concentrations in Graphics, Systems Software, and Algorithmic foundations. This is his fourth year in SIGGD and his first year as Audio Lead. He enjoys drawing and making music and is getting minors in both of those areas. Of course, he also loves to play video games."
    },
]

export const games = [
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