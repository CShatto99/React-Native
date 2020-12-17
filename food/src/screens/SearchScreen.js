import React, { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [query, setQuery] = useState("");
  const [searchAPI, results, errMsg] = useResults();

  const filterResultsByPrice = price =>
    results.filter(result => result.price === price);

  return (
    <>
      <SearchBar
        query={query}
        onQuery={setQuery}
        onQuerySubmit={() => searchAPI(query)}
      />
      {errMsg ? <Text>{errMsg}</Text> : null}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice("$")}
        />
        <ResultsList title="Bit Pricier" results={filterResultsByPrice("$$")} />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice("$$$")}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchScreen;
