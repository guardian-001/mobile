import { Home, Trafic } from '@/assets/icons';
import { HouseModel, InteriorHouseModel } from '@/assets/icons/archimatch';

import type { preferredStyleType, sharedType, workType } from '../types';

export const NeedsData: sharedType[] = [
  { id: 1, label: 'Plans permis et suivi chantier', icon: Trafic },
  { id: 2, label: 'Plan 3d de décoration extérieur', icon: Trafic },
  { id: 3, label: 'Plans et permis de construire', icon: Trafic },
  { id: 4, label: 'Plan 3d de décoration intérieur', icon: Trafic },
  { id: 5, label: 'Plans permis et suivi chantier', icon: Trafic },
  { id: 6, label: 'Plan 3d de décoration intérieur', icon: Trafic },
];
export const CategoryData: sharedType[] = [
  { id: 1, label: 'Construction logement', icon: Home },
  { id: 2, label: 'Point vente et commercial', icon: Home },
  { id: 3, label: 'Grand oeuvre immobilier', icon: Home },
  { id: 4, label: 'Industrielle', icon: Home },
];
export const ExtensionsData: sharedType[] = [
  { id: 1, label: 'Ascenseur', icon: Home },
  { id: 2, label: 'Escaliers', icon: Home },
  { id: 3, label: 'Salle de cinéma', icon: Home },
  { id: 4, label: 'Salle de jeux', icon: Home },
  { id: 5, label: 'Cave à cigares', icon: Home },
  { id: 6, label: 'Salles de réunion', icon: Home },
  { id: 7, label: 'Salles de fête', icon: Home },
  { id: 8, label: 'Bibliothèques', icon: Home },
  { id: 9, label: 'Espaces de collaboration', icon: Home },
  { id: 10, label: 'Aires', icon: Home },
  { id: 11, label: 'Bureaux', icon: Home },
  { id: 12, label: 'Salles de conférence', icon: Home },
  { id: 13, label: 'Salles de classe', icon: Home },
  { id: 14, label: 'Salles de réception', icon: Home },
];
export const PreferredStyleData: preferredStyleType[] = [
  { id: 1, label: 'Architecture moderne' },
  { id: 2, label: 'Architecture Méditerranéenne' },
  { id: 3, label: 'Architecture Contemporaine' },
  { id: 4, label: 'Style Traditionnel' },
  { id: 5, label: 'Architecture de Tourisme' },
  { id: 6, label: 'Architecture Institutionnelle et Publique' },
  { id: 7, label: 'Autre' },
];
export const PropertyData: sharedType[] = [
  { id: 1, label: 'Maison', icon: Home },
  { id: 2, label: 'Villa', icon: Home },
  { id: 3, label: 'Appartement', icon: Home },
  { id: 4, label: 'Immobilier', icon: Home },
];
export const RenovateData: sharedType[] = [
  { id: 1, label: 'Suite parentale', icon: Home },
  { id: 2, label: 'Chambre', icon: Home },
  { id: 3, label: 'Chambre enfant', icon: Home },
  { id: 4, label: 'Salon', icon: Home },
  { id: 5, label: 'Cuisine', icon: Home },
  { id: 6, label: 'Salle à manger', icon: Home },
  { id: 7, label: 'Salle de bain', icon: Home },
  { id: 8, label: 'Bureau', icon: Home },
  { id: 9, label: 'Terrasse', icon: Home },
  { id: 10, label: 'Jardin', icon: Home },
  { id: 11, label: 'Hall ou Entrée', icon: Home },
  { id: 12, label: 'Garage', icon: Home },
];
export const toggleCardData: sharedType[] = [
  { id: 1, label: 'Architecte de construction	', icon: HouseModel },
  { id: 2, label: "Designer d'interieur", icon: InteriorHouseModel },
  { id: 3, label: 'Artisan de construction', icon: InteriorHouseModel },
];
export const workTypeData: workType[] = [
  {
    id: 1,
    header: 'Construction neuve',
    description:
      "La création d'une nouvelle structure entièrement neuve à partir de zéro",
  },
  {
    id: 2,
    header: 'Rénovation extérieure',
    description:
      "Rafraîchissement ou transformation de l'apparence extérieure d'un bâtiment existant",
  },
  {
    id: 3,
    header: 'Extension & aménagement',
    description:
      "Agrandissement et optimisation des espaces d'un bâtiment existant",
  },
  {
    id: 4,
    header: 'Surélévation',
    description: "Ajout d'un ou plusieurs niveaux à un bâtiment existant",
  },
  {
    id: 5,
    header: 'Rénovation intérieure',
    description:
      "Transformation et modernisation des espaces intérieurs d'un bâtiment",
  },
  {
    id: 6,
    header: 'Aménagement de combles',
    description: 'Transformation des combles en pièces habitables',
  },
  { id: 7, header: 'Autre', description: '' },
];
