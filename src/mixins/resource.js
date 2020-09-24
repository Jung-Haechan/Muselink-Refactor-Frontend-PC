import resourceHandler from '../utilities/resourceHandler'

export default {
  data () {
    return {
      referenceResource: null,
      resourceUri: null,
      filter: {},
      columns: [],
      selected: [],
      loading: false,
      filterQuery: {},
      data: [],
      total: 0,
      showEditForm: false,
      showResultDialog: false,
      resultData: {},
      editForm: {}
    }
  },
  methods: {
    getData (requestQuery) {
      this.loading = true
      this.data = []
      resourceHandler.index(this.resourceUri, requestQuery, (res) => {
        this.total = res.data.total
        res.data.data.forEach((data) => {
          this.pushData(data)
        })
      }, () => {
        this.loading = false
      })
    },
    showData (id, type = null) {
      if (type === null) this.showEditForm = true
      resourceHandler.show(this.resourceUri, id, (res) => {
        this.editForm = res.data
      })
    },
    updateData (id) {
      this.loading = true
      resourceHandler.update(this.resourceUri, id, this.editForm, () => {
        this.loading = false
        this.search()
      })
    },
    storeData () {
      this.loading = true
      resourceHandler.store(this.resourceUri, this.createForm, () => {
        this.loading = false
        this.search()
      })
    },
    deleteData (id) {
      this.loading = true
      resourceHandler.delete(this.resourceUri, id, null, () => {
        this.search()
        this.loading = false
      })
    },
    deleteBatchData (data) {
      this.loading = true
      resourceHandler.delete(this.resourceUri, null, data, () => {
        this.search()
        this.loading = false
      })
    },
    patchData (action, data) {
      this.loading = true
      resourceHandler.patchAction(this.resourceUri, action, data,
        (res) => {
          this.showResultDialog = true
          this.resultData = {}
          this.resultData = res.data
        },
        () => {
          this.search()
          this.loading = false
        })
    },
    exportData () {
      this.loading = true
      const requestQuery = this.fetchQueryString()
      resourceHandler.export(this.resourceUri, requestQuery, () => {
        this.loading = false
      })
    },
    search () {
      const requestQuery = this.fetchQueryString()
      this.getData(requestQuery)
    },
    fetchQueryString () {
      const requestQuery = {
        c: this.referenceResource,
        f: []
      }
      Object.values(this.filterQuery).forEach((data) => {
        if (Array.isArray(data)) {
          data.forEach((string) => {
            requestQuery.f.push(string)
          })
        } else {
          requestQuery.f.push(data)
        }
      })
      return requestQuery
    },
    addFilterQuery (value, source) {
      this.filterQuery[source] = value
    }
  }
}
