import { FlatList, Text, TouchableOpacity } from "react-native";
import React from "react";
import Home from "../../screens/Home";
import styles from "./styles";

const Categories = ({ categories, selectedCategory, onCategoryPress }) => {
    return (
        <FlatList 
            horizontal
            data={categories}
            keyExtractor={(item) => String(item)}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => {
                const selected = selectedCategory === item
                return (
                    <TouchableOpacity 
                    onPress={() => onCategoryPress(item)} 
                    style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? { marginLeft: 32 } : {}]}
                    >
                        <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{item}</Text>
                    </TouchableOpacity>
                )
            }
        }
        />
    );
};

export default React.memo(Categories);

