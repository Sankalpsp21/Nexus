import {
  FaBinoculars,
  FaBirthdayCake,
  FaBlind,
  FaBookDead,
  FaBookOpen,
  FaBrain,
  FaBriefcase,
  FaCameraRetro,
  FaChild,
  FaDeaf,
  FaGlobeAmericas,
  FaHandHoldingMedical,
  FaHome,
  FaLandmark,
  FaMedal,
  FaPuzzlePiece,
  FaRainbow,
  FaRecycle,
  FaRibbon,
  FaStar,
  FaWheelchair,
} from 'react-icons/fa';

import { GiGamepad, GiPlantRoots, GiSolderingIron } from 'react-icons/gi';

export function ArrowIcon() {
  return (
    <div>
      <p className="text-2xl text-900 italic -translate-x-64 mb-1">It's completely free!</p>
      <img src="/arrow.png" alt="arrow" className="-translate-x-40 rotate-90" />
    </div>
  );
}

export const ICONS = [
  {
    name: 'Mental Health',
    icon: <FaBrain />,
  },
  {
    name: 'Physical Health',
    icon: <FaHandHoldingMedical />,
  },
  {
    name: 'Autism',
    icon: <FaPuzzlePiece />,
  },
  {
    name: 'Dyslexia',
    icon: <FaBookOpen />,
  },
  {
    name: 'Mobility Impairment',
    icon: <FaWheelchair />,
  },
  {
    name: 'Blind and Visually Impaired',
    icon: <FaBlind />,
  },
  {
    name: 'Deaf and Hard of Hearing',
    icon: <FaDeaf />,
  },
  {
    name: 'Cancer Survivors and Fighters',
    icon: <FaRibbon />,
  },
  {
    name: 'Parenting',
    icon: <FaChild />,
  },
  {
    name: 'LGBTQ+',
    icon: <FaRainbow />,
  },
  {
    name: 'Veterans',
    icon: <FaMedal />,
      },
  {
    name: 'Unemployment and Career Transition',
    icon: <FaBriefcase />,
  },
  {
    name: 'Immigrants and Refugees',
    icon: <FaGlobeAmericas />,
  },
  {
    name: 'Baking',
    icon: <FaBirthdayCake />,
  },
  {
    name: 'Gardening',
    icon: <GiPlantRoots />,
  },
  {
    name: 'Astronomy and Star Gazing',
    icon: <FaStar />,
  },
  {
    name: 'Indie Games',
    icon: <GiGamepad />,
  },
  {
    name: 'Videography and Photography',
    icon: <FaCameraRetro />,
  },
  {
    name: 'Environment',
    icon: <FaRecycle />,
  },
  {
    name: 'Science Fiction',
    icon: <FaBookDead />,
  },
  {
    name: 'Houses',
    icon: <FaHome />,
  },
  {
    name: 'Electronics and Tinkering',
    icon: <GiSolderingIron />,
  },
  {
    name: 'Bird Watching',
    icon: <FaBinoculars />,
  },
  {
    name: 'History',
    icon: <FaLandmark />,
  },
];

