import axios from 'axios'

export default {
  head: {
    title: 'Admin',
  },
  data() {
    return {
      approved: '',
      reproved: '',
      quarantine: '',
      processing: '',
    }
  },
  mounted() {
    axios
      .get('http://127.0.0.1:8000/api/v1/admin/', {
        params: {
          status: 'processing',
        },
      })
      .then(response => {
        this.processing = response.data.results
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://127.0.0.1:8000/api/v1/admin/', {
        params: {
          status: 'approved',
        },
      })
      .then(response => {
        this.approved = response.data.results
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://127.0.0.1:8000/api/v1/admin/', {
        params: {
          status: 'reproved',
        },
      })
      .then(response => {
        this.reproved = response.data.results
      })
      .catch(error => {
        console.log(error)
      })

    axios
      .get('http://127.0.0.1:8000/api/v1/admin/', {
        params: {
          status: 'quarantine',
        },
      })
      .then(response => {
        this.quarantine = response.data.results
      })
      .catch(error => {
        console.log(error)
      })
  },
}
