import type { Architect } from '@/types/architect';

export const architectDumpData: Architect = {
  id: 3,
  user: {
    id: 7,
    username: 'AzizSandid',
    firstName: 'Aziz',
    lastName: 'Sandid',
    email: 'AzizSandid@gmail.com',
    phoneNumber: '+21659266785',
    userType: 'Architect',
  },
  architecturalStyles: [
    {
      id: 3,
      label: 'Méditerranéen',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/ArchitecturalStyleIcons/img.png',
    },
  ],
  projectCategories: [
    {
      id: 1,
      label: 'Projet résidentiel',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/ProjectCategoryIcons/img.png',
    },
  ],
  propertyTypes: [
    {
      id: 1,
      label: 'Maison',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/PropertyTypeIcons/img.png',
    },
  ],
  workTypes: [
    {
      id: 1,
      header: 'Construction neuve',
      description:
        "La création d'une structure entièrement nouvelle à partir de zéro",
    },
  ],
  architectSpeciality: {
    id: 1,
    label: 'Architecte de construction',
    icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/ArchitectSpecialityIcons/img.png',
  },
  needs: [
    {
      id: 2,
      label: 'Conception Architecturale 2D/3D',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/NeedIcons/img.png',
      description: 'Plans et modélisation du projet.',
      architectSpeciality: 1,
    },
  ],
  terrainSurfaces: [
    {
      id: 1,
      name: '< 40m²',
    },
  ],
  workSurfaces: [
    {
      id: 1,
      name: '< 40m²',
    },
  ],
  preferredLocations: [
    {
      id: 1,
      name: 'Tunis',
    },
  ],
  budgets: [
    {
      id: 1,
      name: '5.000dt - 10.000dt',
    },
  ],
  createdAt: '2024-08-02T18:03:06+01:00',
  updatedAt: '2024-08-02T18:06:12.158441+01:00',
  address: 'azezae',
  architectIdentifier: 'azezaeza',
  bio: 'Architect specialized in construction, passionate about creating unique designs and functions that meet client needs. Expertise in designing spaces that respond to the unique requirements of clients.',
  companyName: 'CleverTech',
  companyLogo: null,
  presentationVideo:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  projectComplexity: 'Simple',
  yearsExperience: '1-3 years',
  reviews: [
    {
      reviewer: 'Simon Lauren',
      comment: 'Good work, very satisfied.',
      note: 'Very good',
      date: '24 avril 2024',
    },
    {
      reviewer: 'Simon Lauren',
      comment: 'Suggestions were well received.',
      note: 'Good',
      date: '4 avril 2024',
    },
    {
      reviewer: 'Simon Lauren',
      comment: 'Professional and attentive.',
      note: 'Very good',
      date: '20 avril 2024',
    },
    {
      reviewer: 'Simon Lauren',
      comment: 'Excellent design, highly recommended.',
      note: 'Very good',
      date: '24 avril 2024',
    },
  ],
  servicesApprouves: [
    {
      id: 1,
      label: 'Choisir le mobilier et les accessoires',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/ProjectCategoryIcons/img.png',
    },
    {
      id: 2,
      label: 'Choisir les couleurs et les matériaux',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/ProjectCategoryIcons/img.png',
    },
    {
      id: 3,
      label: 'Créer un design moderne et fonctionnel',
      icon: 'https://archimatchsg.blob.core.windows.net/archimatch-dev-container/icons/ProjectCategoryIcons/img.png',
    },
  ],
};
