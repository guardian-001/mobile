interface sharedType {
  id: number;
  PublishedDate: string;
  Status: string;
  ProjectTitle: string;
  ProjectType: string;
  Location: string;
  PropertyType: string;
  Area: string;
  BudgetRange: string;
  InterestedArchitects: string;
  SearchStatus: boolean;
}
export const ProjectData: sharedType[] = [
  {
    id: 1,
    PublishedDate: '12 Janv. 2024',
    Status: 'Pending',
    ProjectTitle: 'Construction neuve',
    ProjectType: 'Architecte de construction',
    Location: 'Sousse',
    PropertyType: 'Maison',
    Area: '10 m²',
    BudgetRange: '10.000dt - 20.000dt',
    InterestedArchitects: '3 Architectes intéressés par le projet',
    SearchStatus: false,
  },
  {
    id: 2,
    PublishedDate: '20 Fév. 2024',
    Status: 'In Progress',
    ProjectTitle: "Rénovation d'appartement",
    ProjectType: "Architecte d'intérieur",
    Location: 'Tunis',
    PropertyType: 'Appartement',
    Area: '80 m²',
    BudgetRange: '30.000dt - 50.000dt',
    InterestedArchitects: '5 Architectes intéressés par le projet',
    SearchStatus: true,
  },
];
export const ArchitectesImages = [
  '@/assets/images/architecteImage.jpg',
  '@/assets/images/architecteImage.jpg',
  '@/assets/images/architecteImage.jpg',
];
