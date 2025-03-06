# Use OpenJDK 21 as base image
FROM openjdk:21

# Set working directory inside the container
WORKDIR /app

# Copy the built JAR file into the container
COPY target/backend-0.0.1-SNAPSHOT.jar app.jar

# Expose the application port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]