import brandLogo from './brand/campuslab-logo.png';
import s1Python from './labs/s1-python.png';
import s1EeeWorkshop from './labs/s1-eee-workshop.png';
import s2CProgramming from './labs/s2-c-programming.png';
import s2ItWorkshop from './labs/s2-it-workshop.png';
import s3Dsa from './labs/s3-dsa.png';
import s3Digital from './labs/s3-digital.png';
import s3Oop from './labs/s3-oop.png';
import s4Os from './labs/s4-os.png';
import s4Dbms from './labs/s4-dbms.png';
import s4Coa from './labs/s4-coa.png';
import s5Networks from './labs/s5-networks.png';
import s5Ml from './labs/s5-ml.png';
import s5Microcontrollers from './labs/s5-microcontrollers.png';
import s6Systems from './labs/s6-systems.png';
import s6Cybersec from './labs/s6-cybersec.png';
import projects from './labs/projects.png';

// AI Illustrations
import dashboardOsHero from './illustrations/dashboard-os-hero.png';
import terminalProcessTree from './illustrations/terminal-process-tree.png';
import loginTechHero from './illustrations/login-tech-hero.png';

// Image Icons & Art
import cIcon from './icons/c-icon.svg';
import forkIcon from './icons/fork-icon.svg';
import treeIcon from './icons/tree-icon.svg';
import ktuEmblem from './icons/ktu-emblem.svg';
import dashboardOsArt from './icons/dashboard-os-art.svg';
import terminalTreeArt from './icons/terminal-tree-art.svg';
import terminalPreview from './icons/terminal-preview.svg';
import sqlPreview from './icons/sql-preview.svg';

// Avatars
import studentAvatar from './avatars/student-avatar.svg';
import facultyAvatar from './avatars/faculty-avatar.svg';

export const ASSETS = {
  brand: {
    logo: brandLogo,
  },
  labs: {
    UCEST105: s1Python,
    GXESL106: s1EeeWorkshop,
    GXEST204: s2CProgramming,
    GXESL208: s2ItWorkshop,
    PCCSL307: s3Dsa,
    PCCSL308: s3Digital,
    PBCST304: s3Oop,
    PCCSL407: s4Os,
    PCCSL408: s4Dbms,
    PBCST404: s4Coa,
    PCCSL507: s5Networks,
    PCCSL508: s5Ml,
    PBCST504: s5Microcontrollers,
    PCCSL607: s6Systems,
    PBCST604: s6Cybersec,
    PCCSP608: projects,
    PCCSS705: projects,
    PCCSP706: projects,
    PCCSP806: projects,
  } as Record<string, string>,
  illustrations: {
    dashboardOsHero,
    terminalProcessTree,
    loginTechHero,
  },
  icons: {
    c: cIcon,
    fork: forkIcon,
    tree: treeIcon,
    ktuEmblem,
    dashboardOsArt,
    terminalTreeArt,
    terminalPreview,
    sqlPreview,
  },
  avatars: {
    student: studentAvatar,
    faculty: facultyAvatar,
  },
} as const;

export default ASSETS;
