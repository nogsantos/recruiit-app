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
