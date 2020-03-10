import '@nuxtjs/axios'

export default {
  head: {
    title: 'Cadastre-se',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Recruiit',
      },
    ],
    noscript: [{ innerHTML: 'Body No Scripts', body: true }],
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' })
  },
  data() {
    return {}
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values)
          const data = {
            name: values.name,
            email: values.email,
            phone: values.phone,
            resume: values.file.file.name,
          }

          this.$axios
            .post('http://127.0.0.1:8000/api/v1/admin/', data)
            .then(response => {
              // eslint-disable-next-line no-console
              console.log('LOG: handleSubmit -> response', response)
              this.$router.push({ name: 'email-sent' })
            })
            .catch(errors => {
              // eslint-disable-next-line no-console
              console.log('LOG: handleSubmit -> errors', errors)
            })
        }
      })
    },
    handleChange(info) {
      const status = info.file.status
      if (status !== 'uploading') {
        // eslint-disable-next-line no-console
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        this.$message.error(`${info.file.name} file upload failed.`)
      }
    },
  },
}
