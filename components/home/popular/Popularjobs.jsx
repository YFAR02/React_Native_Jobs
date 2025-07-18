import React from 'react'
import { useState } from 'react'

import { View,
   Text,
   TouchableOpacity,
   FlatList,
   ActivityIndicator,
}
 from 'react-native'
import { useRouter } from 'expo-router';

import styles from './popularjobs.style'
import {COLORS, SIZES } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { isLoading } from 'expo-font';

const Popularjobs = () => {
  const router = useRouter();
  const isLoading = true; // Placeholder for loading state
  const error = false; 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <Text style={styles.headerBtn}>Show all</Text>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size = "large" colors = {COLORS.primary} />
        ): error ? (
          <Text> Something went wrong</Text>
        ):(
          <FlatList
          data = {[1,2,3,4]}
          renderItem = {({item}) => (
            <PopularJobCard
              job={item}
              // onPress={() => router.push(`/job-details/${item.id}`)}
            />
          )}
          keyExtractor = {item => item?.id}
          // each key in a list should have unique key prop 
          contentContainerStyle = {{
            columnGap: SIZES.medium
          }}
          horizontal
          />
        )}
      </View>
    </View>
  );
}

export default Popularjobs