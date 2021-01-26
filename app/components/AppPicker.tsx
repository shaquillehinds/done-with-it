import React from "react";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

import defaultStyles from "../config/styles";

interface ItemProps {
  label: string;
  value: string;
}

interface PickerProps {
  icon?: icons;
  otherProps: any;
  onValueChange: (text: string) => void;
  items: ItemProps[];
  selectedValue: string;
}

const AppPicker = ({ icon, otherProps, onValueChange, items, selectedValue }: PickerProps) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
      <Picker selectedValue={selectedValue} style={styles.picker} onValueChange={(value) => onValueChange(value as string)} {...otherProps}>
        {items.map(
          (item: ItemProps): React.ReactNode => (
            <Picker.Item value={item.value} label={item.label} key={item.value} />
          )
        )}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  picker: { flex: 1, height: "100%" },
  icon: {
    marginRight: 10,
  },
});

export default AppPicker;
