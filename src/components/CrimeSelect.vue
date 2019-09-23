<template>
  <v-card>
    <v-container fluid>
      <v-row
        align="center"
      >
        
        <v-col cols="12" sm="6">
          <v-select
            v-model="value"
            :items="items"
            filled
            chips
            label="Crime Select"
            multiple
          ></v-select>
        </v-col>
        
      </v-row>
    </v-container>
  </v-card>
</template>