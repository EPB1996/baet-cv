import { TimelineItemProps } from "../timeline/timelineInteraces";

const EducationDTO: Array<TimelineItemProps> = [
  {
    title: "Language School",
    description:
      "3 months stay in Paris.",
    institution: "EF - Education First",
    logo: require("../assest/education_first.jpg"),
    periode: "Nov. 2022  - Jan. 2023",
  },
  {
    title: "Bachelor of Science in Computer Science",
    description:
      "Vice President & Member of Kreaktiv  association, responsible for campus activities and event organisation",
    institution: "OST - Ostschweizer Fachhochschule, Rapperswil",
    logo: require("../assest/ost_logo.png"),
    periode: "Okt. 2019  - Mar. 2022",
  },
  {
    title: "Computer Science, -",
    description:
      "Vice President & Member of Kreaktiv  association, responsible for campus activities and event organisation",
    institution: "Swiss Federal Institute of Technology Zürich ETH, Zürich",
    logo: require("../assest/eth.jpg"),
    periode: "Sept. 2015  - Aug. 2019",
  },
];
export default EducationDTO;
