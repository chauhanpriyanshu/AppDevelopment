import React, { useRef, useState } from "react";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

const DrwrBtn = () => {
    return (
    <Button
    title="Open drawer"
    onPress={() => drawer.current.openDrawer()}
    />
    );
}


export default DrwrBtn;