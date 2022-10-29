import { NavigationProp, useNavigation } from "@react-navigation/native";
import { TopNavigation } from "@ui-kitten/components";
import { Layout } from "@ui-kitten/components/ui";
import React from "react";
import { useContext } from "react";
import { StyleSheet } from "react-native";
import { Appbar } from 'react-native-paper';

import LocalizationContext from "../../../localization/localization-context";
import { AppStackParamList } from "../../../routing/route-screens";
import UserScreenContainer from "./change-password-container";

const ChangePasswordScreen = (): JSX.Element => {
  const { t } = useContext(LocalizationContext);
  const { goBack } = useNavigation<NavigationProp<AppStackParamList>>();

  return (
    <Layout style={styles.container} level='1'>
      <Appbar.Header style={{ backgroundColor: '#fff' }}>
        <Appbar.Content title={t("USER_PROFILE_CHANGE_PASSWORD").toUpperCase()} />
        <Appbar.Action icon="window-close" onPress={goBack} />
      </Appbar.Header>
      <UserScreenContainer />
    </Layout>);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: "10%",
  }
});
export default ChangePasswordScreen;
