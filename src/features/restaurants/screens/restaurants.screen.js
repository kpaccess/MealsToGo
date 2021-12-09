import React, { useState } from "react";
import { View, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  const marginHeight = StatusBar.currentHeight && StatusBar.currentHeight;

  const SafeArea = styled(SafeAreaView)`
    flex: 1;
    margin-top: ${marginHeight}px;
  `;

  const SearchContainer = styled(View)`
    padding: 16px;
  `;

  const RestaurantListContainer = styled.View`
    flex: 1;
    padding: 16px;
    background-color: blue;
  `;

  console.log(" StatusBar", StatusBar.currentHeight);
  console.log(" height ", marginHeight);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};
