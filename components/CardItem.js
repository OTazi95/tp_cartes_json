import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';// Composant CardItem avec logique conditionnelle pour le bouton

export default function CardItem({ title, description, image }) {
  // Fonction pour déterminer le lien en fonction du titre
  const getLink = () => { // Ajout de la logique conditionnelle
    if (title.toLowerCase().includes('react')) { // Si le titre contient "react"
      return { url: 'https://reactnative.dev/', label: 'React Native link' }; // Retourne l'URL et son label
    } else if (title.toLowerCase().includes('expo')) { // Si le titre contient "expo"
      return { url: 'https://expo.dev/', label: 'Expo link' }; // Retourne l'URL et le label correspondants
    } else if (title.toLowerCase().includes('flexbox')) { // Si le titre contient "flexbox"
      return { url: 'https://reactnative.dev/docs/flexbox', label: 'Flexbox link' }; // Retourne l'URL et son label
    } else {
      return null;
    }
  };
// Récupère les données du lien
  const linkData = getLink();

  const openLink = () => {
    if (linkData) Linking.openURL(linkData.url);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.cover} />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{description}</Text>

        {/* Affiche le bouton SEULEMENT si un lien correspond */}
        {linkData && (
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn} onPress={openLink}>
              <Text style={styles.btnText}>{linkData.label}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
// Styles pour le composant CardItem
const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  cover: { width: '100%', height: 150 },
  body: { padding: 12 },
  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 },
  desc: { color: '#555', marginBottom: 10 },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    backgroundColor: '#007BFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});