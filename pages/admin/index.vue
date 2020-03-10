<template>
  <div style="padding: 40px;">
    <a-row :gutter="64">
      <h1 class="text--highlight" style="margin-left: 32px; margin-bottom: 0;">Administrador</h1>
      <h2 style="color: rgba(0, 0, 0, 0.65); margin: 10px 0 40px 32px;">Primeira Etapa: Análise dos currículos</h2>
      <a-col :span="6">
        <h2 class="text--highlight">
          <a-icon type="clock-circle" :style="{ fontSize: '20px', color: 'rgb(0, 153, 255)' }" /> Processando
        </h2>
        <a-card
          v-for="(item, index) in processing"
          :key="item + index"
          class="card"
          :headStyle="{ 'border-bottom': '1px solid rgb(0, 153, 255)', color: 'rgba(0, 0, 0, 0.65)' }"
          style="margin-top: 32px; border-color: rgb(0, 153, 255);"
          :title="item.name"
        >
          <p><span class="text--highlight">Email: </span>{{ item.email }}</p>
          <p><span class="text--highlight">Telefone: </span>{{ item.phone }}</p>
          <p class="text--highlight">
            <a-icon type="clock-circle" :style="{ fontSize: '16px', color: 'rgb(0, 153, 255)' }" /> Processando
          </p>
        </a-card>
      </a-col>
      <a-col :span="6">
        <h2 class="text--highlight">
          <a-icon type="check-circle" :style="{ fontSize: '20px', color: 'rgb(51, 204, 51)' }" /> Aprovado
        </h2>
        <a-card
          v-for="(item, index) in approved"
          :key="item + index"
          class="card"
          :headStyle="{ 'border-bottom': '1px solid rgb(51, 204, 51)', color: 'rgba(0, 0, 0, 0.65)' }"
          style="margin-top: 32px; border-color: rgb(51, 204, 51;"
          :title="item.name"
        >
          <p><span class="text--highlight">Email: </span>{{ item.email }}</p>
          <p><span class="text--highlight">Telefone: </span>{{ item.phone }}</p>
          <p><span class="text--highlight">Nota: </span>{{ item.grade }}</p>
          <div class="card__footer">
            <p class="text--highlight">
              <a-icon type="check-circle" :style="{ fontSize: '16px', color: 'rgb(51, 204, 51)' }" /> Aprovado
            </p>
            <a-tooltip>
              <template slot="title">Download do Currículo</template>
              <a-button class="button"
                ><a-icon type="file-pdf" />
                <a
                  class="button__link"
                  :href="
                    'https://res.cloudinary.com/nogsantos/image/upload/v1583872871/instruct/' + item.resume + '.pdf'
                  "
                  target="_blank"
                  >Download</a
                ></a-button
              >
            </a-tooltip>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <h2 class="text--highlight">
          <a-icon type="close-circle" :style="{ fontSize: '20px', color: 'rgb(255, 51, 0)' }" /> Reprovado
        </h2>
        <a-card
          v-for="(item, index) in reproved"
          :key="item + index"
          class="card"
          :headStyle="{ 'border-bottom': '1px solid rgb(255, 51, 0)', color: 'rgba(0, 0, 0, 0.65)' }"
          style="margin-top: 32px; border-color: rgb(255, 51, 0);"
          :title="item.name"
        >
          <p><span class="text--highlight">Email: </span>{{ item.email }}</p>
          <p><span class="text--highlight">Telefone: </span>{{ item.phone }}</p>
          <p><span class="text--highlight">Nota: </span>{{ item.grade }}</p>
          <div class="card__footer">
            <p class="text--highlight">
              <a-icon type="close-circle" :style="{ fontSize: '16px', color: 'rgb(255, 51, 0)' }" /> Reprovado
            </p>
            <a-tooltip>
              <template slot="title">Download do Currículo</template>
              <a-button class="button"
                ><a-icon type="file-pdf" />
                <a
                  class="button__link"
                  :href="
                    'https://res.cloudinary.com/nogsantos/image/upload/v1583872871/instruct/' + item.resume + '.pdf'
                  "
                  target="_blank"
                  >Download</a
                ></a-button
              >
            </a-tooltip>
          </div>
        </a-card>
      </a-col>
      <a-col :span="6">
        <h2 class="text--highlight">
          <a-icon type="warning" :style="{ fontSize: '20px', color: 'rgb(255, 153, 0)' }" /> Quarentena
        </h2>
        <a-card
          v-for="(item, index) in quarantine"
          :key="item + index"
          class="card"
          :headStyle="{ 'border-bottom': '1px solid rgb(255, 153, 0)', color: 'rgba(0, 0, 0, 0.65)' }"
          style="margin-top: 32px; border-color: rgb(255, 153, 0);"
          :title="item.name"
        >
          <p><span class="text--highlight">Email: </span>{{ item.email }}</p>
          <p><span class="text--highlight">Telefone: </span>{{ item.phone }}</p>
          <p><span class="text--highlight">Nota: </span>{{ item.grade }}</p>
          <div class="card__footer">
            <p class="text--highlight">
              <a-icon type="warning" :style="{ fontSize: '16px', color: 'rgb(255, 153, 0)' }" /> Quarentena
            </p>
            <a-tooltip>
              <template slot="title">Download do Currículo</template>
              <a-button class="button"
                ><a-icon type="file-pdf" />
                <a
                  class="button__link"
                  :href="
                    'https://res.cloudinary.com/nogsantos/image/upload/v1583872871/instruct/' + item.resume + '.pdf'
                  "
                  target="_blank"
                  >Download</a
                ></a-button
              >
            </a-tooltip>
          </div>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
