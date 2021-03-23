<template>
  <div>
    <h2>quan li danh sach article</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: function(){
      this.axios.get(
        'http://localhost/api/post?page=1&per_page=10'
      )
      .then( response => {
        this.posts = response.data.data;
      })
    }
  }
}
</script>




<style scoped>

</style>
