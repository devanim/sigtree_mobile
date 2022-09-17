import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TopNavigation } from "@ui-kitten/components";
import NavigationAction from "components/NavigationAction";
import React from "react";
import { AppStackParamList } from "src/routing/route-screens";

import Container from "../../../src/components/Container";
import ArticleContainer from "./article-container";
import { articlesScreenStyles } from "./articles-screen-styles";

const ArticlesScreen = (): JSX.Element => {
  const { goBack } = useNavigation<NavigationProp<AppStackParamList>>();

  return (<Container style={articlesScreenStyles.container}>
    <TopNavigation accessoryLeft={() => <NavigationAction onPress={goBack} />} title="Articles"/>
    <ArticleContainer />
  </Container>);
}

export default ArticlesScreen;