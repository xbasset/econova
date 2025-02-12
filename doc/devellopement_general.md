# Design System pour Econova

## Introduction

Ce guide présente les composants et fichiers essentiels pour structurer le design system d'Econova. L'objectif est de gagner du temps en définnisant les styles et la structure de l'application.

## Structure des Dossiers

```
/econova
  /components
    ThemedText.tsx
    Card.tsx
  /constants
    colors.ts
    shadows.ts
  /hooks
    useThemeColors.ts
  /screens
    SettingsScreen.tsx
    QuestScreen.tsx
  App.tsx
```

## Fichiers et Composants

### 1. `ThemedText.tsx`

**Rôle :** Définir les styles pour les textes.

**Contenu :**

```tsx
import React from 'react';
import { Text, TextStyle, StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';

interface ThemedTextProps {
  variant?: keyof typeof styles;
  color?: keyof ReturnType<typeof useThemeColors>;
  style?: TextStyle;
}

const styles = StyleSheet.create({
  body: { fontSize: 14, lineHeight: 20 },
  headline: { fontSize: 24, lineHeight: 32 },
  // Ajoutez d'autres variantes ici
});

const ThemedText: React.FC<ThemedTextProps> = ({ variant = 'body', color = 'darkGrey', style, ...props }) => {
  const colors = useThemeColors();
  const textStyle = [styles[variant], { color: colors[color] }, style];

  return <Text style={textStyle} {...props} />;
};

export default ThemedText;
```

### 2. `colors.ts`

**Rôle :** Définir les couleurs pour les thèmes light et dark.

**Contenu :**

```ts
export const colors = {
  light: {
    primary: '#4CAF50', // Vert
    secondary: '#2196F3', // Bleu
    background: '#FFFFFF', // Blanc
    text: '#000000', // Noir
    greyLight: '#F5F5F5',
    greyDark: '#AAAAAA',
    // A modifier selon nos préférences
  },
  dark: {
    primary: '#388E3C',
    secondary: '#1976D2',
    background: '#121212',
    text: '#FFFFFF',
    greyLight: '#373737',
    greyDark: '#616161',
    // A modifier selon nos préférences
  },
};
```

### 3. `useThemeColors.ts`

**Rôle :** Hook pour récupérer les couleurs en fonction du thème actif.

**Contenu :**

```ts
import { useColorScheme } from 'react-native';
import { colors } from '../constants/colors';

const useThemeColors = () => {
  const theme = useColorScheme() || 'light';
  return colors[theme];
};

export default useThemeColors;
```

### 4. `Card.tsx`

**Rôle :** Composant pour les cartes avec ombres et bordures arrondies.

**Contenu :**

```tsx
import React from 'react';
import { View, ViewStyle, StyleSheet } from 'react-native';
import useThemeColors from '../hooks/useThemeColors';
import { shadows } from '../constants/shadows';

interface CardProps {
  style?: ViewStyle;
}

const Card: React.FC<CardProps> = ({ style, ...props }) => {
  const colors = useThemeColors();
  const cardStyle = [styles.card, { backgroundColor: colors.background }, style];

  return <View style={cardStyle} {...props} />;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    ...shadows.dp2,
    // A modifier selon nos préférences
  },
});

export default Card;
```

### 5. `shadows.ts`

**Rôle :** Définir les styles d'ombres pour les composants.

**Contenu :**

```ts
import { ViewStyle } from 'react-native';

export const shadows = {
  dp2: {
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    elevation: 2,
  } as ViewStyle,
  // A modifier selon nos préférences
};
```

### 6. `SettingsScreen.tsx`

**Rôle :** Écran des paramètres avec des options de réinitialisation, profil, et statistiques.


### 7. `QuestScreen.tsx`

**Rôle :** Écran des quêtes avec des publications interactives.


### 8. `App.tsx`

**Rôle :** Point d'entrée de l'application.

