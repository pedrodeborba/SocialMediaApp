import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Post } from "../lib/api";
import { Card, Text, useThemeColor } from "./Themed";
import { FontAwesome } from "@expo/vector-icons";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  const color = useThemeColor({}, "primary");
  return (
    <Card style={styles.container}>
      {/* Header */}
      <Card style={styles.header}>
        <Image
          source={{ uri: "https://www.thoughtco.com/thmb/uAj33yEBplPVl84Uc-axOjDDRzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/mike-tyson-kicks-off-australia-speaking-tour-in-brisbane-156502182-5ce081ba44f640c8955e51aa1a939341.jpg" }}
          style={styles.avatar}
        />
        <Text style={styles.username}>Você</Text>
      </Card>
      {/* Image */}
      {post.image && (
        <Card style={styles.imageContainer}>
          <Image source={{ uri: post.image }} style={styles.image} />
        </Card>
      )}
      {/* Content */}
      <Card style={styles.content}>
        <Text style={styles.contentText}>{post.content}</Text>
        {/* Footer */}
        <Card style={styles.footer}>
          <TouchableOpacity>
            <FontAwesome name="heart-o" size={24} color={color} />
          </TouchableOpacity>
        </Card>
      </Card>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 8,
    paddingHorizontal: 16,
  },
  avatar: {
    height: 32,
    width: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  username: {
    fontWeight: "bold",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginTop: 8,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  content: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
  },
  footer: {
    paddingTop: 8,
  },
});