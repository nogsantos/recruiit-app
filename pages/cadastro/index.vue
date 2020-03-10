<template>
  <div class="register__container">
    <div class="register__container__form">
      <a-row :gutter="8">
        <a-col :span="24">
          <h1>Bem vindo ao Recruiit</h1>
          <div class="text--limiter">
            Agradecemos seu interesse em trabalhar conosco. Para iniciar sua candidatura, preencha os campos abaixo e ao
            final, nos envie seu currículo no formato <strong>PDF</strong>
          </div>
        </a-col>
        <a-col :span="24">
          <a-form :form="form" layout="vertical" @submit="handleSubmit">
            <a-form-item label="Nome">
              <a-input v-decorator="['name', { rules: [{ required: true, message: 'Informe seu nome' }] }]" />
            </a-form-item>
            <a-form-item label="Email">
              <a-input
                v-decorator="[
                  'email',
                  {
                    rules: [
                      {
                        type: 'email',
                        message: 'Não é um E-mail válido',
                      },
                      {
                        required: true,
                        message: 'Informe seu e-mail',
                      },
                    ],
                  },
                ]"
              />
            </a-form-item>
            <a-form-item label="Telefone">
              <a-input v-decorator="['phone', { rules: [{ required: true, message: 'Informe seu telefone' }] }]" />
            </a-form-item>
            <a-form-item label="Curriculo">
              <a-upload-dragger
                name="file"
                :multiple="true"
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                @change="handleChange"
              >
                <p class="ant-upload-drag-icon">
                  <a-icon type="inbox" />
                </p>
                <p class="ant-upload-text">Clique ou arreste o arquivo para essa área</p>
                <p class="ant-upload-hint">
                  Envie um arquivo no formato PDF
                </p>
              </a-upload-dragger>
            </a-form-item>
            <a-form-item>
              <a-button type="primary" html-type="submit" block>
                Cadastrar
              </a-button>
            </a-form-item>
          </a-form>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss" scoped></style>
