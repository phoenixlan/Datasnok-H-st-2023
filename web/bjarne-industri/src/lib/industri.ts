export type Industry = {
  name: string;
  description: string;
};

const industries: Industry[] = [
  {
    name: "Teknologi",
    description:
      "Industrien som driver innovasjon og utvikling av datateknologi og programvare.",
  },
  {
    name: "Helse og medisin",
    description:
      "Næringer dedikert til å forbedre menneskers helse gjennom medisinsk forskning og behandling.",
  },
  {
    name: "Miljø og bærekraft",
    description:
      "Industrier som fokuserer på å bevare planeten vår og redusere miljøpåvirkningen.",
  },
  {
    name: "Underholdning og kultur",
    description:
      "Kreative næringer som film, musikk, kunst og mote som former vår kultur og underholdning.",
  },
  {
    name: "Bygg og konstruksjon",
    description:
      "Industrien som bygger infrastruktur, bygninger og infrastrukturprosjekter.",
  },
  {
    name: "Mat og drikke",
    description:
      "Næringer knyttet til produksjon, tilberedning og distribusjon av mat og drikkevarer.",
  },
  {
    name: "Energi",
    description:
      "Industrien som gir kraft og drivstoff for å støtte samfunnets behov.",
  },
  {
    name: "Finans",
    description:
      "Næringer som involverer økonomi, investeringer og pengemarkeder.",
  },
];

export const getIndustries = (): Industry[] => industries;
export const getIndustrySecret = (): string => "PHOENIX{55G_CAN_B3_SCARY}";
